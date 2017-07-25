import {inject} from 'aurelia-framework';
import {ChartFactory} from '../utilities/chartFactory';
import {MasterBudget} from 'masterBudget';
import {EventAggregator} from 'aurelia-event-aggregator'

@inject(MasterBudget, EventAggregator)
export class DonutChart {

    constructor(masterBudget, eventAggregator) {
        this.chart = null;
        this.masterBudget = masterBudget;
        this.years = [2017, 2018, 2019, 2020, 2021];
        this.currentYear = 2017;
        this.eventAggregator = eventAggregator;
    }

    attached() {
        var tuples = ChartFactory.createChartTuple(this.masterBudget);
        this.chart = ChartFactory.createDonutChart('goalsChartContainer', tuples);
    }

    drawChartForYear(year) {
        this.currentYear = year.year;

        var newSeries = {
                name: 'Percentage',
                colorByPoint: true,
                data: [{name: "Child Care", y: parseInt(this.masterBudget.childCare.cost + (this.currentYear - 2017) * 1.0558) },
                       {name: "Food", y:  parseInt(this.masterBudget.food.cost + (this.currentYear - 2017) * 1.0295)},
                       {name: "Housing", y:  parseInt(this.masterBudget.housing.cost + (this.currentYear - 2017) * 1.0269)},
                       {name: "Medical", y:  parseInt(this.masterBudget.medical.cost + (this.currentYear - 2017) * 1.0379)},
                       {name: "Other", y:  parseInt(this.masterBudget.other.cost + (this.currentYear - 2017) * 1)},
                       {name: "Savings", y:  parseInt(this.masterBudget.savings.cost + (this.currentYear - 2017) * 1)},
                       {name: "Taxes", y:  parseInt(this.masterBudget.taxes.cost + (this.currentYear - 2017) * 1)},
                       {name: "Transportation", y:  parseInt(this.masterBudget.transportation.cost + (this.currentYear - 2017) * 1.0329)}]
        };

        this.chart.series[0].update(newSeries, true, true);
        this.eventAggregator.publish("change year", this.currentYear);
    }

    donutTupleHelper(oldYear, newYear, moduleName) {
        var tempObject = {};
        tempObject.name = name;
        tempObject.y = data;
        masterBudget.sumOfAllCost += parseInt(data);
        return tempObject;
    }



    getDataIndex(moduleName) {
        switch (moduleName) {
            case "Child Care":  return 0;
            case "Food":        return 1;
            case "Housing":     return 2;
            case "Medical":     return 3;
            case "Other":       return 4;
            case "Savings":     return 5;
            case "Taxes":       return 6;
            default:            return 7;
        }
    }

    changedCost(moduleName, value) {
        var newPoint = {name: moduleName, y: value};
        this.chart.series[0].data[this.getDataIndex(moduleName)].update(newPoint, true, true);
    }
}