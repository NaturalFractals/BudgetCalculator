import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
@singleton()
export class Savings {

    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.cost = 0;
        this.costPercentage = 0;
        this.constants = constants;
        this.emergencyFundCost = 0;
        this.retirementCost = 0;
        this.investmentsCost = 0;
        this.collegeSavingsCost = 0;
        this.collapsed = true;
        this.eventAggregator = eventAggregator;
        this.isMonthly = false;
        this.omitted = 0;
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }

    //Calculates cost of savings
    calculateAdvancedSavings() {
        var scale = this.isMonthly ? 1 : 1 / 12;   // divide by 12 if the user input yearly numbers
        this.cost = parseInt( ( parseInt(this.emergencyFundCost) + parseInt(this.retirementCost) + parseInt(this.investmentsCost) + parseInt(this.collegeSavingsCost) + parseInt(this.omitted)) * scale);
        // this.cost = this.cost.toFixed(2);

        this.eventAggregator.publish('update', {name: 'Savings', value: this.cost});
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        this.calculateAdvancedSavings();
    }
}