define('app',['exports', 'aurelia-framework', 'jquery', 'bootstrap'], function (exports, _aureliaFramework, _jquery) {
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
            'variable': 'monthlyRentCost'
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
            'label': 'Car',
            'variable': 'hasCar'
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
            'variable': 'vehicleTaxCost'
        }, {
            'label': 'Filing Status',
            'variable': 'filingStatus'
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

        var MasterBudget = exports.MasterBudget = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _food.Food, _other.Other, _housing.Housing, _medical.Medical, _taxes.Taxes, _savings.Savings, _childCare.ChildCare, _transportation.Transportation), _dec(_class = function MasterBudget(constants, food, other, housing, medical, taxes, savings, childCare, transportation) {
                _classCallCheck(this, MasterBudget);

                this.constants = constants;
                this.location = "";
                this.annualIncome = 0;
                this.totalMonthlyIncome = 8000;
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

                this.carYearlyUpkeepCost = 0;
                this.carMonthlyOwnershipCost = 0;
                this.sumOfAllCost = 0;
                this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes', 'Transportation'];
                this.percentageByCategory = [];

                this.chart = null;
        }) || _class);
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
define('goals/goals',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Goals = exports.Goals = function Goals() {
        _classCallCheck(this, Goals);
    };
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
                var self, childCare, childCareData, carCost, carCostData, homeInsurance, homeInsuranceData, healthInsurance, healthInsuranceData;
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
                                                            var data, data2;
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

                                                                        case 8:
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
                                        self.masterBudget.carYearlyUpkeepCost = stateData[4];
                                    }
                                });

                                carCostData.costByAge.forEach(function (ageData) {
                                    if (ageData[0] >= self.masterBudget.currentUserAge) {
                                        self.masterBudget.carMonthlyOwnershipCost = ageData[2];
                                    }
                                });

                                _context3.next = 22;
                                return this.httpClient.fetch('/api/home-insurance/get.json');

                            case 22:
                                homeInsurance = _context3.sent;
                                _context3.next = 25;
                                return homeInsurance.json();

                            case 25:
                                homeInsuranceData = _context3.sent;

                                homeInsuranceData.costByState.forEach(function (homeData) {
                                    if (homeData[0] == self.masterBudget.stateLocation) {
                                        self.masterBudget.housing.cost = homeData[1];
                                    }
                                });

                                _context3.next = 29;
                                return this.httpClient.fetch('api/healthcare-insurance/get.json');

                            case 29:
                                healthInsurance = _context3.sent;
                                _context3.next = 32;
                                return healthInsurance.json();

                            case 32:
                                healthInsuranceData = _context3.sent;

                                healthInsuranceData.costByState.forEach(function (healthData) {
                                    if (healthData[0] == self.masterBudget.stateLocation) {
                                        self.masterBudget.medical.cost = healthData[2];
                                    }
                                });

                            case 34:
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

        Intro.prototype.test = function test() {
            console.log(this.masterBudget.numberChildren);
        };

        Intro.prototype.test1 = function test1() {
            console.log(this.masterBudget.numberAdults);
        };

        Intro.prototype.sanitizeIncome = function sanitizeIncome() {
            this.masterBudget.annualIncome = this.masterBudget.annualIncome.replace(/,/g, "");
            this.masterBudget.annualIncome = this.masterBudget.annualIncome.replace(/\$/g, "");

            this.income = parseInt(this.masterBudget.annualIncome);

            this.masterBudget.annualIncome = '$' + this.income.toLocaleString();
        };

        Intro.prototype.getMonthlyIncome = function getMonthlyIncome() {
            var income = parseInt(this.displayIncome);
            this.masterBudget.totalMonthlyIncome = income / 12;
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
            console.log(this.masterBudget.totalMonthlyIncome);
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
                    data: [['Bananas', 8], ['Kiwi', 3], ['Mixed nuts', 1], ['Oranges', 6], ['Apples', 8], ['Pears', 4], ['Clementines', 4], ['Reddish (bag)', 1], ['Grapes (bunch)', 1]]
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
        };

        ChartFactory.tupleHelper = function tupleHelper(name, data, masterBudget) {
            var tempObject = {};
            tempObject.name = name;
            tempObject.y = data;
            masterBudget.sumOfAllCost += data;
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
            this.diningOutCost = 0;
            this.eventAggregator = eventAggregator;
        }

        Food.prototype.calculateFoodCost = function calculateFoodCost(numberChildren, numberAdults) {
            this.numberChildren = numberChildren;
            this.numberAdults = numberAdults;
            this.cost = parseInt(numberChildren) * parseInt(this.constants.foodCostPerChild) + parseInt(numberAdults) * parseInt(this.constants.foodCostPerAdult);
        };

        Food.prototype.calculateAdvancedFoodCost = function calculateAdvancedFoodCost() {
            this.cost = parseInt(this.groceriesCost) + parseInt(this.diningOutCost);
        };

        return Food;
    }()) || _class) || _class);
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
            this.daycareCost = 0;
            this.eventAggregator = eventAggregator;
        }

        ChildCare.prototype.calculateAdvancedChildCareCost = function calculateAdvancedChildCareCost() {
            this.cost = parseInt(this.privateSchoolCost) + parseInt(this.daycareCost);
        };

        return ChildCare;
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
            this.monthlyRentCost = 0;
            this.homeInsuranceCost = 0;
            this.utilitiesCost = 0;
            this.eventAggregator = eventAggregator;
        }

        Housing.prototype.calculateAdvancedCost = function calculateAdvancedCost() {
            this.cost = parseInt(this.monthlyRentCost) + parseInt(this.homeInsuranceCost) + parseInt(this.utilitiesCost);
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
            this.dentalCost = 0;
            this.eventAggregator = eventAggregator;
        }

        Medical.prototype.calculateAdvancedMedical = function calculateAdvancedMedical() {
            this.cost = parseInt(this.dentalCost) + parseInt(this.healthInsuranceCost);
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
            this.eventAggregator = eventAggregator;
        }

        Other.prototype.getBasicOtherCost = function getBasicOtherCost() {
            this.cost = this.totalMonthlyIncome * this.constants.miscellaneousCost;
        };

        Other.prototype.calculateAdvancedOtherCost = function calculateAdvancedOtherCost() {
            this.cost = parseInt(this.cellPhoneCost) + parseInt(this.recreationCost) + parseInt(this.gymCost) + parseInt(this.entertainmentCost) + parseInt(this.clothingCost);
        };

        return Other;
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
            this.eventAggregator = eventAggregator;
        }

        Savings.prototype.calculateAdvancedSavings = function calculateAdvancedSavings() {
            this.cost = parseInt(this.emergencyFundCost) + parseInt(this.retirementCost) + parseInt(this.investmentsCost) + parseInt(this.collegeSavingsCost);
        };

        return Savings;
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
            this.costPercentage = 0;
            this.vehicleTaxCost = 0;
            this.housingTaxCost = 0;
            this.eventAggregator = eventAggregator;
        }

        Taxes.prototype.calculateAdvancedTaxCost = function calculateAdvancedTaxCost() {
            this.cost = parseInt(this.vehicleTaxCost) + parseInt(this.housingTaxCost);
        };

        return Taxes;
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

    var Transportation = exports.Transportation = (_dec = (0, _aureliaFramework.inject)(_constants.Constants, _aureliaEventAggregator.EventAggregator), _dec2 = (0, _aureliaFramework.singleton)(), _dec(_class = _dec2(_class = function Transportation(constants, eventAggregator) {
        _classCallCheck(this, Transportation);

        this.includeInBudget = true;
        this.constants = constants;
        this.cost = 0;
        this.costPercentage = 0;
        this.eventAggregator = eventAggregator;
    }) || _class) || _class);
});
define('chart/donut-chart',['exports', 'aurelia-framework', '../utilities/chartFactory', 'masterBudget', 'aurelia-event-aggregator'], function (exports, _aureliaFramework, _chartFactory, _masterBudget, _aureliaEventAggregator) {
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
            this.years = [2017, 2018, 2019, 2020, 2021];
            eventAggregator.subscribe('toggle element', function (moduleName) {
                _this.changeChart(moduleName);
            });
            eventAggregator.subscribe('update', function (update) {
                _this.changedCost(update.name, update.value);
            });
        }

        Chart.prototype.attached = function attached() {
            var tuples = _chartFactory.ChartFactory.createChartTuple(this.masterBudget);
            this.chart = _chartFactory.ChartFactory.createDonutChart('goalsChartContainer', tuples);
            this.masterBudget.chart = this.chart;
        };

        Chart.prototype.drawChartForYear = function drawChartForYear(year) {};

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
define('five-year/donut-details',['exports'], function (exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var DonutDetails = exports.DonutDetails = function DonutDetails() {
        _classCallCheck(this, DonutDetails);

        this.currentYear = 2017;
        this.currentExpense = '$5,463';
        this.currentExpenseYearCost = 324;
    };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"css/styles.css\"></require><div id=\"app\"><div id=\"content\"><div id=\"intro\"><h1 style=\"font-size:36px;text-align:center\"><b>Budget Planning<b></b></b></h1></div><hr><router-view></router-view></div></div></template>"; });
define('text!css/styles.css', ['module'], function(module) { module.exports = "/* Style for personal info or intro page*/\r\n#personalInfo {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Style for Five Year Results Container*/\r\n#five-year-module-container {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Toolbar for number of adult radios*/\r\n#adults-toolbar {\r\n    margin: 0 auto;\r\n    width: 50%;\r\n}\r\n\r\n/* Goals monthly or yearly toggle*/\r\n#amount-toggle {\r\n    margin-top: 80px;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n/* Container for goals donut chart*/\r\n#goals-chart-div {\r\n    float:left;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Container for goals donut chart details (to the right of chart)*/\r\n#donut-details {\r\n    float:right;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Container for the donut details.*/\r\n#donut-details-div {\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n    margin-top: 60px;\r\n}\r\n\r\n/* Navigation bar above donut chart*/\r\n#navbar-years {\r\n      background:  #e1f5fe;\r\n    margin-right: 21px;\r\n    margin-left: 30px;\r\n}\r\n\r\n/* Style for goals templage*/\r\n#goal-template {\r\n    width: 30%;\r\n    margin: 0 auto;\r\n    margin-top: 100px;\r\n}\r\n\r\n/*Intro page tempalte styles*/\r\n#intro-template {\r\n    background: url('src/css/roadmap.jpg');\r\n    padding-bottom: 800px;\r\n    padding-top: 50px;\r\n}\r\n\r\n/* Toolbar for number of children radios*/\r\n#children-toolbar {\r\n    margin: 0 auto;\r\n    width: 60%;\r\n}\r\n\r\n/* Budget button on intro page */\r\n#budgetButton {\r\n    margin: 0 auto;\r\n    width: 50%\r\n}\r\n\r\n/* Style for banner module table*/\r\n#banner-table {\r\n    background: #E4E4E4;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n    margin-bottom: 50px;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Style for radio button lables in banner table*/\r\n#radio-label {\r\n    color: black;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    font-size: 16px;\r\n}\r\n\r\n/* Style for the accordian breakdown*/\r\n#accordion {\r\n    background: #e1f5fe;\r\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n    margin-top: 60px;\r\n}\r\n\r\n/* Chart container styles*/\r\n#chartContainer {\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n  margin-top: 60px;\r\n}\r\n\r\n/* Chart container styles*/\r\n#goalsChartContainer {\r\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);\r\n}\r\n\r\n/*  Style for collapse area*/\r\n.collapse {\r\n  background: #b9f0ae;\r\n}\r\n\r\n/* Style for input-group in collapse*/\r\n.input-group {\r\n  margin-left: 5%;\r\n}\r\n\r\n/* Style for breakdown div*/\r\n#breakdown-div {\r\n    float:right;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Style for chart div*/\r\n#chart-div {\r\n    float:left;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Style for button div*/\r\n#button-div {\r\n    clear:both;\r\n    padding: 200px;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Chart and breakdown table container*/\r\n#results-container {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}\r\n\r\n#collapse-table {\r\n    background: gray;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    width: 10em;\r\n    /* other CSS unchanged */\r\n}\r\n\r\n/* Checkbox garbage */\r\n.checkbox {\r\n  padding-left: 20px; }\r\n  .checkbox label {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 5px;\r\n    width: 1px; }\r\n    .checkbox label::before {\r\n      content: \"\";\r\n      display: inline-block;\r\n      position: absolute;\r\n      width: 17px;\r\n      height: 17px;\r\n      left: 0;\r\n      margin-left: -20px;\r\n      border: 1px solid #cccccc;\r\n      border-radius: 3px;\r\n      background-color: #fff;\r\n      -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n      -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n      transition: border 0.15s ease-in-out, color 0.15s ease-in-out; }\r\n    .checkbox label::after {\r\n      display: inline-block;\r\n      position: absolute;\r\n      width: 16px;\r\n      height: 16px;\r\n      left: 0;\r\n      top: 0;\r\n      margin-left: -20px;\r\n      padding-left: 3px;\r\n      padding-top: 1px;\r\n      font-size: 11px;\r\n      color: #555555; }\r\n  .checkbox input[type=\"checkbox\"] {\r\n    opacity: 0; }\r\n    .checkbox input[type=\"checkbox\"]:focus + label::before {\r\n      outline: thin dotted;\r\n      outline: 5px auto -webkit-focus-ring-color;\r\n      outline-offset: -2px; }\r\n    .checkbox input[type=\"checkbox\"]:checked + label::after {\r\n      font-family: 'FontAwesome';\r\n      content: \"\\f00c\"; \r\n      padding-top: 3px;}\r\n    .checkbox input[type=\"checkbox\"]:disabled + label {\r\n      opacity: 0.65; }\r\n      .checkbox input[type=\"checkbox\"]:disabled + label::before {\r\n        background-color: #eeeeee;\r\n        cursor: not-allowed; }\r\n  .checkbox.checkbox-circle label::before {\r\n    border-radius: 50%; }\r\n  .checkbox.checkbox-inline {\r\n    margin-top: 0; }\r\n\r\n.checkbox-child-care input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #7cb5ec;\r\n  border-color: #7cb5ec; }\r\n.checkbox-child-care input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-food input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #434348;\r\n  border-color: #434348; }\r\n.checkbox-food input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-housing input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #90ED7D;\r\n  border-color: #90ed7d; }\r\n.checkbox-housing input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-medical input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #f7a35c;\r\n  border-color: #f7a35c; }\r\n.checkbox-medical input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-other input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #8085e9;\r\n  border-color: #8085e9; }\r\n.checkbox-other input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-savings input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #f15c80;\r\n  border-color: #f15c80; }\r\n.checkbox-savings input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-taxes input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #e4d354;\r\n  border-color: #e4d354; }\r\n.checkbox-taxes input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-transportation input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #2b908f;\r\n  border-color: #2b908f; }\r\n.checkbox-transportation input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n\r\n  /*.checkbox {\r\n  padding-left: 20px; }\r\n  .checkbox label {\r\n    display: inline-block;\r\n    position: relative;\r\n    padding-left: 5px; }\r\n    .checkbox label::before {\r\n      content: \"\";\r\n      display: inline-block;\r\n      position: absolute;\r\n      width: 17px;\r\n      height: 17px;\r\n      left: 0;\r\n      margin-left: -20px;\r\n      border: 1px solid #cccccc;\r\n      border-radius: 3px;\r\n      background-color: #fff;\r\n      -webkit-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n      -o-transition: border 0.15s ease-in-out, color 0.15s ease-in-out;\r\n      transition: border 0.15s ease-in-out, color 0.15s ease-in-out; }\r\n    .checkbox label::after {\r\n      display: inline-block;\r\n      position: absolute;\r\n      width: 16px;\r\n      height: 16px;\r\n      left: 0;\r\n      top: 0;\r\n      margin-left: -20px;\r\n      padding-left: 3px;\r\n      padding-top: 1px;\r\n      font-size: 11px;\r\n      color: #555555; }\r\n  .checkbox input[type=\"checkbox\"] {\r\n    opacity: 0; }\r\n    .checkbox input[type=\"checkbox\"]:focus + label::before {\r\n      outline: thin dotted;\r\n      outline: 5px auto -webkit-focus-ring-color;\r\n      outline-offset: -2px; }\r\n    .checkbox input[type=\"checkbox\"]:checked + label::after {\r\n      font-family: 'FontAwesome';\r\n      content: \"\\f00c\"; }\r\n    .checkbox input[type=\"checkbox\"]:disabled + label {\r\n      opacity: 0.65; }\r\n      .checkbox input[type=\"checkbox\"]:disabled + label::before {\r\n        background-color: #eeeeee;\r\n        cursor: not-allowed; }\r\n  .checkbox.checkbox-circle label::before {\r\n    border-radius: 50%; }\r\n  .checkbox.checkbox-inline {\r\n    margin-top: 0; }\r\n\r\n.checkbox-primary input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #428bca;\r\n  border-color: #428bca; }\r\n.checkbox-primary input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-danger input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #d9534f;\r\n  border-color: #d9534f; }\r\n.checkbox-danger input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-info input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #5bc0de;\r\n  border-color: #5bc0de; }\r\n.checkbox-info input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-warning input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #f0ad4e;\r\n  border-color: #f0ad4e; }\r\n.checkbox-warning input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }\r\n\r\n.checkbox-success input[type=\"checkbox\"]:checked + label::before {\r\n  background-color: #5cb85c;\r\n  border-color: #5cb85c; }\r\n.checkbox-success input[type=\"checkbox\"]:checked + label::after {\r\n  color: #fff; }*/\r\n"; });
define('text!budget-breakdown-module/breakdown.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css\"><div id=\"accordion\" class=\"row\" role=\"tablist\" aria-multiselectable=\"true\"><compose view-model=\"./category-modules/child-care/child-care\"></compose><compose view-model=\"./category-modules/food/food\"></compose><compose view-model=\"./category-modules/housing/housing\"></compose><compose view-model=\"./category-modules/medical/medical\"></compose><compose view-model=\"./category-modules/other/other\"></compose><compose view-model=\"./category-modules/savings/savings\"></compose><compose view-model=\"./category-modules/taxes/taxes\"></compose><compose view-model=\"./category-modules/transportation/transportation\"></compose></div></template>"; });
define('text!chart/chart.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><require from=\"highcharts/css/highcharts.css\"></require><div id=\"chartContainer\" style=\"height:500px\"></div></template>"; });
define('text!five-year/five-year.html', ['module'], function(module) { module.exports = "<template><div id=\"five-year-module-container\"><div id=\"goals-chart-div\"><compose view-model=\"chart/donut-chart\" view-model.ref=\"chartVM\"></compose></div><div id=\"donut-details\"><compose view-model=\"./donut-details\"></compose></div></div></template>"; });
define('text!goals/goals.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><div id=\"goal-template\"><div><h2>How much will you need to reach your Goal?</h2><h4>Start with a goal to help your realize the savings needed to reach this goal</h4></div><div id=\"dropdown-select\"><select name=\"goal-dropdown\"><option value=\"\">Buy a House</option><option value=\"\">Pay of Debt</option><option value=\"\">Save for Retirement</option><option value=\"\">Buy a Car</option><option value=\"\">Vacation</option><option value=\"\">Home Improvements</option><option value=\"\">Save for Emergency</option><option value=\"\">Gifts</option></select></div><div id=\"amount-toggle\" class=\"btn-group\" data-toggle=\"buttons\"><label class=\"btn-primary\"><input type=\"radio\">Enter in Total Amount</label><label class=\"btn-primary\"><input type=\"radio\">Enter in Monthly Amount</label></div><div><input type=\"number\"></div><div id=\"text-output\"><h4><b>To Reach Your Goal:</b> Spend ${goalCostPerMonth} less each month</h4></div></div></template>"; });
define('text!intro/intro.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><div id=\"intro-template\"><form id=\"personalInfo\"><div class=\"form-group\"><label for=\"\">Annual Income:</label><input type=\"text\" class=\"form-control\" placeholder=\"50,000\" value.bind=\"masterBudget.annualIncome\" change.delegate=\"sanitizeIncome() getMonthlyIncome()\"></div><div class=\"form-group\"><label for=\"\">Location:</label><input type=\"text\" class=\"form-control\" value.bind=\"masterBudget.location\"></div><div class=\"btn-toolbar\" role=\"toolbar\" id=\"adults-toolbar\"><b>Adults in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label repeat.for=\"i of 2\" class=\"btn btn-primary active\" click.delegate=\"test1()\"><input type=\"radio\" checked.bind=\"masterBudget.numberAdults\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div><br><div class=\"btn-toolbar\" role=\"toolbar\" id=\"children-toolbar\"><b>Children in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label repeat.for=\"i of 4\" class=\"btn btn-primary active\" click.delegate=\"test()\"><input type=\"radio\" checked.bind=\"masterBudget.numberChildren\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div><br><div id=\"budgetButton\"><button class=\"btn btn-success\" click.delegate=\"route()\">Budget</button></div></form></div></template>"; });
define('text!results/results.html', ['module'], function(module) { module.exports = "<template><compose view-model=\"results-banner-module/banner\"></compose><div id=\"results-container\" class=\"row\"><div id=\"chart-div\"><compose view-model=\"chart/chart\" view-model.ref=\"chartVM\"></compose></div><div id=\"breakdown-div\"><compose view-model=\"budget-breakdown-module/breakdown\"></compose></div><div id=\"button-div\"><button class=\"btn btn-primary\" click.delegate=\"routeGoals()\">Goals</button> <button class=\"btn btn-primary\" click.delegate=\"routeFiveYearPlan()\">Five Year Plan</button></div><div></div></div></template>"; });
define('text!results-banner-module/banner.html', ['module'], function(module) { module.exports = "<template><table id=\"banner-table\" class=\"table\"><tr><td><div class=\"form-group\"><label for=\"\">Annual Income:</label><input type=\"text\" class=\"form-control\" placeholder=\"50,000\" value.bind=\"masterBudget.annualIncome\" change.delegate=\"sanitizeIncome() getMonthlyIncome()\"></div></td><td><div class=\"form-group\"><label for=\"\">Location:</label><input type=\"text\" value.bind=\"masterBudget.location\" class=\"form-control\"></div></td><td><div class=\"btn-toolbar\" role=\"toolbar\"><b>Adults in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label repeat.for=\"i of 2\" class=\"btn btn-primary active\"><input type=\"radio\" checked.bind=\"masterBudget.numberAdults\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div></td><td><div class=\"btn-toolbar\" role=\"toolbar\"><b>Children in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label repeat.for=\"i of 4\" class=\"btn btn-primary active\"><input type=\"radio\" checked.bind=\"masterBudget.numberChildren\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div></td></tr></table></template>"; });
define('text!budget-breakdown-module/category-modules/child-care/child-care.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOne\"><dv class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-child-care checkbox-inline\"><input id=\"checkbox1\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Child Care')\"><label for=\"checkbox1\"></label></div><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseChildCare\" aria-expanded=\"true\" aria-controls=\"collapseChildCare\">Child Care</a></h5></dv></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\">${cost | currency}</div></div><br><br><br><div id=\"collapseChildCare\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingChildCare\"><div class=\"card-block\"><div repeat.for=\"constant of constants.childCare\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedChildCareCost() eventAggregator.publish('update', {name: 'Child Care', value: cost})\"></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/food/food.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingFood\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-food checkbox-inline\"><input id=\"checkbox2\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Food')\"><label for=\"checkbox2\"></label></div><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFood\" aria-expanded=\"true\" aria-controls=\"collapseFood\">Food</a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\">${cost | currency}</div></div><br><br><br><div id=\"collapseFood\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFood\"><div class=\"card-block\"><div repeat.for=\"constant of constants.food\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label for=\"food-input\">${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedFoodCost() eventAggregator.publish('update', {name: 'Food', value: cost})\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/housing/housing.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingHousing\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-housing checkbox-inline\"><input id=\"checkbox3\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Housing')\"><label for=\"checkbox3\"></label></div><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseHousing\" aria-expanded=\"true\" aria-controls=\"collapseHousing\">Housing</a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\">${cost | currency}</div></div><br><br><br><div id=\"collapseHousing\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingHousing\"><div class=\"card-block\"><div repeat.for=\"constant of constants.housing\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedCost() eventAggregator.publish('update', {name: 'Housing', value: cost})\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/other/other.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOther\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-other checkbox-inline\"><input id=\"checkbox5\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Other')\"><label for=\"checkbox5\"></label></div><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOther\" aria-expanded=\"true\" aria-controls=\"collapseOther\">Other</a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\">${cost | currency}</div></div><br><br><br><div id=\"collapseOther\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOther\"><div class=\"card-block\"><div repeat.for=\"constant of constants.other\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedOtherCost() eventAggregator.publish('update', {name: 'Other', value: cost})\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/medical/medical.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingMedical\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-medical checkbox-inline\"><input id=\"checkbox4\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Medical')\"><label for=\"checkbox4\"></label></div><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseMedical\" aria-expanded=\"true\" aria-controls=\"collapseMedical\">Medical</a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\">${cost | currency}</div></div><br><br><br><div id=\"collapseMedical\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingMedical\"><div class=\"card-block\"><div repeat.for=\"constant of constants.medical\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedMedical() eventAggregator.publish('update', {name: 'Medical', value: cost})\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/savings/savings.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingSavings\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-savings checkbox-inline\"><input id=\"checkbox6\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Savings')\"><label for=\"checkbox6\"></label></div><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSavings\" aria-expanded=\"true\" aria-controls=\"collapseSavings\">Savings</a></h5></div><div class=\"col-md-4 mb-0\">${costPercentage | percent}</div><div class=\"col-md-4\">${cost | currency}</div></div><br><br><br><div id=\"collapseSavings\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingSavings\"><div class=\"card-block\"><div repeat.for=\"constant of constants.savings\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedSavings() eventAggregator.publish('update', {name: 'Savings', value: cost})\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/taxes/taxes.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingTaxes\"><div class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox checkbox-taxes checkbox-inline\"><input id=\"checkbox7\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Taxes')\"><label for=\"checkbox7\"></label></div><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTaxes\" aria-expanded=\"true\" aria-controls=\"collapseTaxes\">Taxes</a></h5></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\">${cost | currency}</div></div><br><br><br><div id=\"collapseTaxes\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTaxes\"><div class=\"card-block\"><div repeat.for=\"constant of constants.taxes\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedTaxCost() eventAggregator.publish('update', {name: 'Taxes', value: cost})\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/transportation/transportation.html', ['module'], function(module) { module.exports = "<template><require from=\"../../../utilities/currency\"></require><require from=\"../../../utilities/percent\"></require><link rel=\"stylesheet\" href=\"//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.min.css\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingTransportation\"><dv class=\"col-md-4\"><h5 class=\"mb-0\"><div class=\"checkbox checkbox-transportation checkbox-inline\"><input id=\"checkbox8\" type=\"checkbox\" checked.bind=\"includeInBudget\" change.delegate=\"eventAggregator.publish('toggle element', 'Transportation')\"><label for=\"checkbox8\"></label></div><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTransportation\" aria-expanded=\"true\" aria-controls=\"collapseTransportation\">Transportation</a></h5></dv></div><div class=\"col-md-4\">${costPercentage | percent}</div><div class=\"col-md-4\">${cost | currency}</div></div><br><br><br><div id=\"collapseTransportation\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTransportation\"><div class=\"card-block\"><div repeat.for=\"constant of constants.transportation\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"number\" value.bind=\"$parent[constant.variable]\" change.delegate=\"calculateAdvancedTransportation() eventAggregator.publish('update', {name: 'Transportation', value: cost})\"></div></div></div></div></template>"; });
define('text!chart/donut-chart.html', ['module'], function(module) { module.exports = "<template><require from=\"css/styles.css\"></require><link rel=\"stylesheet\" type=\"text/css\" href=\"dist/css/bootstrap-material-design.css\"><link rel=\"stylesheet\" type=\"text/css\" href=\"dist/css/ripples.min.css\"><require from=\"highcharts/css/highcharts.css\"></require><nav class=\"navbar navbar-light teal\"><div class=\"container-fluid\"><ul repeat.for=\"year of years\" class=\"nav navbar-nav\"><li><a click.delegate=\"drawChartForYear({year})\">${year}</a></li></ul></div><div id=\"goalsChartContainer\" style=\"height:500px\"></div></nav></template>"; });
define('text!five-year/donut-details.html', ['module'], function(module) { module.exports = "<template><div id=\"donut-details-div\"><h4>Your monthly ${currentExpense} for ${currentYear} is ${currentExpenseYearCost}</h4></div></template>"; });
//# sourceMappingURL=app-bundle.js.map