import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
@singleton()
export class Housing {
    constructor(constants, eventAggregator){
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.monthlyRentCost = 0;
        this.homeInsuranceCost = 0;
        this.utilitiesCost = 0;
        this.eventAggregator = eventAggregator;
    }

    //Calculates advanced cost for housing
    calculateAdvancedCost() {
        this.cost = parseInt(this.monthlyRentCost) + parseInt(this.homeInsuranceCost) + parseInt(this.utilitiesCost);
    }
}