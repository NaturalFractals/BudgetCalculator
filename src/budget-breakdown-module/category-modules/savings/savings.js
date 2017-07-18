import {inject} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
export class Savings {

    constructor(constants) {
        this.includeInBudget = true;
        this.cost = 0;
        this.constants = constants;
        this.emergencyFundCost = 0;
        this.retirementCost = 0;
        this.investmentsCost = 0;
        this.collegeSavingsCost = 0;
    }

    //Calculates cost of savings
    calculateAdvancedSavings() {
        this.cost = this.emergencyFundCost + this.retirementCost + this.investmentsCost + this.collegeSavingsCost;
    }
}