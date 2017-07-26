import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';
import {EventAggregator} from 'aurelia-event-aggregator'
import {ChartFactory} from '../utilities/chartFactory';

@inject(MasterBudget, EventAggregator)
export class DonutDetails {
    constructor(masterBudget, eventAggregator) {
        this.masterBudget = masterBudget;
        this.currentYear = 2017;
        this.currentExpense = this.masterBudget.childCare.cost;
        this.currentExpenseYearCost = 324;
        this.currentCategory = 'Child Care';
        eventAggregator.subscribe("change year", year => {this.currentYear = year;
                                                          this.changeNavigationTab(this.currentCategory)});
    }

    //Changes the information of the currrent details based on navigation click
    changeNavigationTab(category) {

        switch(category) {
            case this.masterBudget.budgetCategories[0]:
                this.currentExpense = this.masterBudget.childCare.cost + (this.currentYear - 2017) * 1.0558;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[1]:
                this.currentExpense = this.masterBudget.food.cost + (this.currentYear - 2017) * 1.0295;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[2]:
                this.currentExpense = this.masterBudget.housing.cost + (this.currentYear - 2017) * 1.0269;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[3]:
                this.currentExpense = this.masterBudget.medical.cost + (this.currentYear - 2017) * 1.0379;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[4]:
                this.currentExpense = this.masterBudget.other.cost + (this.currentYear - 2017) * 1;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[5]:
                this.currentExpense = this.masterBudget.savings.cost + (this.currentYear - 2017) * 1;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[6]:
                this.currentExpense = this.masterBudget.taxes.cost + (this.currentYear - 2017) * 1;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[7]:
                this.currentExpense = this.masterBudget.transportation.cost + (this.currentYear - 2017) * 1.0329;
                this.currentCategory = category;
                break;
            default:
                break;
        }
    }

    changedYear(year) {
        this.currentYear = year;
    }

    calculateInflationData() {
        var date = new Date();
        var year = date.getFullYear();
        var tempMasterBudget = this.masterBudget;
        for(var i = 0; i < currentYear - year; i++) {
            tempMasterBudget.childCare.privateSchoolCost *= this.masterBudget.childCare.privateSchoolInflation;
            tempMasterBudget.childCare.daycareCost *= this.masterBudget.childCare.daycareInflation;
            tempMasterBudget.food.groceriesCost *= this.masterBudget.food.groceriesInflation;
            tempMasterBudget.food.diningOutCost *= this.masterBudget.food.diningOutInflation;
            tempMasterBudget.other.recreationCost  *= this.masterBudget.other.recreationInflation;
            tempMasterBudget.other.gymCost *= this.masterBudget.other.gymInflation;
            tempMasterBudget.other.entertainmentCost *= this.masterBudget.entertainmentInflation;
            tempMasterBudget.other.cellPhoneCost *= this.masterBudget.cellPhoneInflation;
        }
    }  
}