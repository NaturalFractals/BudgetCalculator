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
        this.costPercentage = 0;
        this.groceriesCost = 0;
        this.groceriesInflation = 1.0295;
        this.diningOutCost = 0;
        this.diningOutInflation = 1.0304;
        this.workdayCost = 0;
        this.collapsed = true;
        this.eventAggregator = eventAggregator;
        this.isMonthly = true;
    }

    //Toggles the arrow of the collapse menu
    toggle() {
        this.collapsed = !this.collapsed;
    }

    //Calculate the basic food cost for the household
    calculateFoodCost(numberChildren, numberAdults) {
        this.numberChildren = numberChildren;
        this.numberAdults = numberAdults;
        this.cost =  parseInt(numberChildren) * parseInt(this.constants.foodCostPerChild) + parseInt(numberAdults) * parseInt(this.constants.foodCostPerAdult);
    }

    //Calculate detailed food cost
    calculateAdvancedFoodCost() {
        var scale = this.isMonthly ? 1 : 1 / 12;   // divide by 12 if the user input yearly numbers 
        this.cost = parseInt( ( parseInt(this.groceriesCost) + parseInt(this.diningOutCost) ) * scale);
        // this.cost = this.cost.toFixed(2);

        this.eventAggregator.publish('update', {name: 'Food', value: this.cost});
    }

    toggleHorizon() {
        this.isMonthly = !this.isMonthly;
        this.calculateAdvancedFoodCost();
    }
}