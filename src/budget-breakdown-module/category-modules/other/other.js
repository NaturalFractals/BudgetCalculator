import {inject} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
export class Other {
    constructor(constants) {
        this.includeInBudget = true;
        this.constants = constants
        this.cost = 0;
        this.cellPhoneCost = 0;
    }

    //Calculates the basic cost of the other category
    getBasicOtherCost() {
        return this.totalMonthlyIncome * Constants.miscellaneousCost;
    }
}