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
        var tuples = ChartFactory.createChartTuple(this.masterBudget);
        this.chart = ChartFactory.createChart('chartContainer', tuples);
    }

    changeChart() {
        var visible = this.chart.series[0].data[0].visible ? false : true;
        this.chart.series[0].data[0].setVisible(visible);
    }
}