import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';

@inject(Router)
export class AutoBudget {
    constructor(router) {
        this.router = router;
    }

    routeResults() {
        this.router.navigate("#/results");
    }
}