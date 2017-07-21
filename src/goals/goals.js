import {Goal} from 'goals/goal';

export class Goals {
    constructor() {
        this.goalsList = [];
        this.months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
        
        this.selectedName = null;
        this.selectedMonth = "January"
        this.selectedYear = null;
        this.selectedCost= null;

        this.monthlySavings = 0;
    }

    addGoal() {
        var goal = new Goal(this.selectedName, parseInt(this.selectedCost), this.selectedMonth, parseInt(this.selectedYear));
        this.monthlySavings += goal.monthlyCost;
        this.goalsList.push(goal);

        this.selectedName = null;
        this.selectedMonth = "January"
        this.selectedYear = null;
        this.selectedCost= null;
        console.log(this.goalsList);
    }

    removeGoal(index) {
        this.monthlySavings -= goalsList(index);
        this.goalsList.splice(index, 1)
    }
}