import {inject} from 'aurelia-framework';
import {User} from 'user';

@inject(User)
export class Food {
    constructor(user) {
        this.user = user;
    }

    //Calculate the basic food cost for the household
    calculateFoodCost() {
        this.user.foodCost = this.user.numberChildren * 155.70 + this.user.numberAdults * 158.70;
    }

    //Calculate detailed food cost
    calculateAdvancedFoodCost() {

    }
}