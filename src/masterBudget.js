export class MasterBudget {
    constructor() {
        this.totalMonthlyIncome = 0;
        this.numberChildren = 0;
        this.numberAdults = 0;
        this.foodCost = 0;
        this.otherCost = 0;
        this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes'];
        this.percentageByCategory = [0.1, 0.2, 0.1, 0.1, 0.1, 0.1, 0.3];
    }
}