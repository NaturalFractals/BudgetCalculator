import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
@singleton()
export class Housing {
    constructor(constants){
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.monthlyRentCost = 0;
        this.homeInsuranceCost = 0;
        this.utilitiesCost = 0;
    }

    //Calculates advanced cost for housing
    calculateAdvancedCost() {
        this.cost = this.monthlyRentCost + this.homeInsuranceCost + this.utilitiesCost;
    }
}