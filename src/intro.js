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

    async getLocation() {
        var lat = 0;
        var lng = 0;
        // check for Geolocation support
        if (navigator.geolocation) {
            console.log('Geolocation is supported!');
        }
        else {
            console.log('Geolocation is not supported for this Browser/OS version yet.');
        }
        window.onload = function () {
            var startPos;
            navigator.geolocation.getCurrentPosition(function (position) {
                startPos = position;
                document.getElementById('startLat').innerHTML = startPos.coords.latitude;
                lat = startPos.coords.latitude;
                document.getElementById('startLon').innerHTML = startPos.coords.longitude;
                lng = startPos.coords.longitude;
            });
        };
        await window.onload();
        console.log(lat);
        console.log(lng);
        let data = await this.httpClient.fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=AIzaSyBM9-m7L5132H_bDe3JUn9tlwblTARBRbQ');
        let data2 = await data.json();
        console.log(data2);
    }

    attached() {
    }

    route() {
        this.router.navigate("#/results");
    }
}