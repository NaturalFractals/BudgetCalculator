import { Food } from 'budget-breakdown-module/category-modules/food/food';
import { Other } from 'budget-breakdown-module/category-modules/other/other';
import { Housing } from 'budget-breakdown-module/category-modules/housing/housing';
import { Medical } from 'budget-breakdown-module/category-modules/medical/medical';
import { Taxes } from 'budget-breakdown-module/category-modules/taxes/taxes';
import { Savings } from 'budget-breakdown-module/category-modules/savings/savings';
import { ChildCare } from 'budget-breakdown-module/category-modules/child-care/child-care';
import { Transportation } from 'budget-breakdown-module/category-modules/transportation/transportation';
import { singleton } from 'aurelia-framework';
import { inject } from 'aurelia-framework';
import { Constants } from 'constants';

@inject(Constants, Food, Other, Housing, Medical, Taxes, Savings, ChildCare, Transportation)
export class MasterBudget {
    constructor(constants, food, other, housing, medical, taxes, savings, childCare, transportation) {
        this.constants = constants;
        this.location = "";
        this.annualIncome;
        this.totalMonthlyIncome = 2000;
        this.numberChildren = 1;
        this.numberAdults = 2;
        this.stateLocation = 'Alabama';

        this.food = food;
        this.food.calculateFoodCost(this.numberChildren, this.numberAdults);
        this.other = other;
        this.housing = housing;
        this.medical = medical;
        this.taxes = taxes;
        this.savings = savings;
        this.childCare = childCare;
        this.transportation = transportation;

        this.sumOfAllCost = 0;
        this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes', 'Transportation'];
        this.percentageByCategory = [];

        this.chart = null;
    }

    //Sum cost for all categories
    sumAllCost() {
        this.sumOfAllCost = parseInt(this.food.cost) + parseInt(this.savings.cost) + parseInt(this.other.cost) + parseInt(this.housing.cost) + parseInt(this.medical.cost) + parseInt(this.taxes.cost) + parseInt(this.childCare.cost) + parseInt(this.transportation.cost);
    }
}