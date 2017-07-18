import {inject} from 'aurelia-framework';
import {Constants} from 'constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
export class Savings {

    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.cost = 0;
        this.constants = constants;
        this.emergencyFundCost = 0;
        this.retirementCost = 0;
        this.investmentsCost = 0;
        this.collegeSavingsCost = 0;
        this.eventAggregator = eventAggregator;
    }

    toggleInclude() {
        this.eventAggregator.publish('toggle chart element', 'Savings');
    }

    //Calculates cost of savings
    calculateAdvancedSavings() {
        this.cost = this.emergencyFundCost + this.retirementCost + this.investmentsCost + this.collegeSavingsCost;
    }
}