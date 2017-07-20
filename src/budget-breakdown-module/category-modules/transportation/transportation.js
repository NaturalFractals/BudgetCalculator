import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
@singleton()
export class Transportation {
    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.collapsed = true;
        this.publicTransportationCost = 0;
        this.publicTransportationInflation = 1.0329;
        this.carYearlyUpkeepCost = 0;
        this.carMonthlyOwnershipCost = 0;
        this.eventAggregator = eventAggregator;
        this.isMonthly = true;
    }

    //Calculates the average transportation for the basic calc page.
    calculateAverageTransportationCost() {
        this.cost = parseInt(this.carYearlyUpkeepCost) + parseInt(this.carMonthlyOwnershipCost);
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
    }
}