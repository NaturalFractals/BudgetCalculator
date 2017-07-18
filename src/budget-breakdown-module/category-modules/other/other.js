import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
@singleton()
export class Other {
    constructor(constants) {
        this.includeInBudget = true;
        this.constants = constants
        this.cost = 0;
        this.cellPhoneCost = 0;
        this.recreationCost = 0;
        this.gymCost = 0;
        this.entertainmentCost = 0;
        this.clothingCost = 0;
    }

    //Calculates the basic cost of the other category
    getBasicOtherCost() {
        this.cost = this.totalMonthlyIncome * this.constants.miscellaneousCost;
    }

    //Calculates the advanced cost of other category
    calculateAdvancedOtherCost() {
        this.cost = this.cellPhoneCost + this.recreationCost + this.gymCost + this.entertainmentCost + this.clothingCost;
    }
}