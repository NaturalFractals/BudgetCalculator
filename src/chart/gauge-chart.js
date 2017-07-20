import { inject } from 'aurelia-framework';
import { ChartFactory } from '../utilities/chartFactory';
import { MasterBudget } from 'masterBudget';

@inject(MasterBudget)
export class GaugeChart {
    constructor(masterBudget) {
        this.masterBudget = masterBudget;
        this.chart = null;
    }

    attached() {
        var tuples = ChartFactory.createChartTuple(this.masterBudget);
        this.chart = ChartFactory.createGaugeChart('gaugeChartContainer', tuples);
        this.masterBudget.chart = this.chart;
    }
}