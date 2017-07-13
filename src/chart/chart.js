import {ChartFactory} from '../utilities/chartFactory';

export class Chart {
    constructor() {
        ChartFactory.createChart('container');
        this.chart = null;
    }

    attached() {
        this.chart = ChartFactory.createChart('chartContainer');
    }

    changeChart() {
        var visible = this.chart.series[0].data[0].visible ? false : true;
        this.chart.series[0].data[0].setVisible(visible);
    }
}