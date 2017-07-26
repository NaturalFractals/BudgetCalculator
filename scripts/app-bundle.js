define('app',['exports', 'aurelia-framework', 'jquery', 'bootstrap', 'bootstrap-material-design', 'jquery-ui-dist'], function (exports, _aureliaFramework, _jquery) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  var _jquery2 = _interopRequireDefault(_jquery);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = "Budget Expectancy Calculator";
      config.map([{
        route: ['', 'intro'], moduleId: 'intro/intro',
        name: 'intro', title: 'Introduction', nav: true
      }, {
        route: 'results', moduleId: 'results/results',
        name: 'results', title: 'Personal Budget', nav: true
      }, {
        route: 'goals', moduleId: 'goals/goals',
        name: 'goals', title: 'Goals', nav: true
      }, {
        route: 'five-year', moduleId: 'five-year/five-year',
        name: 'five-year', title: 'Five Year Plan', nav: true
      }, {
        route: 'auto-budget', moduleId: 'auto-budget/auto-budget',
        name: 'auto-budget', title: 'Auto Budget', nav: true
      }]);
    };

    return App;
  }();
});
define('constants',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Constants = exports.Constants = function Constants() {
        _classCallCheck(this, Constants);

        this.foodCostPerChild = 155.7;

        this.foodCostPerAdult = 158.7;

        this.miscellaneousCost = 0.05;

        this.autoBudgetFields = [{
            'label': 'Tuition',
            'class': 'savings',
            'variable': 'collegeSavingsCost'
        }, {
            'label': 'Cable',
            'class': 'housing',
            'variable': 'monthlyCableCost'
        }, {
            'label': 'Telephone',
            'class': 'housing',
            'variable': 'homeTelephoneCost'
        }, {
            'label': 'Eating Out',
            'class': 'food',
            'variable': 'diningOutCost'
        }, {
            'label': 'Workday Coffee/Lunch',
            'class': 'food',
            'variable': 'workdayCost'
        }, {
            'label': 'Recreation/Travel',
            'class': 'other',
            'variable': 'recreationCost'
        }, {
            'label': 'Vacation',
            'class': 'other',
            'variable': 'recreationCost'
        }, {
            'label': 'Cell Phone Cost',
            'class': 'other',
            'variable': 'cellPhoneCost'
        }, {
            'label': 'Clothing',
            'class': 'other',
            'variable': 'clothingCost'
        }, {
            'label': 'Savings',
            'class': 'savings',
            'variable': 'emergencyFundCost'
        }, {
            'label': 'Gym Membership',
            'class': 'other',
            'variable': 'gymCost'
        }];

        this.childCare = [{
            'label': 'School Tuiton',
            'variable': 'privateSchoolCost'
        }, {
            'label': 'Daycare',
            'variable': 'daycareCost'
        }, {
            'label': 'School Expenses',
            'variable': 'schoolExpenseCost'
        }, {
            'label': 'Child Support',
            'variable': 'childSupportCost'
        }];

        this.food = [{
            'label': 'Groceries',
            'variable': 'groceriesCost'
        }, {
            'label': 'Dining Out',
            'variable': 'diningOutCost'
        }, {
            'label': 'Workday Coffee/Lunch',
            'variable': 'workdayCost'
        }];

        this.housing = [{
            'label': 'Cable',
            'variable': 'monthlyCableCost'
        }, {
            'label': 'Utilities',
            'variable': 'homeInsuranceCost'
        }, {
            'label': 'Telephone',
            'variable': 'homeTelephoneCost'
        }, {
            'label': 'Home Maintenance',
            'variable': 'homeMaintenanceCost'
        }];

        this.housingUtilities = [{
            'label': 'Gas',
            'variable': 'utilityGasCost'
        }, {
            'label': 'Water',
            'variable': 'utilityWaterCost'
        }, {
            'label': 'Electricity',
            'variable': 'utilityElectricCost'
        }];

        this.housingRent = [{
            'label': 'Mortgage Payment',
            'variable': 'mortgageCost'
        }, {
            'label': 'Home Insurance',
            'variable': 'homeInsuranceCost'
        }, {
            'label': 'Home Improvements',
            'variable': 'homeImprovementCost'
        }];

        this.housingLease = [{
            'label': 'Rent',
            'variable': 'rentCost'
        }, {
            'label': 'Renters Insurance',
            'variable': 'rentInsuranceCost'
        }];

        this.medical = [{
            'label': 'Health Insurance',
            'variable': 'healthInsuranceCost'
        }, {
            'label': 'Medication Cost',
            'variable': 'medicationCost'
        }, {
            'label': 'Dental Work',
            'variable': 'dentalCost'
        }, {
            'label': 'Other Medical Cost',
            'variable': 'otherMedicalCost'
        }];

        this.transportation = [{
            'label': 'Public Transportation Cost',
            'variable': 'publicTransportationCost'
        }, {
            'label': 'Other',
            'variable': 'otherCost'
        }];

        this.transportationCar = [{
            'label': 'How Many Cars',
            'variable': 'numberOfCars'
        }, {
            'label': 'Payment',
            'variable': 'carPaymentCost'
        }, {
            'label': 'Repairs',
            'variable': 'carRepairCost'
        }, {
            'label': 'Insurance',
            'variable': 'insuranceCost'
        }, {
            'label': 'Gasoline',
            'variable': 'gasolineCost'
        }];

        this.other = [{
            'label': 'Cellphone',
            'variable': 'cellPhoneCost'
        }, {
            'label': 'Recreation/Travel',
            'variable': 'recreationCost'
        }, {
            'label': 'Gym Membership',
            'variable': 'gymCost'
        }, {
            'label': 'Entertainment',
            'variable': 'entertainmentCost'
        }, {
            'label': 'Clothing',
            'variable': 'clothingCost'
        }, {
            'label': 'Student Loan Payments',
            'variable': 'studentLoanCost'
        }];

        this.savings = [{
            'label': 'Emergency Fund',
            'variable': 'emergencyFundCost'
        }, {
            'label': 'Retirement',
            'variable': 'retirementCost'
        }, {
            'label': 'Investments',
            'variable': 'investmentsCost'
        }, {
            'label': 'College Savings',
            'variable': 'collegeSavingsCost'
        }];

        this.taxes = [{
            'label': 'State Taxes',
            'variable': 'stateTaxCost'
        }, {
            'label': 'Other Taxes',
            'variable': 'otherTaxCost'
        }];

        this.taxesFiling = [{
            'label': 'Property Tax',
            'variable': 'propertyTaxCost'
        }, {
            'label': 'Vehicle Tax',
            'variable': 'vehicleTaxCost'
        }, {
            'label': 'Income Tax',
            'variable': 'incomeTaxCost'
        }];
    };
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('masterBudget',['exports', 'budget-breakdown-module/category-modules/food/food', 'budget-breakdown-module/category-modules/other/other', 'budget-breakdown-module/category-modules/housing/housing', 'budget-breakdown-module/category-modules/medical/medical', 'budget-breakdown-module/category-modules/taxes/taxes', 'budget-breakdown-module/category-modules/savings/savings', 'budget-breakdown-module/category-modules/child-care/child-care', 'budget-breakdown-module/category-modules/transportation/transportation', 'aurelia-framework', 'constants'], function (exports, _food, _other, _housing, _medical, _taxes, _savings, _childCare, _transportation, _aureliaFramework, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.MasterBudget = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var MasterBudget = exports.MasterBudget = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _food.Food, _other.Other, _housing.Housing, _medical.Medical, _taxes.Taxes, _savings.Savings, _childCare.ChildCare, _transportation.Transportation), _dec(_class = function () {
        function MasterBudget(constants, food, other, housing, medical, taxes, savings, childCare, transportation) {
            _classCallCheck(this, MasterBudget);

            this.constants = constants;
            this.location = "";
            this.annualIncome;
            this.totalMonthlyIncome = 2000;
            this.numberChildren = 2;
            this.numberAdults = 1;
            this.stateLocation = 'Alabama';

            this.food = food;
            this.food.calculateFoodCost(this.numberChildren, this.numberAdults);
            this.other = other;
            this.housing = housing;
            this.medical = medical;
            this.taxes = taxes;
            this.savings = savings;
            this.childCare = childCare;
            this.transportation = transportation;

            this.sumOfAllCost = 0;
            this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes', 'Transportation'];
            this.percentageByCategory = [];

            this.chart = null;
        }

        MasterBudget.prototype.sumAllCost = function sumAllCost() {
            this.sumOfAllCost = parseInt(this.food.cost) + parseInt(this.savings.cost) + parseInt(this.other.cost) + parseInt(this.housing.cost) + parseInt(this.medical.cost) + parseInt(this.taxes.cost) + parseInt(this.childCare.cost) + parseInt(this.transportation.cost);
        };

        return MasterBudget;
    }()) || _class);
});
define('auto-budget/auto-budget',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var AutoBudget = exports.AutoBudget = function AutoBudget() {
        _classCallCheck(this, AutoBudget);
    };
});
define('budget-breakdown-module/breakdown',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Breakdown = exports.Breakdown = function Breakdown() {
        _classCallCheck(this, Breakdown);
    };
});
define('chart/chart',['exports', 'aurelia-framework', '../utilities/chartFactory', 'masterBudget', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _chartFactory, _masterBudget, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Chart = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Chart = exports.Chart = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function Chart(masterBudget, eventAggregator) {
            var _this = this;

            _classCallCheck(this, Chart);

            this.chart = null;
            this.masterBudget = masterBudget;

            eventAggregator.subscribe('toggle element', function (moduleName) {
                _this.changeChart(moduleName);
            });
            eventAggregator.subscribe('update', function (update) {
                _this.changedCost(update.name, update.value);
            });
        }

        Chart.prototype.attached = function attached() {
            var tuples = _chartFactory.ChartFactory.createChartTuple(this.masterBudget);
            this.chart = _chartFactory.ChartFactory.createPieChart('chartContainer', tuples);
            this.masterBudget.chart = this.chart;
        };

        Chart.prototype.changeChart = function changeChart(moduleName) {
            var dataIndex = this.getDataIndex(moduleName);
            var visible = this.chart.series[0].data[dataIndex].visible ? false : true;
            this.chart.series[0].data[dataIndex].setVisible(visible);
        };

        Chart.prototype.getDataIndex = function getDataIndex(moduleName) {
            switch (moduleName) {
                case "Child Care":
                    return 0;
                case "Food":
                    return 1;
                case "Housing":
                    return 2;
                case "Medical":
                    return 3;
                case "Other":
                    return 4;
                case "Savings":
                    return 5;
                case "Taxes":
                    return 6;
                default:
                    return 7;
            }
        };

        Chart.prototype.changedCost = function changedCost(moduleName, value) {
            var newPoint = { name: moduleName, y: value };
            this.chart.series[0].data[this.getDataIndex(moduleName)].update(newPoint, true, true);
        };

        return Chart;
    }()) || _class);
});
define('chart/donut-chart',['exports', 'aurelia-framework', '../utilities/chartFactory', 'masterBudget', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _chartFactory, _masterBudget, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DonutChart = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var DonutChart = exports.DonutChart = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function DonutChart(masterBudget, eventAggregator) {
            _classCallCheck(this, DonutChart);

            this.chart = null;
            this.masterBudget = masterBudget;
            this.years = [2017, 2018, 2019, 2020, 2021];
            this.currentYear = 2017;
            this.eventAggregator = eventAggregator;
        }

        DonutChart.prototype.attached = function attached() {
            var tuples = _chartFactory.ChartFactory.createChartTuple(this.masterBudget);
            this.chart = _chartFactory.ChartFactory.createDonutChart('goalsChartContainer', tuples);
        };

        DonutChart.prototype.drawChartForYear = function drawChartForYear(year) {
            this.currentYear = year.year;

            var newSeries = {
                name: 'Percentage',
                colorByPoint: true,
                data: [{ name: "Child Care", y: parseInt(this.masterBudget.childCare.cost + (this.currentYear - 2017) * 1.0558) }, { name: "Food", y: parseInt(this.masterBudget.food.cost + (this.currentYear - 2017) * 1.0295) }, { name: "Housing", y: parseInt(this.masterBudget.housing.cost + (this.currentYear - 2017) * 1.0269) }, { name: "Medical", y: parseInt(this.masterBudget.medical.cost + (this.currentYear - 2017) * 1.0379) }, { name: "Other", y: parseInt(this.masterBudget.other.cost + (this.currentYear - 2017) * 1) }, { name: "Savings", y: parseInt(this.masterBudget.savings.cost + (this.currentYear - 2017) * 1) }, { name: "Taxes", y: parseInt(this.masterBudget.taxes.cost + (this.currentYear - 2017) * 1) }, { name: "Transportation", y: parseInt(this.masterBudget.transportation.cost + (this.currentYear - 2017) * 1.0329) }]
            };

            this.chart.series[0].update(newSeries, true, true);
            this.eventAggregator.publish("change year", this.currentYear);
        };

        DonutChart.prototype.donutTupleHelper = function donutTupleHelper(oldYear, newYear, moduleName) {
            var tempObject = {};
            tempObject.name = name;
            tempObject.y = data;
            masterBudget.sumOfAllCost += parseInt(data);
            return tempObject;
        };

        DonutChart.prototype.getDataIndex = function getDataIndex(moduleName) {
            switch (moduleName) {
                case "Child Care":
                    return 0;
                case "Food":
                    return 1;
                case "Housing":
                    return 2;
                case "Medical":
                    return 3;
                case "Other":
                    return 4;
                case "Savings":
                    return 5;
                case "Taxes":
                    return 6;
                default:
                    return 7;
            }
        };

        DonutChart.prototype.changedCost = function changedCost(moduleName, value) {
            var newPoint = { name: moduleName, y: value };
            this.chart.series[0].data[this.getDataIndex(moduleName)].update(newPoint, true, true);
        };

        return DonutChart;
    }()) || _class);
});
define('chart/gauge-chart',['exports', 'aurelia-framework', '../utilities/chartFactory', 'masterBudget', 'constants'], function (exports, _aureliaFramework, _chartFactory, _masterBudget, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.GaugeChart = undefined;

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var GaugeChart = exports.GaugeChart = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _constants.Constants), _dec(_class = function () {
        function GaugeChart(masterBudget, constants) {
            _classCallCheck(this, GaugeChart);

            this.masterBudget = masterBudget;
            this.constants = constants;
            this.neutralArray = [];
            this.createNeutralArray();
            this.cutArray = [];
            this.reduceArray = [];
        }

        GaugeChart.prototype.attached = function attached() {
            this.masterBudget.sumAllCost();
            var tuples = this.createChartTuple(this.masterBudget);
            _chartFactory.ChartFactory.createHalfDonutChart('gaugeChartContainer', tuples, "Before");
            _chartFactory.ChartFactory.createHalfDonutChart('gaugeChartContainer2', tuples, "After");
        };

        GaugeChart.prototype.createNeutralArray = function createNeutralArray() {
            for (var i = 0; i < this.constants.autoBudgetFields.length; i++) {
                this.neutralArray.push(this.constants.autoBudgetFields[i].label);
            }
        };

        GaugeChart.prototype.allowDrop = function allowDrop(ev) {
            ev.preventDefault();
        };

        GaugeChart.prototype.drag = function drag(ev) {
            ev.dataTransfer.setData("tonberry", ev.target.innerText);
            console.log(ev);
            return true;
        };

        GaugeChart.prototype.removeDrop = function removeDrop(ev) {
            ev.dataTransfer.set;
        };

        GaugeChart.prototype.drop = function drop(ev) {
            ev.preventDefault();
            var data = ev.dataTransfer.getData("tonberry");
            if (ev.target.id === 'reduce-container') {
                if (this.reduceArray.indexOf(data) < 0) this.reduceArray.push(data);
                var indexToRemove = this.neutralArray.indexOf(data);
                if (indexToRemove > -1) this.neutralArray.splice(indexToRemove, 1);
                var indexToRemove2 = this.cutArray.indexOf(data);
                if (indexToRemove2 > -1) this.cutArray.splice(indexToRemove, 1);
            } else if (ev.target.id === 'cut-container') {
                if (this.cutArray.indexOf(data) < 0) this.cutArray.push(data);
                var _indexToRemove = this.neutralArray.indexOf(data);
                if (_indexToRemove > -1) this.neutralArray.splice(_indexToRemove, 1);
                var _indexToRemove2 = this.reduceArray.indexOf(data);
                if (_indexToRemove2 > -1) this.reduceArray.splice(_indexToRemove, 1);
            } else {
                if (this.neutralArray.indexOf(data) < 0) this.neutralArray.push(data);
                var _indexToRemove3 = this.reduceArray.indexOf(data);
                if (_indexToRemove3 > -1) this.reduceArray.splice(_indexToRemove3, 1);
                var _indexToRemove4 = this.cutArray.indexOf(data);
                if (_indexToRemove4 > -1) this.cutArray.splice(_indexToRemove4, 1);
            }
        };

        GaugeChart.prototype.autoBudget = function autoBudget() {
            if (this.neutralArray.indexOf('Gym Membership') > -1) {
                this.neutralArray.splice(this.neutralArray.indexOf('Gym Membership'), 1);
                this.reduceArray.push('Gym Membership');
            }
            if (this.neutralArray.indexOf('Clothing') > -1) {
                this.neutralArray.splice(this.neutralArray.indexOf('Clothing'), 1);
                this.reduceArray.push('Clothing');
            }
            if (this.neutralArray.indexOf('Eating Out') > -1) {
                this.neutralArray.splice(this.neutralArray.indexOf('Eating Out'), 1);
                this.reduceArray.push('Eating Out');
            }
            if (this.neutralArray.indexOf('Recreation/Travel') > -1) {
                this.neutralArray.splice(this.neutralArray.indexOf('Recreation/Travel'), 1);
                this.reduceArray.push('Recreation/Travel');
            }
            if (this.neutralArray.indexOf('Vacation') > -1) {
                this.neutralArray.splice(this.neutralArray.indexOf('Vacation'), 1);
                this.cutArray.push('Vacation');
            }
            var cost = this.masterBudget.sumOfAllCost;
            var percentReduction = 0.95;
            var tempMasterBudget = this.masterBudget;
            var count = 0;
            while (tempMasterBudget.sumOfAllCost > tempMasterBudget.totalMonthlyIncome) {
                tempMasterBudget.other.recreationCost = parseInt(tempMasterBudget.other.recreationCost) * percentReduction;
                tempMasterBudget.other.gymCost = parseInt(tempMasterBudget.other.gymCost) * percentReduction;
                tempMasterBudget.other.clothingCost = parseInt(tempMasterBudget.other.clothingCost) * percentReduction;
                tempMasterBudget.housing.diningOutCost = parseInt(tempMasterBudget.housing.diningOutCost) * percentReduction;
                tempMasterBudget.other.calculateAdvancedOtherCost();
                tempMasterBudget.sumAllCost();
                console.log("Removed other cost");
                if (count > 20) break;
                count++;
            }
            var tuples = this.createChartTuple(tempMasterBudget);
            console.log(tuples);
            _chartFactory.ChartFactory.createHalfDonutChart('gaugeChartContainer2', tuples, "After");
        };

        GaugeChart.prototype.userAdjustedBudget = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var self, cost, percentReduction, tempMasterBudget, tuples;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                self = this;
                                cost = this.masterBudget.sumOfAllCost;
                                percentReduction = 0.9;
                                tempMasterBudget = this.masterBudget;
                                _context.next = 6;
                                return this.cutArray.forEach(function (item) {
                                    self.constants.autoBudgetFields.forEach(function (field) {
                                        if (field.label === item) {
                                            var c = tempMasterBudget[field.class];
                                            c[field.variable] = 0;
                                        }
                                    });
                                });

                            case 6:
                                _context.next = 8;
                                return this.reduceArray.forEach(function (item) {
                                    self.constants.autoBudgetFields.forEach(function (field) {
                                        if (field.lable === item) {
                                            var c = tempMasterBudget[field.class];
                                            c[field.variable] *= percentReduction;
                                        }
                                    });
                                });

                            case 8:
                                tempMasterBudget.sumAllCost();
                                _context.next = 11;
                                return this.createChartTuple(tempMasterBudget);

                            case 11:
                                tuples = _context.sent;
                                _context.next = 14;
                                return _chartFactory.ChartFactory.createHalfDonutChart('gaugeChartContainer2', tuples, 'After');

                            case 14:
                                this.chart2 = _context.sent;

                            case 15:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function userAdjustedBudget() {
                return _ref.apply(this, arguments);
            }

            return userAdjustedBudget;
        }();

        GaugeChart.prototype.createChartTuple = function createChartTuple(masterBudget) {
            var budgetArray = [];
            var totalObject = [];
            totalObject.push('Income');
            totalObject.push(masterBudget.totalMonthlyIncome);
            var remainingObject = [];
            remainingObject.push('Budget');
            remainingObject.push(Math.max(0, masterBudget.sumOfAllCost - masterBudget.totalMonthlyIncome));
            budgetArray.push(totalObject);
            budgetArray.push(remainingObject);
            return budgetArray;
        };

        return GaugeChart;
    }()) || _class);
});
define('five-year/card-info-one',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CardInfoOne = exports.CardInfoOne = function CardInfoOne() {
        _classCallCheck(this, CardInfoOne);
    };
});
define('five-year/card-info-three',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CardInfoThree = exports.CardInfoThree = function CardInfoThree() {
        _classCallCheck(this, CardInfoThree);
    };
});
define('five-year/card-info-two',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CardInfoTwo = exports.CardInfoTwo = function CardInfoTwo() {
        _classCallCheck(this, CardInfoTwo);
    };
});
define('five-year/donut-details',['exports', 'aurelia-framework', 'masterBudget', 'aurelia-event-aggregator', '../utilities/chartFactory'], function (exports, _aureliaFramework, _masterBudget, _aureliaEventAggregator, _chartFactory) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.DonutDetails = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var DonutDetails = exports.DonutDetails = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _aureliaEventAggregator.EventAggregator), _dec(_class = function () {
        function DonutDetails(masterBudget, eventAggregator) {
            var _this = this;

            _classCallCheck(this, DonutDetails);

            this.masterBudget = masterBudget;
            this.currentYear = 2017;
            this.currentExpense = this.masterBudget.childCare.cost;
            this.currentExpenseYearCost = 324;
            this.currentCategory = 'Child Care';
            eventAggregator.subscribe("change year", function (year) {
                _this.currentYear = year;
                _this.changeNavigationTab(_this.currentCategory);
            });
        }

        DonutDetails.prototype.changeNavigationTab = function changeNavigationTab(category) {

            switch (category) {
                case this.masterBudget.budgetCategories[0]:
                    this.currentExpense = this.masterBudget.childCare.cost + (this.currentYear - 2017) * 1.0558;
                    this.currentCategory = category;
                    break;
                case this.masterBudget.budgetCategories[1]:
                    this.currentExpense = this.masterBudget.food.cost + (this.currentYear - 2017) * 1.0295;
                    this.currentCategory = category;
                    break;
                case this.masterBudget.budgetCategories[2]:
                    this.currentExpense = this.masterBudget.housing.cost + (this.currentYear - 2017) * 1.0269;
                    this.currentCategory = category;
                    break;
                case this.masterBudget.budgetCategories[3]:
                    this.currentExpense = this.masterBudget.medical.cost + (this.currentYear - 2017) * 1.0379;
                    this.currentCategory = category;
                    break;
                case this.masterBudget.budgetCategories[4]:
                    this.currentExpense = this.masterBudget.other.cost + (this.currentYear - 2017) * 1;
                    this.currentCategory = category;
                    break;
                case this.masterBudget.budgetCategories[5]:
                    this.currentExpense = this.masterBudget.savings.cost + (this.currentYear - 2017) * 1;
                    this.currentCategory = category;
                    break;
                case this.masterBudget.budgetCategories[6]:
                    this.currentExpense = this.masterBudget.taxes.cost + (this.currentYear - 2017) * 1;
                    this.currentCategory = category;
                    break;
                case this.masterBudget.budgetCategories[7]:
                    this.currentExpense = this.masterBudget.transportation.cost + (this.currentYear - 2017) * 1.0329;
                    this.currentCategory = category;
                    break;
                default:
                    break;
            }
        };

        DonutDetails.prototype.changedYear = function changedYear(year) {
            this.currentYear = year;
        };

        DonutDetails.prototype.calculateInflationData = function calculateInflationData() {
            var date = new Date();
            var year = date.getFullYear();
            var tempMasterBudget = this.masterBudget;
            for (var i = 0; i < currentYear - year; i++) {
                tempMasterBudget.childCare.privateSchoolCost *= this.masterBudget.childCare.privateSchoolInflation;
                tempMasterBudget.childCare.daycareCost *= this.masterBudget.childCare.daycareInflation;
                tempMasterBudget.food.groceriesCost *= this.masterBudget.food.groceriesInflation;
                tempMasterBudget.food.diningOutCost *= this.masterBudget.food.diningOutInflation;
                tempMasterBudget.other.recreationCost *= this.masterBudget.other.recreationInflation;
                tempMasterBudget.other.gymCost *= this.masterBudget.other.gymInflation;
                tempMasterBudget.other.entertainmentCost *= this.masterBudget.entertainmentInflation;
                tempMasterBudget.other.cellPhoneCost *= this.masterBudget.cellPhoneInflation;
            }
        };

        return DonutDetails;
    }()) || _class);
});
define('five-year/five-year',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var FiveYear = exports.FiveYear = function FiveYear() {
        _classCallCheck(this, FiveYear);
    };
});
define('goals/goal',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Goal = exports.Goal = function Goal(name, cost, month, year) {
        _classCallCheck(this, Goal);

        this.name = name;
        this.cost = cost;
        this.month = month;
        this.year = year;

        var monthNum = null;
        switch (this.month) {
            case "January":
                monthNum = 0;break;
            case "February":
                monthNum = 1;break;
            case "March":
                monthNum = 2;break;
            case "April":
                monthNum = 3;break;
            case "May":
                monthNum = 4;break;
            case "June":
                monthNum = 5;break;
            case "July":
                monthNum = 6;break;
            case "August":
                monthNum = 7;break;
            case "September":
                monthNum = 8;break;
            case "October":
                monthNum = 9;break;
            case "November":
                monthNum = 10;break;
            case "December":
                monthNum = 11;break;
        }

        var currYear = new Date().getFullYear();
        var currMonth = new Date().getMonth();

        var monthsBetween = null;
        if (currYear === this.year) monthsBetween = monthNum - currMonth;else monthsBetween = 11 - currMonth + 12 * (this.year - currYear - 1) + monthNum;

        this.monthlyCost = parseInt(this.cost / monthsBetween);
    };
});
define('goals/goals',['exports', 'goals/goal', 'aurelia-framework', 'masterBudget'], function (exports, _goal, _aureliaFramework, _masterBudget) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Goals = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Goals = exports.Goals = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget), _dec(_class = function () {
        function Goals(masterBudget) {
            _classCallCheck(this, Goals);

            this.masterBudget = masterBudget;

            this.goalsList = [];
            this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            this.selectedName = null;
            this.selectedMonth = "January";
            this.selectedYear = 2018;
            this.selectedCost = null;

            this.monthlySavings = 0;
        }

        Goals.prototype.addGoal = function addGoal() {
            var goal = new _goal.Goal(this.selectedName, parseInt(this.selectedCost), this.selectedMonth, parseInt(this.selectedYear));
            this.monthlySavings += goal.monthlyCost;
            this.goalsList.push(goal);

            this.selectedName = null;
            this.selectedMonth = "January";
            this.selectedYear = 2018;
            this.selectedCost = null;
            console.log(this.goalsList);
        };

        Goals.prototype.removeGoal = function removeGoal(index) {
            this.monthlySavings -= this.goalsList[index].monthlyCost;
            this.goalsList.splice(index, 1);
        };

        return Goals;
    }()) || _class);
});
define('intro/intro',['exports', 'aurelia-framework', 'aurelia-router', 'aurelia-fetch-client', '../utilities/chartFactory', 'masterBudget'], function (exports, _aureliaFramework, _aureliaRouter, _aureliaFetchClient, _chartFactory, _masterBudget) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Intro = undefined;

    function _asyncToGenerator(fn) {
        return function () {
            var gen = fn.apply(this, arguments);
            return new Promise(function (resolve, reject) {
                function step(key, arg) {
                    try {
                        var info = gen[key](arg);
                        var value = info.value;
                    } catch (error) {
                        reject(error);
                        return;
                    }

                    if (info.done) {
                        resolve(value);
                    } else {
                        return Promise.resolve(value).then(function (value) {
                            step("next", value);
                        }, function (err) {
                            step("throw", err);
                        });
                    }
                }

                return step("next");
            });
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Intro = exports.Intro = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _aureliaFetchClient.HttpClient, _masterBudget.MasterBudget), _dec(_class = function () {
        function Intro(router, httpClient, masterBudget) {
            _classCallCheck(this, Intro);

            this.router = router;
            this.httpClient = httpClient;
            this.masterBudget = masterBudget;
            this.getLocation();
        }

        Intro.prototype.getLocation = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var self, childCare, childCareData, carCost, carCostData, homeInsurance, homeInsuranceData, healthInsurance, healthInsuranceData, stateTax, stateTaxData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                self = this;

                                if (navigator.geolocation) {
                                    console.log('Geolocation is supported!');
                                } else {
                                    console.log('Geolocation is not supported for this Browser/OS version yet.');
                                }

                                window.onload = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                                    var startPos;
                                    return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                        while (1) {
                                            switch (_context2.prev = _context2.next) {
                                                case 0:
                                                    navigator.geolocation.getCurrentPosition(function () {
                                                        var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee(position) {
                                                            var data, data2, householdCost, houseHoldCostData;
                                                            return regeneratorRuntime.wrap(function _callee$(_context) {
                                                                while (1) {
                                                                    switch (_context.prev = _context.next) {
                                                                        case 0:
                                                                            startPos = position;
                                                                            _context.next = 3;
                                                                            return self.httpClient.fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + startPos.coords.latitude + ',' + startPos.coords.longitude + '&key=AIzaSyBM9-m7L5132H_bDe3JUn9tlwblTARBRbQ');

                                                                        case 3:
                                                                            data = _context.sent;
                                                                            _context.next = 6;
                                                                            return data.json();

                                                                        case 6:
                                                                            data2 = _context.sent;

                                                                            self.getCurrentLocation(data2);
                                                                            _context.next = 10;
                                                                            return self.httpClient.fetch('api/household-cost-county/get.json');

                                                                        case 10:
                                                                            householdCost = _context.sent;
                                                                            _context.next = 13;
                                                                            return householdCost.json();

                                                                        case 13:
                                                                            houseHoldCostData = _context.sent;

                                                                            houseHoldCostData.costByCounty.forEach(function (houseObject) {
                                                                                if (houseObject.County == self.masterBudget.location) self.masterBudget.housing.cost += houseObject[self.masterBudget.numberAdults];
                                                                            });

                                                                        case 15:
                                                                        case 'end':
                                                                            return _context.stop();
                                                                    }
                                                                }
                                                            }, _callee, this);
                                                        }));

                                                        return function (_x) {
                                                            return _ref3.apply(this, arguments);
                                                        };
                                                    }());

                                                case 1:
                                                case 'end':
                                                    return _context2.stop();
                                            }
                                        }
                                    }, _callee2, this);
                                }));
                                _context3.next = 5;
                                return window.onload();

                            case 5:
                                _context3.next = 7;
                                return this.httpClient.fetch('/api/child-care/get.json');

                            case 7:
                                childCare = _context3.sent;
                                _context3.next = 10;
                                return childCare.json();

                            case 10:
                                childCareData = _context3.sent;

                                childCareData.costByState.forEach(function (stateData) {
                                    if (stateData[0] == self.masterBudget.stateLocation) {
                                        self.masterBudget.childCare.cost = stateData[8];
                                    }
                                });

                                _context3.next = 14;
                                return this.httpClient.fetch('/api/car-costs/get.json');

                            case 14:
                                carCost = _context3.sent;
                                _context3.next = 17;
                                return carCost.json();

                            case 17:
                                carCostData = _context3.sent;

                                carCostData.costByState.forEach(function (stateData) {
                                    if (stateData[0] === self.masterBudget.stateLocation) {
                                        self.masterBudget.transportation.carYearlyUpkeepCost = stateData[4];
                                    }
                                });

                                carCostData.costByAge.forEach(function (ageData) {
                                    if (ageData[0] >= self.masterBudget.currentUserAge) {
                                        self.masterBudget.transportation.carMonthlyOwnershipCost = ageData[2];
                                    }
                                });

                                self.masterBudget.transportation.cost = parseInt(parseInt(self.masterBudget.transportation.carYearlyUpkeepCost) / 12) + parseInt(self.masterBudget.transportation.carMonthlyOwnershipCost);

                                _context3.next = 23;
                                return this.httpClient.fetch('/api/home-insurance/get.json');

                            case 23:
                                homeInsurance = _context3.sent;
                                _context3.next = 26;
                                return homeInsurance.json();

                            case 26:
                                homeInsuranceData = _context3.sent;

                                homeInsuranceData.costByState.forEach(function (homeData) {
                                    if (homeData[0] == self.masterBudget.stateLocation) {
                                        self.masterBudget.housing.cost = homeData[1];
                                    }
                                });

                                _context3.next = 30;
                                return this.httpClient.fetch('api/healthcare-insurance/get.json');

                            case 30:
                                healthInsurance = _context3.sent;
                                _context3.next = 33;
                                return healthInsurance.json();

                            case 33:
                                healthInsuranceData = _context3.sent;

                                healthInsuranceData.costByState.forEach(function (healthData) {
                                    if (healthData[0] == self.masterBudget.stateLocation) {
                                        self.masterBudget.medical.cost = parseInt(healthData[2] / 12);
                                    }
                                });

                                _context3.next = 37;
                                return this.httpClient.fetch('api/state-taxes/get.json');

                            case 37:
                                stateTax = _context3.sent;
                                _context3.next = 40;
                                return stateTax.json();

                            case 40:
                                stateTaxData = _context3.sent;

                            case 41:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getLocation() {
                return _ref.apply(this, arguments);
            }

            return getLocation;
        }();

        Intro.prototype.getCurrentLocation = function getCurrentLocation(jsonData) {
            var array = jsonData.results[4].formatted_address.split(",");
            this.masterBudget.location = array[0];
        };

        Intro.prototype.route = function route() {
            this.router.navigate("#/results");
        };

        Intro.prototype.sanitizeIncome = function sanitizeIncome() {
            this.masterBudget.annualIncome = this.masterBudget.annualIncome.replace(/,/g, "");
            this.masterBudget.annualIncome = this.masterBudget.annualIncome.replace(/\$/g, "");

            this.income = parseInt(this.masterBudget.annualIncome);

            this.masterBudget.annualIncome = '$' + this.income.toLocaleString();
        };

        Intro.prototype.getMonthlyIncome = function getMonthlyIncome() {
            this.masterBudget.totalMonthlyIncome = parseInt(this.income) / 12;
            console.log(this.income);
            this.masterBudget.savings.cost = this.income * 0.15;
        };

        return Intro;
    }()) || _class);
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('results/results',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Results = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Results = exports.Results = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function Results(router) {
            _classCallCheck(this, Results);

            this.router = router;
        }

        Results.prototype.routeGoals = function routeGoals() {
            this.router.navigate("#/goals");
        };

        Results.prototype.routeFiveYearPlan = function routeFiveYearPlan() {
            this.router.navigate("#/five-year");
        };

        Results.prototype.routeAutoBudget = function routeAutoBudget() {
            this.router.navigate("#/auto-budget");
        };

        return Results;
    }()) || _class);
});
define('results-banner-module/banner',['exports', 'aurelia-framework', 'masterBudget', '../utilities/chartFactory'], function (exports, _aureliaFramework, _masterBudget, _chartFactory) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Banner = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Banner = exports.Banner = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget), _dec(_class = function () {
        function Banner(masterBudget) {
            _classCallCheck(this, Banner);

            this.income = null;
            this.displayIncome = "";
            this.masterBudget = masterBudget;
        }

        Banner.prototype.sanitizeIncome = function sanitizeIncome() {
            this.displayIncome = this.displayIncome.replace(/,/g, "");
            this.displayIncome = this.displayIncome.replace(/\$/g, "");

            this.income = parseInt(this.displayIncome);

            this.displayIncome = '$' + this.income.toLocaleString();
        };

        Banner.prototype.getMonthlyIncome = function getMonthlyIncome() {
            var income = parseInt(this.displayIncome);
            this.masterBudget.totalMonthlyIncome = income / 12;
        };

        return Banner;
    }()) || _class);
});
define('utilities/chartFactory',['exports', 'highcharts'], function (exports, _highcharts) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ChartFactory = undefined;

    var HighCharts = _interopRequireWildcard(_highcharts);

    function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
            return obj;
        } else {
            var newObj = {};

            if (obj != null) {
                for (var key in obj) {
                    if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                }
            }

            newObj.default = obj;
            return newObj;
        }
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ChartFactory = exports.ChartFactory = function () {
        function ChartFactory() {
            _classCallCheck(this, ChartFactory);
        }

        ChartFactory.createHalfDonutChart = function createHalfDonutChart(containerID, tuples, type) {
            return Highcharts.chart(containerID, {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: 0,
                    plotShadow: false
                },
                colors: ['#89A54E', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
                title: {
                    text: type,
                    align: 'center',
                    verticalAlign: 'middle',
                    y: -100
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
                        center: ['50%', '75%'],
                        colors: ['#89A54E', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92']
                    }
                },
                series: [{
                    type: 'pie',
                    size: '100%',
                    name: 'Budget',
                    innerSize: '50%',
                    data: tuples,
                    colors: ['#89A54E', '#AA4643', '#89A54E', '#80699B', '#3D96AE', '#DB843D', '#92A8CD', '#A47D7C', '#B5CA92'],
                    colorByPoint: true
                }]
            });
        };

        ChartFactory.createDonutChart = function createDonutChart(containerID, tuples) {
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
            });
        };

        ChartFactory.createPieChart = function createPieChart(containerID, tuples) {
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
            });
        };

        ChartFactory.createChartTuple = function createChartTuple(masterBudget) {
            var budgetArray = [];
            masterBudget.sumOfAllCost = 0;
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[0], masterBudget.childCare.cost, masterBudget));
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[1], masterBudget.food.cost, masterBudget));
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[2], masterBudget.housing.cost, masterBudget));
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[3], masterBudget.medical.cost, masterBudget));
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[4], masterBudget.other.cost, masterBudget));
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[5], masterBudget.savings.cost, masterBudget));
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[6], masterBudget.taxes.cost, masterBudget));
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[7], masterBudget.transportation.cost, masterBudget));

            return budgetArray;
        };

        ChartFactory.tupleHelper = function tupleHelper(name, data, masterBudget) {
            var tempObject = {};
            tempObject.name = name;
            tempObject.y = data;
            masterBudget.sumOfAllCost += parseInt(data);
            return tempObject;
        };

        return ChartFactory;
    }();
});
define('utilities/currency',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var CurrencyValueConverter = exports.CurrencyValueConverter = function () {
        function CurrencyValueConverter() {
            _classCallCheck(this, CurrencyValueConverter);
        }

        CurrencyValueConverter.prototype.toView = function toView(value) {
            var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var locale = config.locale || 'en';
            var props = {
                style: 'currency',
                currency: config.currency || 'USD',
                currencyDisplay: config.displayBy || 'symbol'
            };

            return value.toLocaleString(locale, props);
        };

        return CurrencyValueConverter;
    }();
});
define('utilities/percent',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var PercentValueConverter = exports.PercentValueConverter = function () {
    function PercentValueConverter() {
      _classCallCheck(this, PercentValueConverter);
    }

    PercentValueConverter.prototype.toView = function toView(value) {
      var divided = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var round = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!value) {
        return value;
      }

      var divider = typeof value === 'string' ? Number(value) : value;

      if (typeof divider !== 'number' || isNaN(divider)) {
        return value;
      }

      return round ? Math.round(divider / divided * 100) : divider / divided * 100;
    };

    return PercentValueConverter;
  }();
});
define('budget-breakdown-module/category-modules/child-care/child-care',['exports', 'aurelia-framework', 'aurelia-event-aggregator', 'constants'], function (exports, _aureliaFramework, _aureliaEventAggregator, _constants) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.ChildCare = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var ChildCare = exports.ChildCare = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
        function ChildCare(constants, eventAggregator) {
            _classCallCheck(this, ChildCare);

            this.includeInBudget = true;
            this.constants = constants;
            this.cost = 0;
            this.costPercentage = 0;
            this.privateSchoolCost = 0;
            this.privateSchoolInflation = 1.0558;
            this.daycareCost = 0;
            this.daycareInflation = 1.0558;
            this.schoolExpenseCost = 0;
            this.schoolExpenseInflation = 1.0589;
            this.childSupportCost = 0;
            this.childSupportInflation = 1;
            this.eventAggregator = eventAggregator;
            this.collapsed = true;
            this.isMonthly = true;
        }

        ChildCare.prototype.toggle = function toggle() {
            this.collapsed = !this.collapsed;
        };

        ChildCare.prototype.calculateAdvancedChildCareCost = function calculateAdvancedChildCareCost() {
            var scale = this.isMonthly ? 1 : 1 / 12;
            this.cost = parseInt((parseInt(this.privateSchoolCost) + parseInt(this.daycareCost)) * scale);

            this.eventAggregator.publish('update', { name: 'Child Care', value: this.cost });
        };

        ChildCare.prototype.toggleHorizon = function toggleHorizon() {
            this.isMonthly = !this.isMonthly;
            this.calculateAdvancedChildCareCost();
        };

        return ChildCare;
    }()) || _class) || _class);
});
define('budget-breakdown-module/category-modules/food/food',['exports', 'aurelia-framework', '../../../constants', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _constants, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Food = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Food = exports.Food = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
        function Food(constants, eventAggregator) {
            _classCallCheck(this, Food);

            this.includeInBudget = true;
            this.groceries = 0;
            this.constants = constants;
            this.cost = 0;
            this.costPercentage = 0;
            this.groceriesCost = 0;
            this.groceriesInflation = 1.0295;
            this.diningOutCost = 0;
            this.diningOutInflation = 1.0304;
            this.workdayCost = 0;
            this.collapsed = true;
            this.eventAggregator = eventAggregator;
            this.isMonthly = true;
        }

        Food.prototype.toggle = function toggle() {
            this.collapsed = !this.collapsed;
        };

        Food.prototype.calculateFoodCost = function calculateFoodCost(numberChildren, numberAdults) {
            this.numberChildren = numberChildren;
            this.numberAdults = numberAdults;
            this.cost = parseInt(numberChildren) * parseInt(this.constants.foodCostPerChild) + parseInt(numberAdults) * parseInt(this.constants.foodCostPerAdult);
        };

        Food.prototype.calculateAdvancedFoodCost = function calculateAdvancedFoodCost() {
            var scale = this.isMonthly ? 1 : 1 / 12;
            this.cost = parseInt((parseInt(this.groceriesCost) + parseInt(this.diningOutCost)) * scale);


            this.eventAggregator.publish('update', { name: 'Food', value: this.cost });
        };

        Food.prototype.toggleHorizon = function toggleHorizon() {
            this.isMonthly = !this.isMonthly;
            this.calculateAdvancedFoodCost();
        };

        return Food;
    }()) || _class) || _class);
});
define('budget-breakdown-module/category-modules/housing/housing',['exports', 'aurelia-framework', 'constants', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _constants, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Housing = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Housing = exports.Housing = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
        function Housing(constants, eventAggregator) {
            _classCallCheck(this, Housing);

            this.includeInBudget = true;
            this.constants = constants;
            this.cost = 0;
            this.costPercentage = 0;
            this.monthlyCableCost = 0;
            this.monthlyRentCost = 0;
            this.monthlyRentInflation = 1.0269;
            this.homeInsuranceCost = 0;
            this.homeInsuranceInflation = 1.0170;
            this.homeMaintenanceCost = 0;
            this.homeMaintenanceInflation = 1.0229;
            this.homeTelephoneCost = 0;
            this.homeTelephoneInflation = 0.9915;
            this.utilitiesCost = 0;
            this.collapsed = true;
            this.eventAggregator = eventAggregator;
            this.isMonthly = true;
        }

        Housing.prototype.toggle = function toggle() {
            this.collapsed = !this.collapsed;
        };

        Housing.prototype.calculateAdvancedCost = function calculateAdvancedCost() {
            var scale = this.isMonthly ? 1 : 1 / 12;
            this.cost = parseInt((parseInt(this.monthlyRentCost) + parseInt(this.homeInsuranceCost) + parseInt(this.utilitiesCost)) * scale);


            this.eventAggregator.publish('update', { name: 'Housing', value: this.cost });
        };

        Housing.prototype.calculateAutoBudgetCost = function calculateAutoBudgetCost() {
            this.cost = parseInt(parseInt(this.monthlyRentCost) + parseInt(this.homeInsuranceCost) + parseInt(this.utilitiesCost));
        };

        Housing.prototype.toggleHorizon = function toggleHorizon() {
            this.isMonthly = !this.isMonthly;
            this.calculateAdvancedCost();
        };

        return Housing;
    }()) || _class) || _class);
});
define('budget-breakdown-module/category-modules/medical/medical',['exports', 'aurelia-framework', 'constants', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _constants, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Medical = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Medical = exports.Medical = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
        function Medical(constants, eventAggregator) {
            _classCallCheck(this, Medical);

            this.includeInBudget = true;
            this.constants = constants;
            this.cost = 0;
            this.costPercentage = 0;
            this.healthInsuranceCost = 0;
            this.healthInflation = 1.0379;
            this.medicationCost = 0;
            this.dentalCost = 0;
            this.otherMedicalCost = 0;
            this.collapsed = true;
            this.eventAggregator = eventAggregator;
            this.isMonthly = true;
        }

        Medical.prototype.toggle = function toggle() {
            this.collapsed = !this.collapsed;
        };

        Medical.prototype.calculateAdvancedMedical = function calculateAdvancedMedical() {
            var scale = this.isMonthly ? 1 : 1 / 12;
            this.cost = parseInt((parseInt(this.dentalCost) + parseInt(this.healthInsuranceCost) + parseInt(this.medicationCost) + parseInt(this.otherMedicalCost)) * scale);


            this.eventAggregator.publish('update', { name: 'Medical', value: this.cost });
        };

        Medical.prototype.toggleHorizon = function toggleHorizon() {
            this.isMonthly = !this.isMonthly;
            this.calculateAdvancedMedical();
        };

        return Medical;
    }()) || _class) || _class);
});
define('budget-breakdown-module/category-modules/other/other',['exports', 'aurelia-framework', 'constants', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _constants, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Other = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Other = exports.Other = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
        function Other(constants, eventAggregator) {
            _classCallCheck(this, Other);

            this.includeInBudget = true;
            this.constants = constants;
            this.cost = 0;
            this.costPercentage = 0;
            this.cellPhoneCost = 0;
            this.recreationCost = 0;
            this.gymCost = 0;
            this.entertainmentCost = 0;
            this.clothingCost = 0;
            this.studentLoanCost = 0;
            this.collapsed = true;
            this.eventAggregator = eventAggregator;
            this.isMonthly = true;
        }

        Other.prototype.toggle = function toggle() {
            this.collapsed = !this.collapsed;
        };

        Other.prototype.getBasicOtherCost = function getBasicOtherCost() {
            this.cost = this.totalMonthlyIncome * this.constants.miscellaneousCost;
        };

        Other.prototype.calculateAdvancedOtherCost = function calculateAdvancedOtherCost() {
            var scale = this.isMonthly ? 1 : 1 / 12;
            this.cost = parseInt((parseInt(this.cellPhoneCost) + parseInt(this.recreationCost) + parseInt(this.gymCost) + parseInt(this.entertainmentCost) + parseInt(this.clothingCost)) * scale);

            this.eventAggregator.publish('update', { name: 'Other', value: this.cost });
        };

        Other.prototype.toggleHorizon = function toggleHorizon() {
            this.isMonthly = !this.isMonthly;
            this.calculateAdvancedOtherCost();
        };

        return Other;
    }()) || _class) || _class);
});
define('budget-breakdown-module/category-modules/taxes/taxes',['exports', 'aurelia-framework', 'constants', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _constants, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Taxes = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Taxes = exports.Taxes = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
        function Taxes(constants, eventAggregator) {
            _classCallCheck(this, Taxes);

            this.includeInBudget = true;
            this.constants = constants;
            this.cost = 0;
            this.grossIncome = 0;
            this.costPercentage = 0;
            this.stateTaxCost = 0;
            this.housingTaxCost = 0;
            this.otherTaxCost = 0;
            this.collapsed = true;
            this.eventAggregator = eventAggregator;
            this.isMonthly = true;
        }

        Taxes.prototype.toggle = function toggle() {
            this.collapsed = !this.collapsed;
        };

        Taxes.prototype.calculateAdvancedTaxCost = function calculateAdvancedTaxCost() {
            var scale = this.isMonthly ? 1 : 1 / 12;
            this.cost = parseInt((parseInt(this.vehicleTaxCost) + parseInt(this.housingTaxCost)) * scale);


            this.eventAggregator.publish('update', { name: 'Taxes', value: this.cost });
        };

        Taxes.prototype.toggleHorizon = function toggleHorizon() {
            this.isMonthly = !this.isMonthly;
        };

        return Taxes;
    }()) || _class) || _class);
});
define('budget-breakdown-module/category-modules/savings/savings',['exports', 'aurelia-framework', 'constants', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _constants, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Savings = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Savings = exports.Savings = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
        function Savings(constants, eventAggregator) {
            _classCallCheck(this, Savings);

            this.includeInBudget = true;
            this.cost = 0;
            this.costPercentage = 0;
            this.constants = constants;
            this.emergencyFundCost = 0;
            this.retirementCost = 0;
            this.investmentsCost = 0;
            this.collegeSavingsCost = 0;
            this.collapsed = true;
            this.eventAggregator = eventAggregator;
            this.isMonthly = true;
        }

        Savings.prototype.toggle = function toggle() {
            this.collapsed = !this.collapsed;
        };

        Savings.prototype.calculateAdvancedSavings = function calculateAdvancedSavings() {
            var scale = this.isMonthly ? 1 : 1 / 12;
            this.cost = parseInt((parseInt(this.emergencyFundCost) + parseInt(this.retirementCost) + parseInt(this.investmentsCost) + parseInt(this.collegeSavingsCost)) * scale);


            this.eventAggregator.publish('update', { name: 'Savings', value: this.cost });
        };

        Savings.prototype.toggleHorizon = function toggleHorizon() {
            this.isMonthly = !this.isMonthly;
            this.calculateAdvancedSavings();
        };

        return Savings;
    }()) || _class) || _class);
});
define('budget-breakdown-module/category-modules/transportation/transportation',['exports', 'aurelia-framework', 'constants', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _constants, _aureliaEventAggregator) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Transportation = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _dec2, _class;

    var Transportation = exports.Transportation = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function () {
        function Transportation(constants, eventAggregator) {
            _classCallCheck(this, Transportation);

            this.includeInBudget = true;
            this.constants = constants;
            this.cost = 0;
            this.costPercentage = 0;
            this.otherCost = 0;
            this.collapsed = true;
            this.publicTransportationCost = 0;
            this.publicTransportationInflation = 1.0329;
            this.carYearlyUpkeepCost = 0;
            this.carMonthlyOwnershipCost = 0;
            this.hasCar = 0;
            this.eventAggregator = eventAggregator;
            this.isMonthly = true;
        }

        Transportation.prototype.calculateAdvancedTransportationCost = function calculateAdvancedTransportationCost() {
            var scale = this.isMonthly ? 1 : 1 / 12;
            this.cost = parseInt((parseInt(this.carYearlyUpkeepCost) + parseInt(this.carMonthlyOwnershipCost)) * scale);


            this.eventAggregator.publish('update', { name: 'Transportation', value: this.cost });
        };

        Transportation.prototype.toggle = function toggle() {
            this.collapsed = !this.collapsed;
        };

        Transportation.prototype.toggleHorizon = function toggleHorizon() {
            this.isMonthly = !this.isMonthly;
            this.calculateAdvancedTransportationCost();
        };

        return Transportation;
    }()) || _class) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"bootstrap-material-design/css/bootstrap-material-design.css\"></require><require from=\"css/styles.css\"></require><div id=\"app\"><router-view></router-view></div></template>"; });
