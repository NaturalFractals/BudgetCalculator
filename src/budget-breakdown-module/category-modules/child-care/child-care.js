import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';
import {Constants} from 'constants';

@inject(MasterBudget, Constants)
export class ChildCare {
    constructor(masterBudget, constants) {
        this.includeInBudget = true;

        this.masterBudget = masterBudget;
        this.constants = constants; 
    }
}