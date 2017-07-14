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
    static createChartTuple(budgetCategories, percentage) {
        var budgetArray = [];
        for(var i = 0; i < budgetCategories.length; i++) {
            var tempObject = {};
            tempObject.name = budgetCategories[i];
            tempObject.y = percentage[i];
            budgetArray.push(tempObject);
        }
        return budgetArray;
    }
}