import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient, json } from 'aurelia-fetch-client';
import { ChartFactory } from '../utilities/chartFactory';
import { MasterBudget } from 'masterBudget';

@inject(Router, HttpClient, MasterBudget)
export class Intro {

    constructor(router, httpClient, masterBudget) {
        this.router = router;
        this.httpClient = httpClient;
        this.masterBudget = masterBudget;
        this.getLocation();
    }

    //Retrieves the user's current location.
    //TODO: Move this method out of intro.js
    async getLocation() {
        var self = this;

        // check for Geolocation support
        if (navigator.geolocation) {
            console.log('Geolocation is supported!');
        }
        else {
            console.log('Geolocation is not supported for this Browser/OS version yet.');
        }

        //Load users current location
        window.onload = async function () {
            var startPos;
            navigator.geolocation.getCurrentPosition(async function (position) {
                startPos = position;
                let data = await self.httpClient.fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + startPos.coords.latitude + ',' + startPos.coords.longitude + '&key=AIzaSyBM9-m7L5132H_bDe3JUn9tlwblTARBRbQ');
                let data2 = await data.json();
                self.getCurrentLocation(data2);
            });
        };
        await window.onload();

        let childCare = await this.httpClient.fetch('/api/child-care/get.json');
        let childCareData = await childCare.json();
        //Get average child care cost by state
        childCareData.costByState.forEach((stateData) => {
            if (stateData[0] == self.masterBudget.stateLocation) {
                self.masterBudget.childCare.cost = stateData[8];
            }
        })

        let carCost = await this.httpClient.fetch('/api/car-costs/get.json');
        let carCostData = await carCost.json();
        //Get average car cost for repairs, insurance, and gasoline
        carCostData.costByState.forEach((stateData) => {
            if (stateData[0] === self.masterBudget.stateLocation) {
                self.masterBudget.transportation.carYearlyUpkeepCost = stateData[4];
            }
        });
        //Get average car cost for renting/buying
        carCostData.costByAge.forEach((ageData) => {
            if (ageData[0] >= self.masterBudget.currentUserAge) {
                self.masterBudget.transportation.carMonthlyOwnershipCost = ageData[2];
            }
        });
        console.log(this.masterBudget.transportation);

        //Get average home insurance cost
        let homeInsurance = await this.httpClient.fetch('/api/home-insurance/get.json');
        let homeInsuranceData = await homeInsurance.json();
        homeInsuranceData.costByState.forEach((homeData) => {
            if (homeData[0] == self.masterBudget.stateLocation) {
                self.masterBudget.housing.cost = homeData[1];
            }
        });

        //Get average health insurance cost
        let healthInsurance = await this.httpClient.fetch('api/healthcare-insurance/get.json');
        let healthInsuranceData = await healthInsurance.json();
        healthInsuranceData.costByState.forEach((healthData) => {
            if (healthData[0] == self.masterBudget.stateLocation) {
                self.masterBudget.medical.cost = healthData[2];
            }
        });
    }

    //Get current county/location of user
    getCurrentLocation(jsonData) {
        var array = jsonData.results[4].formatted_address.split(",");
        this.masterBudget.location = array[0];
    }

    //Routes the user to the results page after clicking budget button
    route() {
        this.router.navigate("#/results");
    }

    //Sanitize the income input to U.S. dollar format
    sanitizeIncome() {
        this.masterBudget.annualIncome = this.masterBudget.annualIncome.replace(/,/g, "");
        this.masterBudget.annualIncome = this.masterBudget.annualIncome.replace(/\$/g, "");

        this.income = parseInt(this.masterBudget.annualIncome);

        this.masterBudget.annualIncome = '$' + this.income.toLocaleString();
    }

    //Calculates the monthly income based on entered annual income
    getMonthlyIncome() {
        console.log(this.masterBudget.annualIncome);
        console.log(this.income);
        this.masterBudget.totalMonthlyIncome = parseInt(this.income) / 12;
        console.log(this.masterBudget.totalMonthlyIncome);
    }
}