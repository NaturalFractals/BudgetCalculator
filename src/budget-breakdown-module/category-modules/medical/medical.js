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
        this.healthInflation = 1.0379;
        this.medicationCost = 0;
        this.dentalCost = 0;
        this.otherMedicalCost = 0;
        this.collapsed = true;
        this.eventAggregator = eventAggregator;
        this.isMonthly = true;
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }

    //Calculates the advanced cost of the medical category
    calculateAdvancedMedical() {
        this.cost = parseInt(this.dentalCost) + parseInt(this.healthInsuranceCost);
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        
    }
}