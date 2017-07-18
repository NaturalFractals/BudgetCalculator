import {inject, singleton} from 'aurelia-framework';
import {Constants} from '../../../constants';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Constants, EventAggregator)
@singleton()
export class Food {
    constructor(constants, eventAggregator) {
        this.includeInBudget = true;
        this.groceries = 0;
        this.constants = constants;
        this.cost = 0;
        this.groceriesCost = 0;
        this.diningOutCost = 0;
<<<<<<< HEAD
        this.eventAggregator = eventAggregator;
    }

    toggleInclude() {
        this.eventAggregator.publish('toggle chart element', 'Food');
=======
        this.numberChildren = 0;
        this.numberAdults = 1;
>>>>>>> 355ee9a98a4c442f6cf7cf239af5b87b33d0470f
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