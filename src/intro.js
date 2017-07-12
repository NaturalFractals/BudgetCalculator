import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class Intro {
    numberChildren;
    numberAdults;
    constructor(router) {
        this.router = router;

        //     this.httpClient.fetch('https://maps.googleapis.com/maps/api/geocode/json?address=23314&key=AIzaSyBM9-m7L5132H_bDe3JUn9tlwblTARBRbQ')
        //   .then(response => response.json())
        //   .then(data => {
        //      console.log(data.results[0]);
        //   });
    }

    route() {
        this.router.navigate("#/results");
    }
}