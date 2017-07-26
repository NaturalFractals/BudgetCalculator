import { inject } from 'aurelia-framework';
import { ChartFactory } from '../utilities/chartFactory';
import { MasterBudget } from 'masterBudget';
import { Constants } from 'constants';

@inject(MasterBudget, Constants)
export class GaugeChart {
    constructor(masterBudget, constants) {
        this.masterBudget = masterBudget;
        this.constants = constants;
        this.chart = null;
        this.chart2 = null;
        this.neutralArray = [];
        this.createNeutralArray();
        this.cutArray = [];
        this.reduceArray = [];
    }

    attached() {
        this.masterBudget.sumAllCost();
        var tuples = this.createChartTuple(this.masterBudget);
        this.chart = ChartFactory.createHalfDonutChart('gaugeChartContainer', tuples);
        this.chart2 = ChartFactory.createHalfDonutChart('gaugeChartContainer2', tuples);
    }

    //Uses constants to create array for responsive drag and drop
    createNeutralArray() {
        for (var i = 0; i < this.constants.autoBudgetFields.length; i++) {
            this.neutralArray.push(this.constants.autoBudgetFields[i].label);
        }
    }

    //Allow drop of element into container
    allowDrop(ev) {
        ev.preventDefault();
    }

    //Handles the drag even from the drag and drop
    drag(ev) {
        ev.dataTransfer.setData("tonberry", ev.target.innerText);
        console.log(ev);
        return true;
    }

    //Handles removing the drag and drop
    removeDrop(ev) {
        ev.dataTransfer.set
    }

    //Handles the drop event into a container
    drop(ev) {
        ev.preventDefault();
        let data = ev.dataTransfer.getData("tonberry");
        if (ev.target.id === 'reduce-container') {
            if (this.reduceArray.indexOf(data) < 0)
                this.reduceArray.push(data);
            let indexToRemove = this.neutralArray.indexOf(data);
            if (indexToRemove > -1)
                this.neutralArray.splice(indexToRemove, 1);
            let indexToRemove2 = this.cutArray.indexOf(data);
            if (indexToRemove2 > -1)
                this.cutArray.splice(indexToRemove, 1);
        } else if (ev.target.id === 'cut-container') {
            if (this.cutArray.indexOf(data) < 0)
                this.cutArray.push(data);
            let indexToRemove = this.neutralArray.indexOf(data);
            if (indexToRemove > -1)
                this.neutralArray.splice(indexToRemove, 1);
            let indexToRemove2 = this.reduceArray.indexOf(data);
            if (indexToRemove2 > -1)
                this.reduceArray.splice(indexToRemove, 1);
        } else {
            if (this.neutralArray.indexOf(data) < 0)
                this.neutralArray.push(data);
            let indexToRemove = this.reduceArray.indexOf(data);
            if (indexToRemove > -1)
                this.reduceArray.splice(indexToRemove, 1);
            let indexToRemove2 = this.cutArray.indexOf(data);
            if (indexToRemove2 > -1)
                this.cutArray.splice(indexToRemove2, 1);
        }
    }

    //Calculates the auto budget once the auto-budget Button is clicked
    autoBudget() {
        if(this.neutralArray.indexOf('Gym Membership') > -1) {
            this.neutralArray.splice(this.neutralArray.indexOf('Gym Membership'), 1);
            this.reduceArray.push('Gym Membership');
        }
        if(this.neutralArray.indexOf('Clothing') > -1) {
            this.neutralArray.splice(this.neutralArray.indexOf('Clothing'), 1);
            this.reduceArray.push('Clothing');
        }
        if(this.neutralArray.indexOf('Eating Out') > -1) {
            this.neutralArray.splice(this.neutralArray.indexOf('Eating Out'), 1);
            this.reduceArray.push('Eating Out');
        }
        if(this.neutralArray.indexOf('Recreation/Travel') > -1) {
            this.neutralArray.splice(this.neutralArray.indexOf('Recreation/Travel'), 1);
            this.reduceArray.push('Recreation/Travel');
        }
        if(this.neutralArray.indexOf('Vacation') > -1) {
            this.neutralArray.splice(this.neutralArray.indexOf('Vacation'), 1);
            this.cutArray.push('Vacation');
        }
        let cost = this.masterBudget.sumOfAllCost;
        let percentReduction = 0.95;
        var tempMasterBudget = this.masterBudget;
        let count = 0;
        while (tempMasterBudget.sumOfAllCost > tempMasterBudget.totalMonthlyIncome) {
            tempMasterBudget.other.recreationCost = parseInt(tempMasterBudget.other.recreationCost) * percentReduction;
            tempMasterBudget.other.gymCost = parseInt(tempMasterBudget.other.gymCost) * percentReduction;
            tempMasterBudget.other.clothingCost = parseInt(tempMasterBudget.other.clothingCost) * percentReduction;
            tempMasterBudget.housing.diningOutCost = parseInt(tempMasterBudget.housing.diningOutCost) * percentReduction;
            tempMasterBudget.other.calculateAdvancedOtherCost();
            tempMasterBudget.sumAllCost();
            console.log("Removed other cost");
            if (count > 10) break;
            count++;
        }
        let tuples = this.createChartTuple(tempMasterBudget);
        console.log(tuples);
        this.chart = ChartFactory.createHalfDonutChart('gaugeChartContainer2', tuples, "After");
    }

    //Adjust the budget based on input from the drag and drop or user
    async userAdjustedBudget() {
        var self = this;
        var cost = this.masterBudget.sumOfAllCost;
        var percentReduction = 0.9;
        var tempMasterBudget = this.masterBudget;
        await this.cutArray.forEach((item) => {
            self.constants.autoBudgetFields.forEach((field) => {
                if (field.label === item) {
                    let c = tempMasterBudget[field.class];
                    c[field.variable] = 0;
                }
            });
        });
        await this.reduceArray.forEach((item) => {
            self.constants.autoBudgetFields.forEach((field) => {
                if (field.lable === item) {
                    let c = tempMasterBudget[field.class];
                    c[field.variable] *= percentReduction;
                }
            })
        });
        tempMasterBudget.sumAllCost();
        let tuples = await this.createChartTuple(tempMasterBudget);
        this.chart2 = await ChartFactory.createHalfDonutChart('gaugeChartContainer2', tuples, 'After');
    }

    //Create tuples for the pie chart
    createChartTuple(masterBudget) {
        var budgetArray = [];
        var totalObject = [];
        totalObject.push('Income');
        totalObject.push(masterBudget.totalMonthlyIncome);
        var remainingObject = [];
        remainingObject.push('Budget');
        remainingObject.push(Math.max(0, (masterBudget.sumOfAllCost - masterBudget.totalMonthlyIncome)));
        budgetArray.push(totalObject);
        budgetArray.push(remainingObject);
        return budgetArray;
    }
}