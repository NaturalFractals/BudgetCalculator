import {inject} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
export class Taxes {
    constructor(constants) {
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.vehicleTaxCost = 0;
        this.housingTaxCost = 0;
    }

    //Calculates cost of vehicle and housing tax entered by the user.
    calculateAdvancedTaxCost() {
        return this.vehicleTaxCost + this.housingTaxCost;
    }
}