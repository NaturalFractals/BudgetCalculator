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
                name: 'Brands',
                colorByPoint: true,
                data: tuples
            }]
        });//end Highcharts.chart()
    }

    //Create tuples for the pie chart
    static createChartTuple(masterBudget) {
        console.log(masterBudget);
        var budgetArray = [];
        for(var i = 0; i < masterBudget.budgetCategories.length - 1; i++) {
            var tempObject = {};
            tempObject.name = masterBudget.budgetCategories[i];
            masterBudget.percentageByCategory[i] = masterBudget.categoryVariableArray[i] / masterBudget.totalMonthlyIncome;
            tempObject.y = masterBudget.percentageByCategory[i];
            masterBudget.sumOfAllCost += masterBudget.categoryVariableArray[i];
            budgetArray.push(tempObject);
        }
        masterBudget.savingsCost = (masterBudget.totalMonthlyIncome - masterBudget.sumOfAllCost);
        masterBudget.percentageByCategory[masterBudget.percentageByCategory.length - 1] = (masterBudget.totalMonthlyIncome - masterBudget.sumOfAllCost) / masterBudget.totalMonthlyIncome;
        var savingsObject = {};
        savingsObject.name = masterBudget.budgetCategories[masterBudget.budgetCategories.length - 1];
        savingsObject.y = masterBudget.percentageByCategory[masterBudget.percentageByCategory.length - 1];
        budgetArray.push(savingsObject);
        return budgetArray;
    }
}