import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';
import {Constants} from 'constants';

@inject(MasterBudget, Constants)
export class Food {
    constructor(masterBudget, constants) {
        this.masterBudget = masterBudget;
        this.constants = constants;
        this.cost = this.calculateFoodCost();
    }

    //Calculate the basic food cost for the household
    calculateFoodCost() {
        this.masterBudget.foodCost = this.masterBudget.numberChildren * this.constants.foodCostPerChild + this.masterBudget.numberAdults * this.constants.foodCostPerAdult;
    }

    //Calculate detailed food cost
    calculateAdvancedFoodCost() {

    }
}