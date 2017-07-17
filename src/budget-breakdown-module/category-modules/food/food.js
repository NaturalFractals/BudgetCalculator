import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';
import {Constants} from 'constants';

@inject(MasterBudget, Constants)
export class Food {
    constructor(masterBudget, constants) {
        this.includeInBudget = true;

        this.masterBudget = masterBudget;
        this.constants = constants;
    }

    //Calculate the basic food cost for the household
    calculateFoodCost() {
        this.masterBudget.foodCost = this.masterBudget.numberChildren * 155.70 + this.masterBudget.numberAdults * 158.70;
    }

    //Calculate detailed food cost
    calculateAdvancedFoodCost() {

    }
}