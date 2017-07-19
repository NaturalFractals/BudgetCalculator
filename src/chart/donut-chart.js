import {inject} from 'aurelia-framework';
import {ChartFactory} from '../utilities/chartFactory';
import {MasterBudget} from 'masterBudget';
import {EventAggregator} from 'aurelia-event-aggregator'

@inject(MasterBudget, EventAggregator)
export class Chart {

    constructor(masterBudget, eventAggregator) {
        this.chart = null;
        this.masterBudget = masterBudget;
        
        eventAggregator.subscribe('toggle element', moduleName => {this.changeChart(moduleName)} );
        eventAggregator.subscribe('update', update => {this.changedCost(update.name, update.value)} );
    }

    attached() {
        var tuples = ChartFactory.createChartTuple(this.masterBudget);
        this.chart = ChartFactory.createDonutChart('chartContainer', tuples);
        this.masterBudget.chart = this.chart;
    }

    changeChart(moduleName) {
        var dataIndex = this.getDataIndex(moduleName);
        var visible = this.chart.series[0].data[dataIndex].visible ? false : true;
        this.chart.series[0].data[dataIndex].setVisible(visible);
    }

    getDataIndex(moduleName) {
        switch (moduleName) {
            case "Child Care":  return 0;
            case "Food":        return 1;
            case "Housing":     return 2;
            case "Medical":     return 3;
            case "Other":       return 4;
            case "Savings":     return 5;
            case "Taxes":      return 6;
            default:            return 7;
        }
    }

    changedCost(moduleName, value) {
        var newPoint = {name: moduleName, y: value};
        this.chart.series[0].data[this.getDataIndex(moduleName)].update(newPoint, true, true);
    }
}