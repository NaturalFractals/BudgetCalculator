import { inject } from 'aurelia-framework';
import { ChartFactory } from '../utilities/chartFactory';
import { MasterBudget } from 'masterBudget';

@inject(MasterBudget)
export class GaugeChart {
    constructor(masterBudget) {
        this.masterBudget = masterBudget;
        this.chart = null;
        this.neutralArray = [];
        this.cutArray = [];
        this.reduceArray = [];
    }
}