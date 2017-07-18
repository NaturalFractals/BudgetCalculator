import {inject} from 'aurelia-framework';
import {Constants} from '../../../constants';

@inject(Constants)
export class Food {
    constructor(constants) {
        this.includeInBudget = true;
        this.groceries = 0;
        this.constants = constants;
        this.cost = 0;
        this.groceriesCost = 0;
        this.diningOutCost = 0;
    }

    //Calculate the basic food cost for the household
    calculateFoodCost(numberChildren, numberAdults) {
        this.cost =  numberChildren * this.constants.foodCostPerChild + numberAdults * this.constants.foodCostPerAdult;
    }

    //Calculate detailed food cost
    calculateAdvancedFoodCost() {
        this.cost = this.grocerciesCost + this.diningOutCost;
    }
}