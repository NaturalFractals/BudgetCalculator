import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { HttpClient, json } from 'aurelia-fetch-client';

@inject(Router, HttpClient)
export class Intro {
    numberChildren;
    numberAdults;

    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
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
                console.log(data2);
            });
        };
        await window.onload();
    }

    //Routes the user to the results page after clicking budget button
    route() {
        this.router.navigate("#/results");
    }
}