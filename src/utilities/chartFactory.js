import * as HighCharts from "highcharts";

export class ChartFactory {
  
    static createChart(containerID, tuples) {
        return Highcharts.chart(containerID, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Budget Calculator'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false
                    },
                    showInLegend: true
                }
            },
            series: [{
                name: 'Percentage',
                colorByPoint: true,
                data: tuples
            }]
        });//end Highcharts.chart()
    }

    //Create tuples for the pie chart
    static createChartTuple(masterBudget) {
        var budgetArray = [];
        masterBudget.sumOfAllCost = 0;
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[0], masterBudget.childCareCost, masterBudget));
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[1], masterBudget.food.cost, masterBudget));
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[2], masterBudget.housing.cost, masterBudget));
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[3], masterBudget.medical.cost, masterBudget));
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[4], masterBudget.other.cost, masterBudget));
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[5], masterBudget.taxesCost, masterBudget));
        var cost = masterBudget.totalMonthlyIncome - masterBudget.sumOfAllCost;
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[6], cost, masterBudget));
        return budgetArray;
    }

    static tupleHelper(name, data, masterBudget) {
        var tempObject = {};
        tempObject.name = name;
        tempObject.y = data;
        console.log(data);
        masterBudget.sumOfAllCost += data;
        console.log(masterBudget.sumOfAllCost);
        return tempObject;
    }
}