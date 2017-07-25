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
        var scale = this.isMonthly ? 1 : 1 / 12;   // divide by 12 if the user input yearly numbers
        this.cost =  parseInt( ( parseInt(this.vehicleTaxCost) + parseInt(this.housingTaxCost) ) * scale);
        // this.cost = this.cost.toFixed(2);

        this.eventAggregator.publish('update', {name: 'Taxes', value: this.cost});
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        this.calculateAdvancedTaxCost();
    }
}