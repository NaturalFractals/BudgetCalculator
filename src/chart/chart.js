import {inject} from 'aurelia-framework';
import {ChartFactory} from '../utilities/chartFactory';
import {MasterBudget} from 'masterBudget';

@inject(MasterBudget)
export class Chart {

    constructor(masterBudget) {
        this.chart = null;
        this.masterBudget = masterBudget;
    }

    attached() {
        console.log(this.masterBudget);
        var tuples = ChartFactory.createChartTuple(this.masterBudget);
        this.chart = ChartFactory.createChart('chartContainer', tuples);
        this.masterBudget.chart = this.chart;
    }

    changeChart(moduleName) {
        var dataIndex;

        switch (moduleName) {
            case "Child Care":  dataIndex = 0; break;
            case "Food":  dataIndex = 1; break;
            case "Housing":        dataIndex = 2; break;
            case "Medical":     dataIndex = 3; break;
            case "Other":     dataIndex = 4; break;
            case "Savings":       dataIndex = 5; break;
            case "Taxes":       dataIndex = 6;
        }

        var visible = this.chart.series[0].data[dataIndex].visible ? false : true;
        this.chart.series[0].data[dataIndex].setVisible(visible);
    }
}