import {Food} from 'budget-breakdown-module/category-modules/food/food';
import {Other} from 'budget-breakdown-module/category-modules/other/other';
import {Housing} from 'budget-breakdown-module/category-modules/housing/housing';
import {Medical} from 'budget-breakdown-module/category-modules/medical/medical';
import {Taxes} from 'budget-breakdown-module/category-modules/taxes/taxes';
import {Savings} from 'budget-breakdown-module/category-modules/savings/savings';
import {ChildCare} from 'budget-breakdown-module/category-modules/child-care/child-care';
import {singleton} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants, Food, Other, Housing, Medical, Taxes, Savings, ChildCare)
export class MasterBudget {
    constructor(constants, food, other, housing, medical, taxes, savings, childCare) {
        this.constants = constants;
        this.location = "";
        this.annualIncome = 0;
        this.totalMonthlyIncome = 8000;
        this.numberChildren = 2;
        this.numberAdults = 1;
        this.stateLocation = 'Alabama';

        this.food = food;
        this.food.calculateFoodCost(this.numberChildren, this.numberAdults); 
        this.other = other;
        this.housing = housing;
        this.medical = medical;
        this.taxes = taxes;
        this.savings = savings;
        this.childCare = childCare;

        this.carYearlyUpkeepCost = 0;
        this.carMonthlyOwnershipCost = 0;
        this.sumOfAllCost = 0;
        this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes'];
        this.percentageByCategory = [];

        this.chart = null;
    }
}