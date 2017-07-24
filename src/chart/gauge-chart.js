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
        var tuples = this.createChartTuple(this.masterBudget);
        this.autoBudget();
        this.chart = ChartFactory.createHalfDonutChart('gaugeChartContainer', tuples);
        this.chart2 = ChartFactory.createHalfDonutChart('gaugeChartContainer2', tuples);
    }

    //Uses constants to create array for responsive drag and drop
    createNeutralArray() {
        for(var i = 0; i < this.constants.autoBudgetFields.length; i++) {
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
        console.log(data);
        if(ev.target.id === 'reduce-container'){
            if(this.reduceArray.indexOf(data) < 0)
                this.reduceArray.push(data);
            let indexToRemove = this.neutralArray.indexOf(data);
            if(indexToRemove > -1)
                this.neutralArray.splice(indexToRemove, 1);
            let indexToRemove2 = this.cutArray.indexOf(data);
            if(indexToRemove2 > -1)
                this.cutArray.splice(indexToRemove, 1);
        } else if (ev.target.id === 'cut-container') {
            if(this.cutArray.indexOf(data) < 0)
                this.cutArray.push(data);
            let indexToRemove = this.neutralArray.indexOf(data);
            if(indexToRemove > -1)
                this.neutralArray.splice(indexToRemove, 1);
            let indexToRemove2 = this.reduceArray.indexOf(data);
            if(indexToRemove2 > -1)
                this.reduceArray.splice(indexToRemove, 1);
        } else {
            if(this.neutralArray.indexOf(data) < 0)
                this.neutralArray.push(data);
            let indexToRemove = this.reduceArray.indexOf(data);
            if(indexToRemove > -1)
                this.reduceArray.splice(indexToRemove, 1);
            let indexToRemove2 = this.cutArray.indexOf(data);
            if(indexToRemove2 > -1)
                this.cutArray.splice(indexToRemove2, 1);
        }
    }

    //Calculates the auto budget once the auto-budget Button is clicked
    autoBudget() {
        let cost = this.masterBudget.sumOfAllCost;
        let autoBudgetCost = cost - this.masterBudget.recreationCost;
        let percentReduction = 0.9;
        let tempMasterBudget = this.masterBudget;
        console.log(this.masterBudget);
        console.log(tempMasterBudget.sumOfAllCost);
        console.log(tempMasterBudget.totalMonthlyIncome);
        let count = 0;
        while(tempMasterBudget.sumOfAllCost < tempMasterBudget.totalMonthlyIncome) {
            tempMasterBudget.other.recreationCost = parseInt(tempMasterBudget.other.recreationCost) * parseInt(percentReduction);
            tempMasterBudget.other.gymCost = parseInt(tempMasterBudget.other.gymCost) * parseInt(percentReduction);
            tempMasterBudget.other.clothingCost = parseInt(tempMasterBudget.other.clothingCost) * parseInt(percentReduction);
            tempMasterBudget.housing.diningOutCost = parseInt(tempMasterBudget.housing.diningOutCost) * parseInt(percentReduction);
            tempMasterBudget.other.calculateAdvancedOtherCost();
            if(count > 3) break;
            console.log(tempMasterBudget.sumOfAllCost);
            count++;
        }
        let tuples = this.createChartTuple(tempMasterBudget);
        console.log(tuples);
        this.chart = ChartFactory.createHalfDonutChart('gaugeChartContainer', tuples);
        this.chart2 = ChartFactory.createHalfDonutChart('gaugeChartContainer2', tuples);
    }

    userAdjustedBudget() {
        var cost = this.masterBudget.sumOfAllCost;
        var percentReduction = 0.9;
        var tempMasterBudget = this.masterBudget;
    }

        //Create tuples for the pie chart
    createChartTuple(masterBudget) {
        var budgetArray = [];
        masterBudget.sumOfAllCost = 0;
        masterBudget.sumOfAllCost += parseInt(masterBudget.food.cost) + parseInt(masterBudget.childCare.cost) + parseInt(masterBudget.housing.cost) + parseInt(masterBudget.medical.cost) + parseInt(masterBudget.savings.cost) + parseInt(masterBudget.taxes.cost) + parseInt(masterBudget.transportation.cost);
        var totalObject = {};
        totalObject.name = 'Total Expenses';
        totalObject.y = masterBudget.sumOfAllCost;
        var remainingObject = [];
        remainingObject.name = 'Savings';
        remainingObject.y = masterBudget.totalMonthlyIncome - masterBudget.sumOfAllCost;
        budgetArray.push(totalObject);
        budgetArray.push(remainingObject);
        console.log(budgetArray);
        return budgetArray;
    }
}