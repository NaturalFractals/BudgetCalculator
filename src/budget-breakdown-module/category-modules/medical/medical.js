import {inject} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
export class Medical {
    constructor(constants) {
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.healthInsuranceCost = 0;
        this.dentalCost = 0;
    }

    //Calculates the advanced cost of the medical category
    calculateAdvancedMedical() {
        this.cost = this.dentalCost + this.healthInsuranceCost;
    }
}