define('text!css/styles.css', ['module'], function(module) { module.exports = "\r\n/* Style for personal info or intro page*/\r\n#personalInfo {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Header for every page but intro*/\r\n#content-header {\r\n    background:#eceff1;\r\n}\r\n\r\n/* Style for Five Year Results Container*/\r\n#five-year-module-container {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Style for five year container info*/\r\n#five-year-info-container {\r\n    clear: both;\r\n}\r\n\r\n/* Toolbar for number of adult radios*/\r\n#adults-toolbar {\r\n    margin: 0 auto;\r\n    width: 40%;\r\n}\r\n\r\n/* Budget buttons in div on auto button page*/\r\n#auto-budget-buttons {\r\n    position:absolute;\r\n    width:100%;\r\n    bottom:0;\r\n    text-align:center;\r\n}\r\n\r\n/* Container for auto budget page*/\r\n#auto-budget-container {\r\n    width: 100vw;\r\n    margin-left: 7vw;\r\n}\r\n\r\n.list-group {\r\n    text-align: center;\r\n}\r\n\r\n.badge {\r\n    color:green;\r\n    background:blanchedalmond;\r\n    padding: 8px;\r\n    text-align: center;\r\n}\r\n\r\n/* Goals monthly or yearly toggle*/\r\n#amount-toggle {\r\n    margin-top: 80px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n/* Reduce container for drag and drop*/\r\n#reduce-container {\r\n    width: 300px;\r\n    height: 400px;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* Drag and drop top parent div*/\r\n#drag-drop-div {\r\n    background:#eceff1;\r\n}\r\n\r\n/* Cut containter for drag and drop*/\r\n#cut-container {\r\n    width: 300px;\r\n    height: 400px;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* Choice containter for drag and drop*/\r\n#choice-container {\r\n    width: 300px;\r\n    height: 400px;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* Container for goals donut chart*/\r\n#goals-chart-div {\r\n    float:left;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Container for goals donut chart details (to the right of chart)*/\r\n#donut-details {\r\n    float:right;\r\n    width: 700px;\r\n    height: 400px;\r\n}\r\n\r\n/* Container for the donut details.*/\r\n#donut-details-div {\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* Card info one div*/\r\n#card-info-one-div {\r\nbox-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* Card info two div*/\r\n#card-info-two-div {\r\nbox-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* Card info three div*/\r\n#card-info-three-div {\r\nbox-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/* Navigation bar above donut chart*/\r\n#navbar-years {\r\n    background:  #e1f5fe;\r\n    margin-right: 21px;\r\n    margin-left: 30px;\r\n}\r\n\r\n.arrows {\r\n  margin-left: 6px;\r\n}\r\n\r\n/* Style for goals templage*/\r\n#goal-template {\r\n    width: 70vh;\r\n    margin: 0 auto;\r\n    margin-top: 100px;\r\n}\r\n\r\n/*Intro page tempalte styles*/\r\n#intro-template {\r\n    padding-bottom: 800px;\r\n    padding-top: 50px;\r\n    background-image: url('src/css/roadmap.jpg');\r\n    background-size: 210vh;\r\n}\r\n\r\n/* Title on the intro page*/\r\n#intro-page-title {\r\n    width: 48vh;\r\n    margin: 0 auto;\r\n    font-size: 400%;\r\n    color: white;\r\n}\r\n\r\n/*Intro card */\r\n#intro-card {\r\n  width: 40vh;\r\n  margin-left: 38vw;\r\n  margin-top: 10vh;\r\n  opacity: 0.8;\r\n}\r\n\r\n/* Inputs on intro card*/\r\n#intro-form {\r\n    padding-left: 1vw;\r\n    padding-right: 1vw;\r\n}\r\n\r\n/* Buttons for children on intro*/\r\n#children-intro-button {\r\n    color:white;\r\n}\r\n\r\n/* Buttons for adults on intro*/\r\n#adult-intro-button {\r\n    color:white;\r\n}\r\n\r\n/* Toolbar for number of children radios*/\r\n#children-toolbar {\r\n    margin: 0 auto;\r\n    width: 80%;\r\n}\r\n\r\n/* Budget button on intro page */\r\n#budgetButton {\r\n    margin: 0 auto;\r\n    width: 120px;\r\n    color: white;\r\n}\r\n\r\n/* Style for banner module table*/\r\n.blackparagraph {\r\n  color:black;\r\n}\r\n\r\n.grayparagraph {\r\n  color: LightGray;\r\n}\r\n\r\n#banner-table {\r\n    /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); */\r\n    margin-bottom: 50px;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n    margin-left: 270px;  /*added to fix centering from making it card class*/\r\n}\r\n\r\n/* Style for radio button lables in banner table*/\r\n#radio-label {\r\n    color: black;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    font-size: 16px;\r\n}\r\n\r\n/* Style for the accordian breakdown*/\r\n #accordion {\r\n    /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); */\r\n    margin-top: 60px;\r\n} \r\n\r\n/* Chart container styles*/\r\n#chartContainer {\r\n  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); */\r\n  margin-top: 60px;\r\n}\r\n\r\n/* Chart container styles*/\r\n#goalsChartContainer {\r\n  /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); */\r\n}\r\n\r\n/* Style for input-group in collapse*/\r\n.input-group {\r\n  margin-left: 5%;\r\n}\r\n\r\n/* Nav bar class*/\r\n.navbar {\r\n  margin-bottom: 0px;\r\n}\r\n\r\n/* Style for breakdown div*/\r\n#breakdown-div {\r\n    float:right;\r\n    width: 600px;\r\n    height: 480px;\r\n}\r\n\r\n/* Style for chart div*/\r\n#chart-div {\r\n    float:left;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Style for button div*/\r\n#button-div {\r\n    clear: both;\r\n    padding: 20vh;\r\n    margin-left: -8vw;\r\n    margin-right: 10vw;\r\n}\r\n\r\n/* Goals button on results page*/\r\n#goals-button {\r\n    color:white;\r\n}\r\n\r\n/* Five year button on results page*/\r\n#five-year-button {\r\n    color: white;\r\n}\r\n\r\n/* Auto Budget Button on results page*/\r\n#auto-budget-button {\r\n    color: white;\r\n}\r\n\r\n/* Buttons for breakdown banner*/\r\n#breakdown-buttons-label {\r\n    color: white;\r\n}\r\n\r\n/* */\r\n#breakdown-header-label {\r\n  color: black;\r\n}\r\n\r\n/* Chart and breakdown table container*/\r\n#results-container {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n}\r\n\r\n#collapse-table {\r\n    background: gray;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    width: 10em;\r\n    /* other CSS unchanged */\r\n}\r\n\r\n/* Checkbox garbage */\r\n.checkbox {\r\n  padding-left: 20px; }\r\n  .checkbox label {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    width: 1px; }\r\n    .checkbox label::before {\r\n      content: \"\";\r\n      display: inline-block;\r\n      position: absolute;\r\n      width: 17px;\r\n      height: 17px;\r\n      left: 0;\r\n      margin-left: -20px;\r\n      border: 1px solid #cccccc;\r\n      border-radius: 3px;\r\n      background-color: #fff;\r\n      -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n      -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n      transition: border 0.15s ease-in-out, color 0.15s ease-in-out; }\r\n    .checkbox label::after {\r\n      display: inline-block;\r\n      position: absolute;\r\n      width: 16px;\r\n      height: 16px;\r\n      left: 0;\r\n      top: 0;\r\n      margin-left: -20px;\r\n      padding-left: 3px;\r\n      padding-top: 1px;\r\n      font-size: 11px;\r\n      color: #555555; }\r\n  .checkbox input[type=\"checkbox\"] {\r\n    opacity: 0; }\r\n    .checkbox input[type=\"checkbox\"]:focus + label::before {\r\n      outline: thin dotted;\r\n      outline: 5px auto -webkit-focus-ring-color;\r\n      outline-offset: -2px; }\r\n    .checkbox input[type=\"checkbox\"]:checked + label::after {\r\n      font-family: 'FontAwesome';\r\n      content: \"\\f00c\"; \r\n      padding-top: 1px;}\r\n    .checkbox input[type=\"checkbox\"]:disabled + label {\r\n      opacity: 0.65; }\r\n      .checkbox input[type=\"checkbox\"]:disabled + label::before {\r\n        background-color: #eeeeee;\r\n        cursor: not-allowed; }\r\n  .checkbox.checkbox-circle label::before {\r\n    border-radius: 50%; }\r\n  .checkbox.checkbox-inline {\r\n    margin-top: 0; }\r\n\r\n.checkbox-child-care input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #7cb5ec;\r\n  border-color: #7cb5ec; }\r\n.checkbox-child-care input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-food input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #434348;\r\n  border-color: #434348; }\r\n.checkbox-food input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-housing input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #90ED7D;\r\n  border-color: #90ed7d; }\r\n.checkbox-housing input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-medical input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #f7a35c;\r\n  border-color: #f7a35c; }\r\n.checkbox-medical input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-other input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #8085e9;\r\n  border-color: #8085e9; }\r\n.checkbox-other input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-savings input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #f15c80;\r\n  border-color: #f15c80; }\r\n.checkbox-savings input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-taxes input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #e4d354;\r\n  border-color: #e4d354; }\r\n.checkbox-taxes input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-transportation input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #2b908f;\r\n  border-color: #2b908f; }\r\n.checkbox-transportation input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n\r\n  /*.checkbox {\r\n  padding-left: 20px; }\r\n  .checkbox label {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 5px; }\r\n    .checkbox label::before {\r\n      content: \"\";\r\n      display: inline-block;\r\n      position: absolute;\r\n      width: 17px;\r\n      height: 17px;\r\n      left: 0;\r\n      margin-left: -20px;\r\n      border: 1px solid #cccccc;\r\n      border-radius: 3px;\r\n      background-color: #fff;\r\n      -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n      -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n      transition: border 0.15s ease-in-out, color 0.15s ease-in-out; }\r\n    .checkbox label::after {\r\n      display: inline-block;\r\n      position: absolute;\r\n      width: 16px;\r\n      height: 16px;\r\n      left: 0;\r\n      top: 0;\r\n      margin-left: -20px;\r\n      padding-left: 3px;\r\n      padding-top: 1px;\r\n      font-size: 11px;\r\n      color: #555555; }\r\n  .checkbox input[type=\"checkbox\"] {\r\n    opacity: 0; }\r\n    .checkbox input[type=\"checkbox\"]:focus + label::before {\r\n      outline: thin dotted;\r\n      outline: 5px auto -webkit-focus-ring-color;\r\n      outline-offset: -2px; }\r\n    .checkbox input[type=\"checkbox\"]:checked + label::after {\r\n      font-family: 'FontAwesome';\r\n      content: \"\\f00c\"; }\r\n    .checkbox input[type=\"checkbox\"]:disabled + label {\r\n      opacity: 0.65; }\r\n      .checkbox input[type=\"checkbox\"]:disabled + label::before {\r\n        background-color: #eeeeee;\r\n        cursor: not-allowed; }\r\n  .checkbox.checkbox-circle label::before {\r\n    border-radius: 50%; }\r\n  .checkbox.checkbox-inline {\r\n    margin-top: 0; }\r\n\r\n.checkbox-primary input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #428bca;\r\n  border-color: #428bca; }\r\n.checkbox-primary input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-danger input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #d9534f;\r\n  border-color: #d9534f; }\r\n.checkbox-danger input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-info input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de; }\r\n.checkbox-info input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-warning input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e; }\r\n.checkbox-warning input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-success input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #5cb85c;\r\n  border-color: #5cb85c; }\r\n.checkbox-success input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }*/\r\n"; });
define('text!auto-budget/auto-budget.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><require from=\"highcharts/css/highcharts.css\"></require><div><h1 id=\"content-header\" style=\"font-size:36px;text-align:center\"><b>Budget Planning<b></b></b></h1></div><br><div id=\"drag-drop-div\"><compose view-model=\"chart/gauge-chart\"></compose></div></template>"; });
define('text!budget-breakdown-module/breakdown.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css\"><require from=\"./category-modules/child-care/child-care\"></require><require from=\"./category-modules/food/food\"></require><require from=\"./category-modules/housing/housing\"></require><require from=\"./category-modules/medical/medical\"></require><require from=\"./category-modules/other/other\"></require><require from=\"./category-modules/savings/savings\"></require><require from=\"./category-modules/taxes/taxes\"></require><require from=\"./category-modules/transportation/transportation\"></require><div id=\"accordion\" class=\"row\" role=\"tablist\" aria-multiselectable=\"true\"><compose view-model=\"./category-modules/child-care/child-care\"></compose><compose view-model=\"./category-modules/food/food\"></compose><compose view-model=\"./category-modules/housing/housing\"></compose><compose view-model=\"./category-modules/medical/medical\"></compose><compose view-model=\"./category-modules/other/other\"></compose><compose view-model=\"./category-modules/savings/savings\"></compose><compose view-model=\"./category-modules/taxes/taxes\"></compose><compose view-model=\"./category-modules/transportation/transportation\"></compose></div></template>"; });
define('text!chart/chart.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><require from=\"highcharts/css/highcharts.css\"></require><div id=\"chartContainer\" class=\"card\" style=\"height:500px\"></div></template>"; });
define('text!chart/donut-chart.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><require from=\"highcharts/css/highcharts.css\"></require><nav data-spy=\"scroll\" class=\"navbar navbar-light teal\"><div class=\"container-fluid\"><ul repeat.for=\"year of years\" class=\"nav navbar-nav\"><li class=\"${currentYear === year ? 'active' : ''}\"><a click.delegate=\"drawChartForYear({year})\">${year}</a></li></ul></div><div id=\"goalsChartContainer\" style=\"height:500px\"></div></nav></template>"; });
define('text!chart/gauge-chart.html', ['module'], function(module) { module.exports = "<template><div id=\"auto-budget-container\"><div class=\"col-md-2\"><h2>Drag and Drop</h2><div id=\"choice-container\" style=\"border:2px solid #2bbbad\" class=\"card z-depth-5 content-options\" dragstart.trigger=\"drag($event)\" drop.trigger=\"drop($event)\" dragover.trigger=\"allowDrop($event)\"><ul class=\"list-group\"><li class=\"list-group-item\" draggable=\"true\" repeat.for=\"constant of neutralArray\"><span class=\"badge\">${constant}</span></li></ul><button id=\"auto-budget-buttons\" class=\"btn btn-raised btn-primary\" style=\"color:#fff\" click.delegate=\"autoBudget()\">Auto-Budget</button></div></div><div class=\"col-md-2\"><h2>Remove</h2><div id=\"cut-container\" style=\"border:2px solid #2bbbad\" class=\"card z-depth-5 content-cut\" dragstart.trigger=\"drag($event)\" dragover.trigger=\"allowDrop($event)\" drop.trigger=\"drop($event)\"><ul class=\"list-group\"><li class=\"list-group-item\" draggable=\"true\" repeat.for=\"cut of cutArray\"><span class=\"badge badge-info\">${cut}</span></li></ul><button id=\"auto-budget-buttons\" class=\"btn btn-raised btn-primary\" style=\"color:#fff\" click.delegate=\"userAdjustedBudget()\">My Budget</button></div></div><div class=\"col-md-2\"><h2 style=\"margin-left:90px\">Reduce</h2><div id=\"reduce-container\" style=\"border:2px solid #2bbbad\" class=\"card z-depth-5 content-reduce\" drop.trigger=\"drop($event)\" dragstart.trigger=\"drag($event)\" dragover.trigger=\"allowDrop($event)\"><ul class=\"list-group\"><li class=\"list-group-item\" draggable=\"true\" repeat.for=\"reduce of reduceArray\"><span class=\"badge badge-info\">${reduce}</span></li></ul><button id=\"auto-budget-buttons\" class=\"btn btn-raised btn-primary\" style=\"color:#fff\" click.delegate=\"userAdjustedBudget()\">My Budget</button></div></div><div class=\"col-md-6\"><div class=\"card col-md-6 active\" id=\"gaugeChartContainer\" style=\"height:300px;width:500px\"></div><div class=\"card col-md-6 active\" id=\"gaugeChartContainer2\" style=\"height:300px;width:500px\"></div></div></div><br><br><br><br><br><br><br><br><br><br></template>"; });
define('text!five-year/card-info-one.html', ['module'], function(module) { module.exports = "<template>safasdfasdfasf</template>"; });
define('text!five-year/card-info-three.html', ['module'], function(module) { module.exports = "<template><div id=\"card-info-one-div\">nezxt</div></template>"; });
define('text!five-year/card-info-two.html', ['module'], function(module) { module.exports = "<template><div id=\"card-info-one-div\">advice</div></template>"; });
define('text!five-year/donut-details.html', ['module'], function(module) { module.exports = "<template><require from=\"../utilities/currency\"></require><require from=\"../utilities/percent\"></require><nav class=\"navbar navbar-light teal\"><div class=\"container-fluid\"><ul repeat.for=\"category of masterBudget.budgetCategories\" class=\"nav navbar-nav\"><li class=\"${category === currentCategory ? 'active': ''}\"><a click.delegate=\"changeNavigationTab(category)\">${category}</a></li></ul></div></nav><div class=\"card\" id=\"donut-details-div\"><h4>Your monthly ${currentCategory} expense for ${currentYear} is ${currentExpense | currency}.</h4><div><h3>Top ways to save:</h3><p>1) Cancel Club Memberships</p><p>2) Reduce or eliminate cable bill</p><p>3) Carpool/Reduce Transportation cost</p></div></div></template>"; });
define('text!five-year/five-year.html', ['module'], function(module) { module.exports = "<template><div id=\"five-year-module-container\"><div id=\"goals-chart-div\" class=\"card\"><compose view-model=\"chart/donut-chart\" view-model.ref=\"chartVM\"></compose></div><div id=\"donut-details\" class=\"card\"><compose view-model=\"./donut-details\"></compose></div></div></template>"; });
define('text!goals/goals.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><div><h1 id=\"content-header\" style=\"font-size:36px;text-align:center\"><b>Budget Planning<b></b></b></h1></div><br><div class=\"progress\"><div class=\"progress-bar\" style=\"width:75%\"></div></div><div id=\"goal-template\"><div><h2>How much will you need to reach your Goal?</h2><h4>Start with a goal to help your realize the savings needed to reach this goal</h4></div></div><div id=\"goal-template\">Your current savings are ${masterBudget.savings.cost} a month. How much more will you need to save to be able to afford goal purchases?</div><table id=\"goal-template\" class=\"table table-striped table-hover\"><thead><tr><th>Goal</th><th>Cost</th><th>Purchase Month</th><th>Purchase Year</th><th></th></tr></thead><tbody><tr><td><div class=\"form-group form-inline\"><div class=\"col-md-10\"><input type=\"text\" class=\"form-control\" id=\"inputGoal\" placeholder=\"Boat\" value.bind=\"selectedName\"></div></div></td><td><div class=\"form-group form-inline\"><div class=\"col-md-10\"><input type=\"number\" class=\"form-control\" id=\"inputCost\" placeholder=\"8000\" value.bind=\"selectedCost\"></div></div></td><td><div class=\"form-group form-inline\"><div class=\"col-md-10\"><select id=\"inputMonth\" class=\"form-control\" value.bind=\"selectedMonth\"><option repeat.for=\"month of months\" value.bind=\"month\">${month}</option></select></div></div></td><td><div class=\"form-group form-inline\"><div class=\"col-md-10\"><input type=\"number\" class=\"form-control\" id=\"inputYear\" placeholder=\"2019\" value.bind=\"selectedYear\"></div></div></td><td><button class=\"btn btn-raised btn-info\" click.delegate=\"addGoal()\">Add Goal</button></td></tr><tr repeat.for=\"goal of goalsList\"><td>${goal.name}</td><td>${goal.cost}</td><td>${goal.month}</td><td>${goal.year}</td><td><button class=\"btn btn-raised btn-danger\" click.delegate=\"removeGoal($index)\">Remove Goal</button></td></tr></tbody></table><div if.bind=\"goalsList.length > 0\">You must save ${monthlySavings} a month to afford these goals.</div></template>"; });
define('text!intro/intro.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><div class=\"view overlay hm-blue-light\" id=\"intro-template\"><h1 id=\"intro-page-title\">Budget Planning</h1><div class=\"card\" id=\"intro-card\"><form><div id=\"intro-form\" class=\"form-group\"><label for=\"\"><b>Annual Income:</b></label><input type=\"text\" class=\"form-control\" placeholder=\"$50,000\" value.bind=\"masterBudget.annualIncome\" change.delegate=\"sanitizeIncome() getMonthlyIncome()\"></div><div id=\"intro-form\" class=\"form-group\"><label for=\"\"><b>Location:</b></label><input type=\"text\" class=\"form-control\" value.bind=\"masterBudget.location\"></div><div class=\"btn-toolbar\" role=\"toolbar\" id=\"adults-toolbar\"><b style=\"margin:0 auto\">Adults in Household</b><div class=\"btn-group btn-group-justified btn-group-raised\" data-toggle=\"buttons\"><label id=\"adult-intro-button\" repeat.for=\"i of 2\" class=\"btn btn-raised btn-primary\"><input type=\"radio\" checked.bind=\"masterBudget.numberAdults\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div><br><div class=\"btn-toolbar\" role=\"toolbar\" id=\"children-toolbar\"><b>Children in Household</b><div class=\"btn-group btn-group-justified btn-group-raised\" data-toggle=\"buttons\"><label id=\"children-intro-button\" repeat.for=\"i of 5\" class=\"btn btn-raised btn-primary\"><input type=\"radio\" checked.bind=\"masterBudget.numberChildren\" value.bind=\"i + 1\" name=\"options\"> ${i}</label></div></div><br><div id=\"budgetButton\"><button class=\"btn btn-lg btn-raised btn-info\" click.delegate=\"route() getMonthlyIncome()\">Budget</button></div></form></div></div></template>"; });
define('text!results/results.html', ['module'], function(module) { module.exports = "<template><div id=\"content-header\"><h1 style=\"font-size:36px;text-align:center\"><b>Budget Planning<b></b></b></h1></div><br><compose view-model=\"results-banner-module/banner\"></compose><div style=\"background:#eceff1\"><div id=\"results-container\" class=\"row\"><div id=\"chart-div\"><compose view-model=\"chart/chart\" view-model.ref=\"chartVM\"></compose></div><div id=\"breakdown-div\"><compose view-model=\"budget-breakdown-module/breakdown\"></compose></div><div class=\"button-group\" id=\"button-div\"><button type=\"button\" class=\"col-md-2 btn btn-raised btn-primary\" click.delegate=\"routeGoals()\">Goals</button> <button type=\"button\" class=\"col-md-3 btn btn-raised btn-primary\" click.delegate=\"routeFiveYearPlan()\">Five Year Plan</button> <button type=\"button\" class=\"col-md-2 btn btn-raised btn-primary\" click.delegate=\"routeAutoBudget()\">Auto Budget</button></div></div></div></template>"; });
define('text!results-banner-module/banner.html', ['module'], function(module) { module.exports = "<template><table id=\"banner-table\" class=\"table card\"><tr><td><div><label id=\"breakdown-header-label\" for=\"\"><b>Annual Income:</b></label><input type=\"text\" class=\"form-control\" placeholder=\"50,000\" value.bind=\"masterBudget.annualIncome\" change.delegate=\"sanitizeIncome() getMonthlyIncome()\"></div></td><td><div><label id=\"breakdown-header-label\" for=\"\"><b>Location:</b></label><input type=\"text\" value.bind=\"masterBudget.location\" class=\"form-control\"></div></td><td><div id=\"breakdown-buttons\" class=\"btn-toolbar\" role=\"toolbar\"><b>Adults in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label id=\"breakdown-buttons-label\" repeat.for=\"i of 2\" class=\"btn btn-sm btn-raised btn-primary\"><input type=\"radio\" checked.bind=\"masterBudget.numberAdults\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div></td><td><div id=\"breakdown-buttons\" class=\"btn-toolbar\" role=\"toolbar\"><b>Children in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label id=\"breakdown-buttons-label\" repeat.for=\"i of 5\" class=\"btn btn-sm btn-raised btn-primary\"><input type=\"radio\" checked.bind=\"masterBudget.numberChildren\" value.bind=\"i\" name=\"options\"> ${i}</label></div></div></td></tr></table></template>"; });
define('text!budget-breakdown-module/category-modules/child-care/child-care.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOne\"><dv class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-child-care checkbox-inline\"><input id=\"checkbox1\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Child Care')\"><label for=\"checkbox1\"></label></div><a click.delegate=\"toggle()\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseChildCare\" aria-expanded=\"true\" aria-controls=\"collapseChildCare\">Child Care<span class=\"${collapsed ? 'glyphicon glyphicon-chevron-down arrows' : 'glyphicon glyphicon-chevron-up arrows'}\"></span></a></h5></dv></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\"><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\"></p><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\">${cost | currency}</p><p></p></div><br><br><br><div id=\"collapseChildCare\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingChildCare\"><div class=\"card-block\"><div class=\"btn-group btn-group-raised\" data-toggle=\"buttons\" click.delegate=\"toggleHorizon()\"><label class=\"btn btn-sm ${isMonthly ? 'btn-primary' : 'btn-secondary'}\">Monthly</label><label class=\"btn btn-sm ${!isMonthly ? 'btn-primary' : 'btn-secondary'}\">Yearly</label></div><div repeat.for=\"constant of constants.childCare\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedChildCareCost()\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/food/food.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingFood\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-food checkbox-inline\"><input id=\"checkbox2\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Food')\"><label for=\"checkbox2\"></label></div><a click.delegate=\"toggle()\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFood\" aria-expanded=\"true\" aria-controls=\"collapseFood\">Food <span class=\"${collapsed ? 'glyphicon glyphicon-chevron-down arrows' : 'glyphicon glyphicon-chevron-up arrows'}\"></span></a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\"><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\">${cost | currency}</p></div></div><br><br><br><div id=\"collapseFood\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFood\"><div class=\"card-block\"><div class=\"btn-group btn-group-raised\" data-toggle=\"buttons\" click.delegate=\"toggleHorizon()\"><label class=\"btn btn-sm ${isMonthly ? 'btn-primary' : 'btn-secondary'}\">Monthly</label><label class=\"btn btn-sm ${!isMonthly ? 'btn-primary' : 'btn-secondary'}\">Yearly</label></div><div repeat.for=\"constant of constants.food\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label for=\"food-input\">${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedFoodCost()\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/housing/housing.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingHousing\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-housing checkbox-inline\"><input id=\"checkbox3\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Housing')\"><label for=\"checkbox3\"></label></div><a click.delegate=\"toggle()\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseHousing\" aria-expanded=\"true\" aria-controls=\"collapseHousing\">Housing <span class=\"${collapsed ? 'glyphicon glyphicon-chevron-down arrows' : 'glyphicon glyphicon-chevron-up arrows'}\"></span></a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\"><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\">${cost | currency}</p></div></div><br><br><br><div id=\"collapseHousing\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingHousing\"><div class=\"card-block\"><div class=\"btn-group btn-group-raised\" data-toggle=\"buttons\" click.delegate=\"toggleHorizon()\"><label class=\"btn btn-sm ${isMonthly ? 'btn-primary' : 'btn-secondary'}\">Monthly</label><label class=\"btn btn-sm ${!isMonthly ? 'btn-primary' : 'btn-secondary'}\">Yearly</label></div><div repeat.for=\"constant of constants.housing\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedCost()\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/medical/medical.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingMedical\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-medical checkbox-inline\"><input id=\"checkbox4\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Medical')\"><label for=\"checkbox4\"></label></div><a click.delegate=\"toggle()\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseMedical\" aria-expanded=\"true\" aria-controls=\"collapseMedical\">Medical <span class=\"${collapsed ? 'glyphicon glyphicon-chevron-down arrows' : 'glyphicon glyphicon-chevron-up arrows'}\"></span></a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\"><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\">${cost | currency}</p></div></div><br><br><br><div id=\"collapseMedical\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingMedical\"><div class=\"card-block\"><div class=\"btn-group btn-group-raised\" data-toggle=\"buttons\" click.delegate=\"toggleHorizon()\"><label class=\"btn btn-sm ${isMonthly ? 'btn-primary' : 'btn-secondary'}\">Monthly</label><label class=\"btn btn-sm ${!isMonthly ? 'btn-primary' : 'btn-secondary'}\">Yearly</label></div><div repeat.for=\"constant of constants.medical\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedMedical()\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/other/other.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOther\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-other checkbox-inline\"><input id=\"checkbox5\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Other')\"><label for=\"checkbox5\"></label></div><a click.delegate=\"toggle()\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOther\" aria-expanded=\"true\" aria-controls=\"collapseOther\">Other <span class=\"${collapsed ? 'glyphicon glyphicon-chevron-down arrows' : 'glyphicon glyphicon-chevron-up arrows'}\"></span></a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\"><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\">${cost | currency}</p></div></div><br><br><br><div id=\"collapseOther\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOther\"><div class=\"card-block\"><div class=\"btn-group btn-group-raised\" data-toggle=\"buttons\" click.delegate=\"toggleHorizon()\"><label class=\"btn btn-sm ${isMonthly ? 'btn-primary' : 'btn-secondary'}\">Monthly</label><label class=\"btn btn-sm ${!isMonthly ? 'btn-primary' : 'btn-secondary'}\">Yearly</label></div><div repeat.for=\"constant of constants.other\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedOtherCost()\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/savings/savings.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingSavings\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-savings checkbox-inline\"><input id=\"checkbox6\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Savings')\"><label for=\"checkbox6\"></label></div><a click.delegate=\"toggle()\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSavings\" aria-expanded=\"true\" aria-controls=\"collapseSavings\">Savings <span class=\"${collapsed ? 'glyphicon glyphicon-chevron-down arrows' : 'glyphicon glyphicon-chevron-up arrows'}\"></span></a></h5></div><div class=\"col-md-4 mb-0\">${costPercentage | percent}</div><div class=\"col-md-4\"><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\">${cost | currency}</p></div></div><br><br><br><div id=\"collapseSavings\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingSavings\"><div class=\"card-block\"><div class=\"btn-group btn-group-raised\" data-toggle=\"buttons\" click.delegate=\"toggleHorizon()\"><label class=\"btn btn-sm ${isMonthly ? 'btn-primary' : 'btn-secondary'}\">Monthly</label><label class=\"btn btn-sm ${!isMonthly ? 'btn-primary' : 'btn-secondary'}\">Yearly</label></div><div repeat.for=\"constant of constants.savings\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedSavings()\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/taxes/taxes.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingTaxes\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox checkbox-taxes checkbox-inline\"><input id=\"checkbox7\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Taxes')\"><label for=\"checkbox7\"></label></div><a click.delegate=\"toggle()\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTaxes\" aria-expanded=\"true\" aria-controls=\"collapseTaxes\">Taxes <span class=\"${collapsed ? 'glyphicon glyphicon-chevron-down arrows' : 'glyphicon glyphicon-chevron-up arrows'}\"></span></a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\"><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\">${cost | currency}</p></div></div><br><br><br><div id=\"collapseTaxes\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTaxes\"><div class=\"card-block\"><div class=\"btn-group btn-group-raised\" data-toggle=\"buttons\" click.delegate=\"toggleHorizon()\"><label class=\"btn btn-sm ${isMonthly ? 'btn-primary' : 'btn-secondary'}\">Monthly</label><label class=\"btn btn-sm ${!isMonthly ? 'btn-primary' : 'btn-secondary'}\">Yearly</label></div><div style=\"padding-bottom:1vh\" class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>Gross Income After Taxes:</label>${grossIncome}</div><div repeat.for=\"constant of constants.taxes\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedTaxCost()\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/transportation/transportation.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingTransportation\"><dv class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-transportation checkbox-inline\"><input id=\"checkbox8\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Transportation')\"><label for=\"checkbox8\"></label></div><a click.delegate=\"toggle()\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTransportation\" aria-expanded=\"true\" aria-controls=\"collapseTransportation\">Transportation <span class=\"${collapsed ? 'glyphicon glyphicon-chevron-down arrows' : 'glyphicon glyphicon-chevron-up arrows'}\"></span></a></h5></dv></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\"><p class=\"${includeInBudget ? 'blackparagraph' : 'grayparagraph'}\">${cost | currency}</p></div><br><br><br><div id=\"collapseTransportation\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTransportation\"><div class=\"card-block\"><div class=\"btn-group btn-group-raised\" data-toggle=\"buttons\" click.delegate=\"toggleHorizon()\"><label class=\"btn btn-sm ${isMonthly ? 'btn-primary' : 'btn-secondary'}\">Monthly</label><label class=\"btn btn-sm ${!isMonthly ? 'btn-primary' : 'btn-secondary'}\">Yearly</label></div><div repeat.for=\"constant of constants.transportation\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedTransportationCost()\"></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map