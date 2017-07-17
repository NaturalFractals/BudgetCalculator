export class Savings {

    constructor() {
        this.cost = 0;
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