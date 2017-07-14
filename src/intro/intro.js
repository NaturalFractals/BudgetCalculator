import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient, json } from 'aurelia-fetch-client';
import { MasterBudget } from 'masterBudget';

@inject(Router, HttpClient, MasterBudget)
export class Intro {
    numberChildren;
    numberAdults;

    constructor(router, httpClient, masterBudget) {
        this.router = router;
        this.httpClient = httpClient;
        this.masterBudget = masterBudget;
        this.getLocation();

        this.income = null;
        this.displayIncome = "";
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
            });
        };
        await window.onload();
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