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
        this.collapsed = true;
        this.publicTransportationCost = 0;
        this.eventAggregator = eventAggregator;
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }
}