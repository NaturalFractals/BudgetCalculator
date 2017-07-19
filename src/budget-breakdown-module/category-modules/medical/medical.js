import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
@singleton()
export class Medical {
    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.healthInsuranceCost = 0;
        this.dentalCost = 0;
        this.eventAggregator = eventAggregator;
    }

    //Calculates the advanced cost of the medical category
    calculateAdvancedMedical() {
        this.cost = parseInt(this.dentalCost) + parseInt(this.healthInsuranceCost);
    }
}