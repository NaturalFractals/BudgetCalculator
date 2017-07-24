import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';

@inject(MasterBudget)
export class DonutDetails {
    constructor(masterBudget) {
        this.currentYear = 2017;
        this.currentExpense = '$5,463';
        this.currentExpenseYearCost = 324;
        this.currentCategory = 'Child Care';
        this.masterBudget = masterBudget;
    }

    //Changes the information of the currrent details based on navigation click
    changeNavigationTab(category, currentCategory) {
        console.log(currentCategory)
        console.log(category);
        switch(category) {
            case this.masterBudget.budgetCategories[0]:
                this.currentExpense = this.masterBudget.childCare.cost;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[1]:
                this.currentExpense = this.masterBudget.food.cost;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[2]:
                this.currentExpense = this.masterBudget.housing.cost;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[3]:
                this.currentExpense = this.masterBudget.medical.cost;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[4]:
                this.currentExpense = this.masterBudget.other.cost;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[5]:
                this.currentExpense = this.masterBudget.savings.cost;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[6]:
                this.currentExpense = this.masterBudget.taxes.cost;
                this.currentCategory = category;
                break;
            case this.masterBudget.budgetCategories[7]:
                this.currentExpense = this.masterBudget.transportation.cost;
                this.currentCategory = category;
                break;
            default:
                break;
        }
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