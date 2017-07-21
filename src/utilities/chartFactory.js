import * as HighCharts from "highcharts";

export class ChartFactory {
    //Create half donut chart
    static createHalfDonutChart(containerID, tuples) {
        return Highcharts.chart(containerID, {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: 0,
                plotShadow: false
            },
            title: {
                text: 'Browser<br>shares<br>2015',
                align: 'center',
                verticalAlign: 'middle',
                y: 40
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        style: {
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    },
                    startAngle: -90,
                    endAngle: 90,
                    center: ['50%', '75%']
                }
            },
            series: [{
                type: 'pie',
                name: 'Budget',
                innerSize: '50%',
                data: tuples
            }]
        });
    }
    
    //Creates a donut chart 
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
                text: 'Yearly Budget'
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
                data: tuples
            }]
        })
    }

    //Creates a pie chart
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
        masterBudget.transportation.calculateAverageTransportationCost();
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[6], masterBudget.taxes.cost, masterBudget));
        budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[7], masterBudget.transportation.cost, masterBudget));

        return budgetArray;
    }

    //Helper method for creating tuples to be used in the charts
    static tupleHelper(name, data, masterBudget) {
        var tempObject = {};
        tempObject.name = name;
        tempObject.y = data;
        masterBudget.sumOfAllCost += parseInt(data);
        return tempObject;
    }
}