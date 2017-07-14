import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient, json } from 'aurelia-fetch-client';
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
        console.log(childCareData);
        //Get average child care cost by state
        childCareData.costByState.forEach((stateData) => {
            if(stateData[0] == self.masterBudget.stateLocation) {
                self.masterBudget.childCareCost = stateData[8];
            }
        })

        let carCost = await this.httpClient.fetch('/api/car-costs/get.json');
        let carCostData = await carCost.json();
        console.log(carCostData);
        //Get average car cost for repairs, insurance, and gasoline
        carCostData.costByState.forEach((stateData) => {
            if(stateData[0] === self.masterBudget.stateLocation) {
                self.masterBudget.carYearlyUpkeepCost = stateData[4];
            }
        })
        //Get average car cost for renting/buying
        carCostData.costByAge.forEach((ageData) =>{
            if(ageData[0] >= self.masterBudget.currentUserAge) {
                selfmasterBudget.carMonthlyOwnershipCost = ageData[2];
            }
        })

        let homeInsurance = await this.httpClient.fetch('/api/healthcare-insurance');
        let homeInsuranceData = await homeInsurance.json();
        console.log(homeInsuranceData);
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

    sanitizeIncome() {
        this.displayIncome = this.displayIncome.replace(/,/g, "");
        this.displayIncome = this.displayIncome.replace(/\$/g, "");

        this.income = parseInt(this.displayIncome);

        this.displayIncome = '$' + this.income.toLocaleString();
    }
}