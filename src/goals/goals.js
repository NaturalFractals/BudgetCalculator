import {Goal} from 'goals/goal';
import {inject} from 'aurelia-framework';
import {MasterBudget} from 'masterBudget';
import {Router} from 'aurelia-router';

@inject(MasterBudget, Router)
export class Goals {
    constructor(masterBudget, router) {
        this.masterBudget = masterBudget;
        this.router = router;

        this.goalsList = [];
        this.months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        
        this.selectedName = null;
        this.selectedMonth = "January"
        this.selectedYear = 2018;
        this.selectedCost= null;

        this.monthlySavings = 0;
    }

    addGoal() {
        var goal = new Goal(this.selectedName, parseInt(this.selectedCost), this.selectedMonth, parseInt(this.selectedYear));
        this.monthlySavings += goal.monthlyCost;
        this.goalsList.push(goal);
        console.log(this.monthlySavings);

        this.selectedName = null;
        this.selectedMonth = "January"
        this.selectedYear = 2018;
        this.selectedCost= null;
        console.log(this.goalsList);
    }

    removeGoal(index) {
        this.monthlySavings -= this.goalsList[index].monthlyCost;
        this.goalsList.splice(index, 1)
    }

    routeResults() {
        this.router.navigate('#/results');
    }
}