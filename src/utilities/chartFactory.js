import * as HighCharts from "highcharts";

export class ChartFactory {
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

    static createGaugeChart(chartContainer, tuples) {

        var gaugeOptions = {

        chart: {
            type: 'solidgauge'
        },

        title: null,

        pane: {
            center: ['50%', '85%'],
            size: '140%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },

        tooltip: {
            enabled: false
        },

        // the value axis
        yAxis: {
            stops: [
                [0.1, '#55BF3B'], // green
                [0.5, '#DDDF0D'], // yellow
                [0.9, '#DF5353'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickAmount: 2,
            title: {
                y: -70
            },
            labels: {
                y: 16
            }
        },

        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    };

        // The speed gauge
        return Highcharts.chart(chartContainer, Highcharts.merge(gaugeOptions, {
            yAxis: {
                min: 0,
                max: 200,
                title: {
                    text: 'Speed'
                }
            },

            credits: {
                enabled: false
            },

            series: [{
                name: 'Speed',
                data: [80],
                dataLabels: {
                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                    '<span style="font-size:12px;color:silver">km/h</span></div>'
                },
                tooltip: {
                    valueSuffix: ' km/h'
                }
            }]

        }));
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
        masterBudget.sumOfAllCost += data;
        return tempObject;
    }
}