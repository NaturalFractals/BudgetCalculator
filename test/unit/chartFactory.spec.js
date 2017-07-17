import {ChartFactory} from '../../src/utilities/chartFactory';
import {MasterBudget} from '../../src/masterBudget';

describe('Testing ChartFactory', () => {

    let masterBudget;

    beforeEach(() => {
        masterBudget = new MasterBudget();
        masterBudget.foodCost = 10000;
        masterBudget.childCareCost = 10000;
        masterBudget.housingCost = 10000;
        masterBudget.medicalCost = 10000;
        masterBudget.otherCost = 10000;
        masterBudget.savingsCost = 10000;
        masterBudget.taxesCost = 10000;
    });

    it("test makeChart", () => {
        console.log(masterBudget);
    });


});