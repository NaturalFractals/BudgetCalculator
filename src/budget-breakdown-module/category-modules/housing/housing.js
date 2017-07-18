import {inject} from 'aurelia-framework';
import {Constants} from 'constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
export class Housing {
    constructor(constants, eventAggregator){
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.monthlyRentCost = 0;
        this.homeInsuranceCost = 0;
        this.utilitiesCost = 0;
        this.eventAggregator = eventAggregator;
    }

    toggleInclude() {
        this.eventAggregator.publish('toggle chart element', 'Housing');
    }

    //Calculates advanced cost for housing
    calculateAdvancedCost() {
        this.cost = this.monthlyRentCost + this.homeInsuranceCost + this.utilitiesCost;
    }
}