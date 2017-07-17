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
            'label': 'Private School'
        }, {
            'label': 'Daycare'
        }];

        this.food = [{
            'label': 'Groceries'
        }, {
            'label': 'Dining Out'
        }];

        this.housing = [{
            'label': 'Monthly Rent'
        }, {
            'label': 'Home Insurance'
        }, {
            'label': 'Utilities Bill'
        }];

        this.medical = [{
            'label': 'Health Insurance'
        }, {
            'label': 'Dental Work'
        }];

        this.other = [{
            'label': 'Cellphone'
        }, {
            'label': 'Recreation/Travel'
        }, {
            'label': 'Gym Membership'
        }, {
            'label': 'Entertainment'
        }, {
            'label': 'Clothing'
        }];

        this.savings = [{
            'label': 'Emergency Fund'
        }, {
            'label': 'Retirement'
        }, {
            'label': 'Investments'
        }, {
            'label': 'College Savings'
        }];

        this.taxes = [{
            'label': 'Vehicle Taxes'
        }, {
            'label': 'Housing Taxes'
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
define('masterBudget',['exports', 'budget-breakdown-module/category-modules/food/food', 'budget-breakdown-module/category-modules/other/other', 'budget-breakdown-module/category-modules/housing/housing', 'budget-breakdown-module/category-modules/medical/medical', 'budget-breakdown-module/category-modules/taxes/taxes', 'budget-breakdown-module/category-modules/savings/savings', 'budget-breakdown-module/category-modules/child-care/child-care', 'aurelia-framework', 'constants'], function (exports, _food, _other, _housing, _medical, _taxes, _savings, _childCare, _aureliaFramework, _constants) {
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

        var MasterBudget = exports.MasterBudget = (_dec = (0, _aureliaFramework.inject)(_constants.Constants), _dec(_class = function MasterBudget(constants) {
                _classCallCheck(this, MasterBudget);

                this.constants = constants;
                this.location = "";
                this.totalMonthlyIncome = 8000;
                this.numberChildren = 2;
                this.numberAdults = 1;
                this.stateLocation = 'Alabama';

                this.food = new _food.Food(this.numberChildren, this.numberAdults, this.constants);

                this.food.cost = this.food.calculateFoodCost();

                this.other = new _other.Other(this.totalMonthlyIncome, this.constants);

                this.other.cost = this.other.getBasicOtherCost();

                this.housing = new _housing.Housing();

                this.medical = new _medical.Medical();

                this.taxes = new _taxes.Taxes();

                this.savings = new _savings.Savings();

                this.childCare = new _childCare.ChildCare();

                this.carYearlyUpkeepCost = 0;
                this.carMonthlyOwnershipCost = 0;
                this.sumOfAllCost = 0;
                this.budgetCategories = ['Child Care', 'Food', 'Housing', 'Medical', 'Other', 'Savings', 'Taxes'];
                this.percentageByCategory = [];
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
define('chart/chart',['exports', 'aurelia-framework', '../utilities/chartFactory', 'masterBudget'], function (exports, _aureliaFramework, _chartFactory, _masterBudget) {
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

    var Chart = exports.Chart = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget), _dec(_class = function () {
        function Chart(masterBudget) {
            _classCallCheck(this, Chart);

            this.chart = null;
            this.masterBudget = masterBudget;
        }

        Chart.prototype.attached = function attached() {
            console.log(this.masterBudget);
            var tuples = _chartFactory.ChartFactory.createChartTuple(this.masterBudget);
            this.chart = _chartFactory.ChartFactory.createChart('chartContainer', tuples);
        };

        Chart.prototype.changeChart = function changeChart() {
            var visible = this.chart.series[0].data[0].visible ? false : true;
            this.chart.series[0].data[0].setVisible(visible);
        };

        return Chart;
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
            this.displayIncome = "";
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
            this.displayIncome = this.displayIncome.replace(/,/g, "");
            this.displayIncome = this.displayIncome.replace(/\$/g, "");

            this.income = parseInt(this.displayIncome);

            this.displayIncome = '$' + this.income.toLocaleString();
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
define('results/results',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Results = exports.Results = function Results() {
        _classCallCheck(this, Results);
    };
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

        ChartFactory.createChart = function createChart(containerID, tuples) {
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
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[5], masterBudget.taxes.cost, masterBudget));
            var cost = masterBudget.totalMonthlyIncome - masterBudget.sumOfAllCost;
            budgetArray.push(this.tupleHelper(masterBudget.budgetCategories[6], cost, masterBudget));
            return budgetArray;
        };

        ChartFactory.tupleHelper = function tupleHelper(name, data, masterBudget) {
            var tempObject = {};
            tempObject.name = name;
            tempObject.y = data;
            console.log(data);
            masterBudget.sumOfAllCost += data;
            console.log(masterBudget.sumOfAllCost);
            return tempObject;
        };

        return ChartFactory;
    }();
});
define('utilities/moneyValueConverter',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var MoneyValueConverter = exports.MoneyValueConverter = function () {
        function MoneyValueConverter() {
            _classCallCheck(this, MoneyValueConverter);
        }

        MoneyValueConverter.prototype.toView = function toView(value) {
            value = value.replace(/,/g, "");
            return value.toLocaleString();
        };

        return MoneyValueConverter;
    }();
});
define('budget-breakdown-module/category-modules/child-care/child-care',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var ChildCare = exports.ChildCare = function () {
        function ChildCare() {
            _classCallCheck(this, ChildCare);

            this.cost = 0;
        }

        ChildCare.prototype.calculatePrivateSchoolCost = function calculatePrivateSchoolCost(privateSchoolCost) {
            this.cost += privateSchoolCost;
        };

        ChildCare.prototype.calculateDaycareCost = function calculateDaycareCost(daycareCost) {
            this.cost += daycareCost;
        };

        return ChildCare;
    }();
});
define('budget-breakdown-module/category-modules/food/food',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Food = exports.Food = function () {
        function Food(numberChildren, numberAdults, constants) {
            _classCallCheck(this, Food);

            this.numberChildren = numberChildren;
            this.numberAdults = numberAdults;
            this.constants = constants;
            this.cost = 0;
        }

        Food.prototype.calculateFoodCost = function calculateFoodCost() {
            console.log(this.constants);
            return this.numberChildren * this.constants.foodCostPerChild + this.numberAdults * this.constants.foodCostPerAdult;
        };

        Food.prototype.calculateAdvancedFoodCost = function calculateAdvancedFoodCost() {};

        return Food;
    }();
});
define('budget-breakdown-module/category-modules/housing/housing',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Housing = exports.Housing = function Housing() {
        _classCallCheck(this, Housing);

        this.cost = 0;
    };
});
define('budget-breakdown-module/category-modules/other/other',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Other = exports.Other = function () {
        function Other(totalMonthlyIncome, constants) {
            _classCallCheck(this, Other);

            this.totalMonthlyIncome = totalMonthlyIncome;
            this.constants = constants;
            this.cost = 0;
            console.log(this.totalMonthlyIncome);
            console.log(this.cost);
        }

        Other.prototype.getBasicOtherCost = function getBasicOtherCost() {
            return this.totalMonthlyIncome * this.constants.miscellaneousCost;
        };

        return Other;
    }();
});
define('budget-breakdown-module/category-modules/medical/medical',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Medical = exports.Medical = function Medical() {
        _classCallCheck(this, Medical);

        this.cost = 0;
    };
});
define('budget-breakdown-module/category-modules/savings/savings',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Savings = exports.Savings = function () {
        function Savings() {
            _classCallCheck(this, Savings);

            this.cost = 0;
        }

        Savings.prototype.calculateEmergencyFundCost = function calculateEmergencyFundCost(emergencyFund) {
            this.cost += emergencyFund;
        };

        Savings.prototype.calculateRetirementCost = function calculateRetirementCost(retirementCost) {
            this.cost += retirementCost;
        };

        Savings.prototype.calcualteInvestmentsCost = function calcualteInvestmentsCost(investmentCost) {
            this.cost += investmentCost;
        };

        Savings.prototype.calculateCollegeSavingsCost = function calculateCollegeSavingsCost(collegeCost) {
            this.cost += collegeCost;
        };

        return Savings;
    }();
});
define('budget-breakdown-module/category-modules/taxes/taxes',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Taxes = exports.Taxes = function Taxes() {
        _classCallCheck(this, Taxes);

        this.cost = 0;
    };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"css/styles.css\"></require><div id=\"app\"><div id=\"content\"><div id=\"intro\"><h1 style=\"font-size:36px;text-align:center\"><b>Budget Planning<b></b></b></h1></div><hr><router-view></router-view></div></div></template>"; });
