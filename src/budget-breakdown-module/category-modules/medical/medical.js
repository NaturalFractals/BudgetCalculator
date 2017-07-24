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
        var scale = this.isMonthly ? 1 : 1 / 12;   // divide by 12 if the user input yearly numbers 
        this.cost = parseInt( ( parseInt(this.dentalCost) + parseInt(this.healthInsuranceCost) + parseInt(this.medicationCost)  + parseInt(this.otherMedicalCost) ) * scale);
        // this.cost = this.cost.toFixed(2);

        this.eventAggregator.publish('update', {name: 'Medical', value: this.cost});
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        this.calculateAdvancedMedical();
    }
}