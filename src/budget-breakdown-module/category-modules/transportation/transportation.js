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
        this.otherCost = 0;
        this.collapsed = true;
        this.publicTransportationCost = 0;
        this.publicTransportationInflation = 1.0329;
        this.carYearlyUpkeepCost = 0;
        this.carMonthlyOwnershipCost = 0;
        this.hasCar = 0;
        this.eventAggregator = eventAggregator;
        this.isMonthly = true;
    }

    //Calculates the average transportation for the basic calc page.
    calculateAdvancedTransportationCost() {
        var scale = this.isMonthly ? 1 : 1 / 12;   // divide by 12 if the user input yearly numbers
        this.cost = parseInt( ( parseInt(this.carYearlyUpkeepCost) + parseInt(this.carMonthlyOwnershipCost) ) * scale);
        // this.cost = this.cost.toFixed(2);

        this.eventAggregator.publish('update', {name: 'Transportation', value: this.cost});
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        this.calculateAdvancedTransportationCost();
    }
}