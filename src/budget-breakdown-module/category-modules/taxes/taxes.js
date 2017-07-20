import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
@singleton()
export class Taxes {
    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.vehicleTaxCost = 0;
        this.housingTaxCost = 0;
        this.collapsed = true;
        this.eventAggregator = eventAggregator;
        this.isMonthly = true;
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }

    //Calculates cost of vehicle and housing tax entered by the user.
    calculateAdvancedTaxCost() {
        this.cost =  parseInt(this.vehicleTaxCost) + parseInt(this.housingTaxCost);
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        
    }
}