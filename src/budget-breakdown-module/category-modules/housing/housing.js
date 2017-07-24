import { inject, singleton } from 'aurelia-framework';
import { Constants } from 'constants';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
@singleton()
export class Housing {
    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.monthlyRentCost = 0;
        this.monthlyRentInflation = 1.0269;
        this.homeInsuranceCost = 0;
        this.homeInsuranceInflation = 1.0170;
        this.homeMaintenanceCost = 0;
        this.homeMaintenanceInflation  = 1.0229;
        this.homeTelephoneCost = 0;
        this.homeTelephoneInflation = 0.9915;
        this.utilitiesCost = 0;
        this.collapsed = true;
        this.eventAggregator = eventAggregator;
        this.isMonthly = true;
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed
    }

    //Calculates advanced cost for housing
    calculateAdvancedCost() {
        this.cost = parseInt(this.monthlyRentCost) + parseInt(this.homeInsuranceCost) + parseInt(this.utilitiesCost);
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        
    }
}