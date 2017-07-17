import {Food} from 'budget-breakdown-module/category-modules/food/food';
import {singleton} from 'aurelia-framework';

@singleton()
export class MasterBudget {
    constructor() {
        this.totalMonthlyIncome = 0;
        this.numberChildren = 0;
        this.numberAdults = 0;
        this.stateLocation = 'Alabama';
        this.food = new Food(this);
        this.otherCost = 0;
        this.housingCost = 0;
        this.carYearlyUpkeepCost = 0;
        this.carMonthlyOwnershipCost = 0;
        this.childCareCost = 0;
        this.medicalCost = 0;
        this.savingsCost = 0;
        this.taxesCost = 0;
        this.sumOfAllCost = 0;
        this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes'];
        this.percentageByCategory = [];
    }
}