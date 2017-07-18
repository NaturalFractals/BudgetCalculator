import {inject} from 'aurelia-framework';
import {Constants} from 'constants';

@inject(Constants)
export class ChildCare {
    constructor(constants) {
        this.constants = constants;
        this.cost = 0;
        this.privateSchoolCost = 0;
        this.daycareCost = 0;
    }

    //Calculates the cost of the advanced child care cost
    calculateAdvancedChildCareCost(privateSchoolCost) {
        return this.privateSchoolCost + this.daycareCost;
    }
}