define('text!css/styles.css', ['module'], function(module) { module.exports = "/* Style for personal info or intro page*/\r\n#personalInfo {\r\n    width: 50%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Toolbar for number of adult radios*/\r\n#adults-toolbar {\r\n    margin: 0 auto;\r\n    width: 50%;\r\n}\r\n\r\n/* Toolbar for number of children radios*/\r\n#children-toolbar {\r\n    margin: 0 auto;\r\n    width: 60%;\r\n}\r\n\r\n/* Budget button on intro page */\r\n#budgetButton {\r\n    margin: 0 auto;\r\n    width: 50%\r\n}\r\n\r\n/* Style for banner module table*/\r\n#banner-table {\r\n    background: #E4E4E4;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Style for radio button lables in banner table*/\r\n#radio-label {\r\n    color: black;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    font-size: 16px;\r\n}\r\n\r\n/* Style for breakdown div*/\r\n#breakdown-div {\r\n    float:right;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Style for chart div*/\r\n#chart-div {\r\n    float:left;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Chart and breakdown table container*/\r\n#results-container {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}\r\n\r\n#collapse-table {\r\n    background: gray;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    width: 10em;\r\n    /* other CSS unchanged */\r\n}\r\n"; });
define('text!budget-breakdown-module/breakdown.html', ['module'], function(module) { module.exports = "<template><div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div style=\"width:15px;height:15px;background-color:#7cb5ec;display:inline;float:left\"></div><compose view-model=\"./category-modules/child-care/child-care\"></compose><div style=\"width:15px;height:15px;background-color:#434348;display:inline;float:left\"></div><compose view-model=\"./category-modules/food/food\"></compose><div style=\"width:15px;height:15px;background-color:#90ed7d;display:inline;float:left\"></div><compose view-model=\"./category-modules/housing/housing\"></compose><div style=\"width:15px;height:15px;background-color:#f7a35c;display:inline;float:left\"></div><compose view-model=\"./category-modules/medical/medical\"></compose><div style=\"width:15px;height:15px;background-color:#8085e9;display:inline;float:left\"></div><compose view-model=\"./category-modules/other/other\"></compose><div style=\"width:15px;height:15px;background-color:#f15c80;display:inline;float:left\"></div><compose view-model=\"./category-modules/savings/savings\"></compose><div style=\"width:15px;height:15px;background-color:#e4d354;display:inline;float:left\"></div><compose view-model=\"./category-modules/taxes/taxes\"></compose></div></template>"; });
define('text!chart/chart.html', ['module'], function(module) { module.exports = "<template><require from=\"highcharts/css/highcharts.css\"></require><div id=\"chartContainer\" style=\"height:450px\"></div><button click.delegate=\"changeChart()\">Toggle Hide Something</button></template>"; });
define('text!intro/intro.html', ['module'], function(module) { module.exports = "<template><require from=\"../utilities/moneyValueConverter\"></require><form id=\"personalInfo\"><div class=\"form-group\"><label for=\"\">Annual Income:</label><input type=\"text\" class=\"form-control\" placeholder=\"50,000\" value.bind=\"displayIncome\" change.delegate=\"sanitizeIncome() getMonthlyIncome()\"></div><div class=\"form-group\"><label for=\"\">Location:</label><input type=\"text\" class=\"form-control\" value.bind=\"masterBudget.location\"></div><div class=\"btn-toolbar\" role=\"toolbar\" id=\"adults-toolbar\"><b>Adults in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label repeat.for=\"i of 2\" class=\"btn btn-primary active\" click.delegate=\"test1()\"><input type=\"radio\" checked.bind=\"masterBudget.numberAdults\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div><br><div class=\"btn-toolbar\" role=\"toolbar\" id=\"children-toolbar\"><b>Children in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label repeat.for=\"i of 4\" class=\"btn btn-primary active\" click.delegate=\"test()\"><input type=\"radio\" checked.bind=\"masterBudget.numberChildren\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div><br><div id=\"budgetButton\"><button class=\"btn btn-success\" click.delegate=\"route()\">Budget</button></div></form></template>"; });
define('text!results/results.html', ['module'], function(module) { module.exports = "<template><compose view-model=\"results-banner-module/banner\"></compose><div id=\"results-container\" class=\"row\"><div id=\"chart-div\"><compose view-model=\"chart/chart\"></compose></div><div id=\"breakdown-div\"><compose view-model=\"budget-breakdown-module/breakdown\"></compose></div><div></div></div></template>"; });
define('text!results-banner-module/banner.html', ['module'], function(module) { module.exports = "<template><table id=\"banner-table\" class=\"table\"><tr><td><div class=\"form-group\"><label for=\"\">Annual Income:</label><input type=\"text\" class=\"form-control\" placeholder=\"50,000\" value.bind=\"displayIncome\" change.delegate=\"sanitizeIncome() getMonthlyIncome()\"></div></td><td><div class=\"form-group\"><label for=\"\">Location:</label><input type=\"text\" value.bind=\"masterBudget.location\" class=\"form-control\"></div></td><td><div class=\"btn-toolbar\" role=\"toolbar\"><b>Adults in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label repeat.for=\"i of 2\" class=\"btn btn-primary active\" click.delegate=\"test1()\"><input type=\"radio\" checked.bind=\"masterBudget.numberAdults\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div></td><td><div class=\"btn-toolbar\" role=\"toolbar\"><b>Children in Household</b><div class=\"radio-group\" data-toggle=\"buttons\"><label repeat.for=\"i of 4\" class=\"btn btn-primary active\" click.delegate=\"test()\"><input type=\"radio\" checked.bind=\"masterBudget.numberChildren\" value.bind=\"i + 1\" name=\"options\"> ${i + 1}</label></div></div></td></tr></table></template>"; });
define('text!budget-breakdown-module/category-modules/child-care/child-care.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOne\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseChildCare\" aria-expanded=\"true\" aria-controls=\"collapseChildCare\">Child Care</a></h5></div><div id=\"collapseChildCare\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingChildCare\"><div class=\"card-block\"><div repeat.for=\"constant of constants.childCare\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"text\" value.bind=\"masterBudget.childCare[constant.value]\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/food/food.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingFood\"><h4 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFood\" aria-expanded=\"true\" aria-controls=\"collapseFood\">Food</a></h4></div><div id=\"collapseFood\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFood\"><div class=\"card-block\"><div repeat.for=\"constant of constants.food\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label for=\"food-input\">${constant.label}</label><input id=\"food-input\" type=\"text\" value.bind=\"masterBudgent.food[constant.value]\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/housing/housing.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingHousing\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseHousing\" aria-expanded=\"true\" aria-controls=\"collapseHousing\">Housing</a></h5></div><div id=\"collapseHousing\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingHousing\"><div class=\"card-block\"><div repeat.for=\"constant of constants.housing\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"text\" value.bind=\"masterBudget.housing[constant.value]\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/medical/medical.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingMedical\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseMedical\" aria-expanded=\"true\" aria-controls=\"collapseMedical\">Medical</a></h5></div><div id=\"collapseMedical\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingMedical\"><div class=\"card-block\"><div repeat.for=\"constant of constants.medical\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"text\" value.bind=\"masterBudgent.medical[constant.value]\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/other/other.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOther\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseMedical\" aria-expanded=\"true\" aria-controls=\"collapseOther\">Other</a></h5></div><div id=\"collapseOther\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOther\"><div class=\"card-block\"><div repeat.for=\"constant of constants.other\" class=\"form-group\"><label>${constant.label}</label><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><input type=\"text\" value.bind=\"masterBudgent.other[constant.value]\" class=\"form-control\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/taxes/taxes.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingTaxes\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTaxes\" aria-expanded=\"true\" aria-controls=\"collapseTaxes\">Taxes</a></h5></div><div id=\"collapseTaxes\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTaxes\"><div class=\"card-block\"><div repeat.for=\"constant of constants.taxes\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"text\" value.bind=\"masterBudgent.taxes[constant.value]\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/savings/savings.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingSavings\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSavings\" aria-expanded=\"true\" aria-controls=\"collapseSavings\">Savings</a></h5></div><div id=\"collapseSavings\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingSavings\"><div class=\"card-block\"><div repeat.for=\"constant of constants.savings\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><label>${constant.label}</label><input type=\"text\" value.bind=\"masterBudgent.savings[constant.value]\"></div></div></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map