import {inject, singleton} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
@singleton()
export class ChildCare {
    constructor(constants) {
        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.privateSchoolCost = 0;
        this.daycareCost = 0;
    }

    //Calculates the cost of the advanced child care cost
    calculateAdvancedChildCareCost() {
        this.cost = this.privateSchoolCost + this.daycareCost;
    }
}