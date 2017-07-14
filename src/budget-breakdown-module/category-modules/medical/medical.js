import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';
import {Constants} from 'constants';

@inject(MasterBudget, Constants)
export class Medical {
    constructor(masterBudget, constants) {
        this.masterBudget = masterBudget;
        this.constants = constants;
    }
}