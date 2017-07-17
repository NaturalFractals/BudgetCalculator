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
        console.log(tuples);
        this.chart = ChartFactory.createChart('chartContainer', tuples);
        this.masterBudget.chart = this.chart;
    }

    changeChart() {
        var visible = this.chart.series[0].data[0].visible ? false : true;
        this.chart.series[0].data[0].setVisible(visible);
    }
}