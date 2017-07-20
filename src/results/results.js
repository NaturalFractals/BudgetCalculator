import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class Results {
    constructor(router) {
        this.router = router;
    }

    //Routes the user to the goals page
    routeGoals() {
        this.router.navigate("#/goals");
    }

    //Routes the user to the five year plan page
    routeFiveYearPlan() {
        this.router.navigate("#/five-year")
    }

    //Routes the user to the auto budget page
    routeAutoBudget() {
        this.router.navigate("#/auto-budget")
    }
}