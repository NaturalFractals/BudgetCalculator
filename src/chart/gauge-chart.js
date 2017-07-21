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
        this.neutralArray = [];
        this.cutArray = [];
        this.reduceArray = [];
    }

        //DRAG AND DROP
    allowDrop(ev) {
        ev.preventDefault();
    }

    drag(ev) {
        ev.dataTransfer.setData("tonberry", ev.target.innerText);
        return true;
    }

    removeDrop(ev) {
        ev.dataTransfer.set
    }

    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("tonberry");
        console.log(data);
        if(ev.target.id === 'reduce-container'){
            this.reduceArray.push(data);
        } else if (ev.target.id === 'cut-container') {
            this.cutArray.push(data);
        } else {

        }
    }
}