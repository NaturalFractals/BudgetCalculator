import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';
import {ChartFactory} from '../utilities/chartFactory';

@inject(MasterBudget)
export class Banner {
    constructor(masterBudget) {
        this.income = null;
        this.displayIncome = "";
        this.masterBudget = masterBudget;
    }

    //Sanitize the income input to U.S. dollar format
    sanitizeIncome() {
        this.displayIncome = this.displayIncome.replace(/,/g, "");
        this.displayIncome = this.displayIncome.replace(/\$/g, "");

        this.income = parseInt(this.displayIncome);

        this.displayIncome = '$' + this.income.toLocaleString();
    }

    //Calculates the monthly income based on entered annual income
    getMonthlyIncome() {
        var income = parseInt(this.displayIncome);
        this.masterBudget.totalMonthlyIncome = income / 12;
    }
}