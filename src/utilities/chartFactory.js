import * as HighCharts from "highcharts";

export class ChartFactory {

    static createDonutChart(containerID, tuples) {
        return Highcharts.chart(containerID, {
            chart: {
                type: 'pie',
                options3d: {
                    enabled: true,
                    alpha: 45
                }
            },
            title: {
                text: 'Contents of Highsoft\'s weekly fruit delivery'
            },
            subtitle: {
                text: '3D donut in Highcharts'
            },
            plotOptions: {
                pie: {
                    innerSize: 100,
                    depth: 45
                }
            },
            series: [{
                name: 'Delivered amount',
                data: [
                    ['Bananas', 8],
                    ['Kiwi', 3],
                    ['Mixed nuts', 1],
                    ['Oranges', 6],
                    ['Apples', 8],
                    ['Pears', 4],
                    ['Clementines', 4],
                    ['Reddish (bag)', 1],
                    ['Grapes (bunch)', 1]
                ]
            }]
        })
    }
  
    static createPieChart(containerID, tuples) {
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
                console.log(masterBudget);
                budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[0], masterBudget.childCare.cost, masterBudget));
                budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[1], masterBudget.food.cost, masterBudget));
                budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[2], masterBudget.housing.cost, masterBudget));
                budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[3], masterBudget.medical.cost, masterBudget));
                budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[4], masterBudget.other.cost, masterBudget));
                budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[5], masterBudget.savings.cost, masterBudget));
                budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[6], masterBudget.taxes.cost, masterBudget));
                budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[7], masterBudget.transportation.cost, masterBudget));

                return budgetArray;
            }

    static tupleHelper(name, data, masterBudget) {
                var tempObject = {};
                tempObject.name = name;
                tempObject.y = data;
                masterBudget.sumOfAllCost += data;
                return tempObject;
            }
}