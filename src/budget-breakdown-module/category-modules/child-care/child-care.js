import {inject, singleton} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {Constants} from 'constants';

@inject(Constants, EventAggregator)
@singleton()
export class ChildCare {
    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.privateSchoolCost = 0;
        this.daycareCost = 0;
        this.schoolExpenseCost = 0;
        this.childSupportCost = 0;
        this.eventAggregator = eventAggregator;
        this.collapsed = true;
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }

    //Calculates the cost of the advanced child care cost
    calculateAdvancedChildCareCost() {
        this.cost = parseInt(this.privateSchoolCost) + parseInt(this.daycareCost);
    }
}