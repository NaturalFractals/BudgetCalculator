import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';

@inject(MasterBudget)
export class Banner {
    constructor(masterBudget) {
        this.income = null;
        this.displayIncome = "";
        this.masterBudget = masterBudget;
    }

    sanitizeIncome() {
        this.displayIncome = this.displayIncome.replace(/,/g, "");
        this.displayIncome = this.displayIncome.replace(/\$/g, "");

        this.income = parseInt(this.displayIncome);

        this.displayIncome = '$' + this.income.toLocaleString();
    }
}