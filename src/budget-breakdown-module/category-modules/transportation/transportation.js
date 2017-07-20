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
        this.isMonthly = true;
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }
<<<<<<< HEAD

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        
    }

=======
>>>>>>> 1d6f603079ddcef5100782f7982feef1faad340e
}