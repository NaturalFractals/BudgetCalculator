import {inject, singleton} from 'aurelia-framework';
import {Constants} from '../../../constants';

@inject(Constants) 
@singleton()
export class Food {
    constructor(constants) {
        this.includeInBudget = true;
        this.groceries = 0;
        this.constants = constants;
        this.cost = 0;
        this.groceriesCost = 0;
        this.diningOutCost = 0;
        this.numberChildren = 0;
        this.numberAdults = 1;
    }

    //Calculate the basic food cost for the household
    calculateFoodCost(numberChildren, numberAdults) {
        this.numberChildren = numberChildren;
        this.numberAdults = numberAdults;
        this.cost =  parseInt(numberChildren) * parseInt(this.constants.foodCostPerChild) + parseInt(numberAdults) * parseInt(this.constants.foodCostPerAdult);
    }

    //Calculate detailed food cost
    calculateAdvancedFoodCost() {
        this.cost = parseInt(this.groceriesCost) + parseInt(this.diningOutCost);
    }
}