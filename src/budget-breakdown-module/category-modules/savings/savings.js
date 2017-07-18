import {inject} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
export class Savings {

    constructor(constants) {
        this.cost = 0;
        this.constants = constants;
        this.emergencyFundCost = 0;
        this.retirementCost = 0;
        this.investmentsCost = 0;
        this.collegeSavingsCost = 0;
    }

    //Adds emergency fund to total savings cost
    calculateEmergencyFundCost(emergencyFund) {
        this.cost += emergencyFund;
    }

    //Add retirement savings to savings cost
    calculateRetirementCost(retirementCost) {
        this.cost += retirementCost;
    }

    //Add investment cost to savings cost
    calcualteInvestmentsCost(investmentCost) {
        this.cost += investmentCost;
    }

    //Add college cost to savings cost
    calculateCollegeSavingsCost(collegeCost) {
        this.cost += collegeCost;
    }
}