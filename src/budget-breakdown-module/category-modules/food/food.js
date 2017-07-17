export class Food {
    constructor(numberChildren, numberAdults, constants) {
        this.numberChildren = numberChildren;
        this.numberAdults = numberAdults;
        this.constants = constants;
        this.cost = 0;
    }

    //Calculate the basic food cost for the household
    calculateFoodCost() {
        console.log(this.constants);
        return this.numberChildren * this.constants.foodCostPerChild + this.numberAdults * this.constants.foodCostPerAdult;
    
    }

    //Calculate detailed food cost
    calculateAdvancedFoodCost() {

    }
}