import {inject} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
export class Housing {
    constructor(constants){
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.monthlyRentCost = 0;
        this.homeInsuranceCost = 0;
        this.utilitiesCost = 0;
    }
}