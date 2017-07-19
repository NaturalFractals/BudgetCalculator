import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
@singleton()
export class Other {
    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.constants = constants
        this.cost = 0;
        this.costPercentage = 0;
        this.cellPhoneCost = 0;
        this.recreationCost = 0;
        this.gymCost = 0;
        this.entertainmentCost = 0;
        this.clothingCost = 0;
        this.eventAggregator = eventAggregator;
    }

    //Calculates the basic cost of the other category
    getBasicOtherCost() {
        this.cost = this.totalMonthlyIncome * this.constants.miscellaneousCost;
    }

    //Calculates the advanced cost of other category
    calculateAdvancedOtherCost() {
        this.cost = parseInt(this.cellPhoneCost) + parseInt(this.recreationCost) + parseInt(this.gymCost) + parseInt(this.entertainmentCost) + parseInt(this.clothingCost);
    }
}