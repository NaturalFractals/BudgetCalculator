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

@inject(Constants)
export class MasterBudget {
    constructor(constants) {
        this.constants = constants;
        this.location = "";
        this.totalMonthlyIncome = 8000;
        this.numberChildren = 2;
        this.numberAdults = 1;
        this.stateLocation = 'Alabama';

        this.food = new Food(this.numberChildren, this.numberAdults, this.constants);
        //TODO: Move this method call out of the this class
        this.food.cost = this.food.calculateFoodCost();

        this.other = new Other(this.totalMonthlyIncome, this.constants);
        //TODO: Move this method call out of the this class
        this.other.cost = this.other.getBasicOtherCost();

        this.housing = new Housing();

        this.medical = new Medical();

        this.taxes = new Taxes();

        this.savings = new Savings();

        this.childCare = new ChildCare();

        this.carYearlyUpkeepCost = 0;
        this.carMonthlyOwnershipCost = 0;
        this.sumOfAllCost = 0;
        this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes'];
        this.percentageByCategory = [];

        this.chart = null;
    }
}