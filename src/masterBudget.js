export class MasterBudget {
    constructor() {
        this.totalMonthlyIncome = 0;
        this.numberChildren = 0;
        this.numberAdults = 0;
        this.stateLocation = 'Alabama';
        this.foodCost = 0;
        this.otherCost = 0;
        this.housingCost = 0;
        this.carCost = 0;
        this.childCareCost = 0;
        this.medicalCost = 0;
        this.savingsCost = 0;
        this.taxesCost = 0;
        this.sumOfAllCost = 0;
        this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes'];
        this.percentageByCategory = [];
    }
}