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
        this.privateSchoolCost = 0;
        this.daycareCost = 0;
        this.eventAggregator = eventAggregator;
    }

    toggleInclude() {
        this.eventAggregator.publish('toggle chart element', 'Child Care');
    }

    //Calculates the cost of the advanced child care cost
    calculateAdvancedChildCareCost() {
        this.cost = this.privateSchoolCost + this.daycareCost;
    }
}