import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';
import {Constants} from 'constants';

@inject(MasterBudget, Constants)
export class Other {
    constructor(masterBudget, constants) {
        this.masterBudget = masterBudget;
        this.constants = constants;
    }

    //Calculates the basic cost of the other category
    getBasicOtherCost() {
        this.masterBudget.otherCost = this.masterBudget.totalMonthlyIncome * 0.05;
    }
}