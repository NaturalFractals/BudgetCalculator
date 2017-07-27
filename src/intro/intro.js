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
        this.getLocation(false);
    }

    //Retrieves the user's current location.
    //TODO: Move this method out of intro.js
    async getLocation(userInput) {
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
                self.getCurrentLocation(data2, userInput);
                console.log(self.masterBudget.location);
                let householdCost = await self.httpClient.fetch('api/household-cost-county/get.json');
                let houseHoldCostData = await householdCost.json();
                houseHoldCostData.costByCounty.forEach((houseObject) => {
                    if (houseObject.County == self.masterBudget.location)
                        self.masterBudget.housing.cost += houseObject[self.masterBudget.numberAdults]
                })
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
        // self.masterBudget.transportation.calculateAdvancedTransportationCost();
        self.masterBudget.transportation.cost = parseInt(parseInt(self.masterBudget.transportation.carYearlyUpkeepCost) / 12) + parseInt(self.masterBudget.transportation.carMonthlyOwnershipCost);

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
                self.masterBudget.medical.cost = parseInt(healthData[2] / 12);
            }
        });
    }

    //Handles the click button for adults
    test(clickAction) {
        var self = this;
        this.masterBudget.numberAdults = clickAction + 1;
        let federalSingle = [0, 9325, 37950, 91900, 191650, 416700, 418401, 100000000000];
        let federalSinglePercent = [0.1, 0.15, 0.25, 0.28, 0.33, 0.35, 0.40, 0.3960]; 
        let federalMarried = [0, 18650, 75900, 153100, 233350, 416700, 470700, 1000000000];
        let federalMarriedPercent = [0.1, 0.15, 0.25, 0.28, 0.33, 0.33, 0.35, 0.3960];
        var count = 0;
        var index = -1;
        if(clickAction + 1 == 1) {
            federalSingle.forEach((value) => {
                count += 1;
                if(self.income <= value && index == -1) {
                    index = count;
                }
            });
            this.masterBudget.taxes.federalTaxCost = parseInt(this.income) * federalSinglePercent[index];
            this.masterBudget.taxes.cost += parseInt(this.masterBudget.taxes.federalTaxCost);
        } else {
            federalMarried.forEach((value) => {
                count++;
                if(self.income <= value && index == -1) {
                    index = count;
                }
            });
            this.masterBudget.taxes.federalTaxCost = parseInt(this.income) * federalMarriedPercent[index];
            this.masterBudget.taxes.cost += this.masterBudget.taxes.federalTaxCost;
        }
    }

    //Handles the click button for the children
    test2(clickAction) {
        this.masterBudget.numberChildren = clickAction;
        this.masterBudget.food.calculateFoodCost(this.masterBudget.numberChildren, this.masterBudget.numberAdults);
    }

    //Get current county/location of user
    getCurrentLocation(jsonData, userInput) {
        var array = jsonData.results[4].formatted_address.split(",");
        if(!userInput)
            this.masterBudget.location = array[0];
    }

    //Routes the user to the results page after clicking budget button
    route() {
        if(this.masterBudget.numberChildren == 0)
            this.masterBudget.childCare.cost = 0;
        if(this.masterBudget.numberChildren > 1) {
            var tempMultiplier = parseInt(this.masterBudget.childCare.cost);
            for(var i = 1; i < parseInt(this.masterBudget.numberChildren); i++) {
                this.masterBudget.childCare.cost += parseInt(tempMultiplier) * 0.5;
            }
        }
        this.masterBudget.taxes.calculateAdvancedTaxCost();
        this.masterBudget.savings.calculateAdvancedSavings();
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
    async getMonthlyIncome() {
        var self = this;
        //Get average state taxes based on income
        let stateTax = await this.httpClient.fetch('api/state-taxes/get.json');
        let stateTaxData = await stateTax.json();
        stateTaxData.taxes.forEach((state) => {
            if (self.masterBudget.stateLocation == state[0] && self.income < state[2]) {
                self.masterBudget.taxes.stateTaxCost = self.income * state[1];
                self.masterBudget.taxes.grossIncome = self.income - self.masterBudget.taxes.cost;
                self.masterBudget.totalMonthlyIncome = parseInt(this.income) / 12;
                self.masterBudget.savings.cost = this.income * 0.15;
            }
        });
    }
}