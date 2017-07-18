import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
@singleton()
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
        this.cost = parseInt(this.emergencyFundCost) + parseInt(this.retirementCost) + parseInt(this.investmentsCost) + parseInt(this.collegeSavingsCost);
    }
}