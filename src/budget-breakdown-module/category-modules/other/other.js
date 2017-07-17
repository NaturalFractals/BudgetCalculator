export class Other {
    constructor(totalMonthlyIncome, constants) {
        this.includeInBudget = true;
        this.totalMonthlyIncome = totalMonthlyIncome;
        this.constants = constants;
        this.cost = 0;
        console.log(this.totalMonthlyIncome);
        console.log(this.cost);
    }

    //Calculates the basic cost of the other category
    getBasicOtherCost() {
        return this.totalMonthlyIncome * this.constants.miscellaneousCost;
    }
}