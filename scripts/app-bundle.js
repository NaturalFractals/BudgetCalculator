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

      this.modules = [{ display: false, path: "budget-breakdown-module/category-modules/child-care" }, { display: false, path: "budget-breakdown-module/category-modules/food" }, { display: false, path: "budget-breakdown-module/category-modules/housing" }, { display: false, path: "budget-breakdown-module/category-modules/medical" }, { display: false, path: "budget-breakdown-module/category-modules/savings" }, { display: false, path: "budget-breakdown-module/category-modules/other" }, { display: false, path: "budget-breakdown-module/category-modules/taxes" }];
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

        this.childCare = [];

        this.food = [{
            'label': 'Groceries'
        }];

        this.housing = [];

        this.medical = [{
            'label': 'Health Insurance'
        }];

        this.other = [];

        this.savings = [];

        this.taxes = [];
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
define('masterBudget',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var MasterBudget = exports.MasterBudget = function MasterBudget() {
        _classCallCheck(this, MasterBudget);

        this.totalMonthlyIncome = 0;
        this.numberChildren = 0;
        this.numberAdults = 0;
        this.foodCost = 0;
        this.otherCost = 0;
    };
});
define('user',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var User = exports.User = function User() {
        _classCallCheck(this, User);

        this.numberChildren = 0;
        this.numberAdults = 0;
        this.foodCost = 0;
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
define('chart/chart',['exports', '../utilities/chartFactory'], function (exports, _chartFactory) {
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

    var Chart = exports.Chart = function () {
        function Chart() {
            _classCallCheck(this, Chart);

            this.chart = null;
        }

        Chart.prototype.attached = function attached() {
            this.chart = _chartFactory.ChartFactory.createChart('chartContainer');
        };

        Chart.prototype.changeChart = function changeChart() {
            var visible = this.chart.series[0].data[0].visible ? false : true;
            this.chart.series[0].data[0].setVisible(visible);
        };

        return Chart;
    }();
});
define('intro/intro',['exports', 'aurelia-framework', 'aurelia-router', 'aurelia-fetch-client'], function (exports, _aureliaFramework, _aureliaRouter, _aureliaFetchClient) {
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

    var Intro = exports.Intro = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router, _aureliaFetchClient.HttpClient), _dec(_class = function () {
        function Intro(router, httpClient) {
            _classCallCheck(this, Intro);

            this.router = router;
            this.httpClient = httpClient;
            this.getLocation();

            this.income = null;
            this.displayIncome = "";
        }

        Intro.prototype.getLocation = function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var self;
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

                                                                            console.log(data2);

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

        Intro.prototype.route = function route() {
            this.router.navigate("#/results");
        };

        Intro.prototype.sanitizeIncome = function sanitizeIncome() {
            this.displayIncome = this.displayIncome.replace(/,/g, "");
            this.displayIncome = this.displayIncome.replace(/\$/g, "");

            this.income = parseInt(this.displayIncome);

            this.displayIncome = '$' + this.income.toLocaleString();
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

        this.arr = [1, 2, 3, 4];
    };
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

        ChartFactory.createChart = function createChart(containerID) {
            return Highcharts.chart(containerID, {
                chart: {
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false,
                    type: 'pie'
                },
                title: {
                    text: 'Browser market shares January, 2015 to May, 2015'
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
                    data: [{
                        name: 'Microsoft Internet Explorer',
                        y: 56.33
                    }, {
                        name: 'Chrome',
                        y: 24.03,
                        sliced: true,
                        selected: true
                    }, {
                        name: 'Firefox',
                        y: 10.38
                    }, {
                        name: 'Safari',
                        y: 4.77
                    }, {
                        name: 'Opera',
                        y: 0.91
                    }, {
                        name: 'Proprietary or Undetectable',
                        y: 0.2
                    }]
                }]
            });
        };

        return ChartFactory;
    }();
});
define('results-banner-module/banner',['exports', 'aurelia-framework', 'masterBudget'], function (exports, _aureliaFramework, _masterBudget) {
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

        return Banner;
    }()) || _class);
});
define('budget-breakdown-module/category-modules/child-care/child-care',['exports', 'aurelia-framework', 'masterBudget', 'constants'], function (exports, _aureliaFramework, _masterBudget, _constants) {
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

    var _dec, _class;

    var ChildCare = exports.ChildCare = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _constants.Constants), _dec(_class = function ChildCare(masterBudget, constants) {
        _classCallCheck(this, ChildCare);

        this.masterBudget = masterBudget;
        this.constants = constants;
    }) || _class);
});
define('budget-breakdown-module/category-modules/food/food',['exports', 'aurelia-framework', 'masterBudget', 'constants'], function (exports, _aureliaFramework, _masterBudget, _constants) {
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

    var _dec, _class;

    var Food = exports.Food = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _constants.Constants), _dec(_class = function () {
        function Food(masterBudget, constants) {
            _classCallCheck(this, Food);

            this.masterBudget = masterBudget;
            this.constants = constants;
        }

        Food.prototype.calculateFoodCost = function calculateFoodCost() {
            this.masterBudget.foodCost = this.masterBudget.numberChildren * 155.70 + this.masterBudget.numberAdults * 158.70;
        };

        Food.prototype.calculateAdvancedFoodCost = function calculateAdvancedFoodCost() {};

        return Food;
    }()) || _class);
});
define('budget-breakdown-module/category-modules/housing/housing',['exports', 'aurelia-framework', 'masterBudget', 'constants'], function (exports, _aureliaFramework, _masterBudget, _constants) {
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

    var _dec, _class;

    var Housing = exports.Housing = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _constants.Constants), _dec(_class = function Housing(masterBudget, constants) {
        _classCallCheck(this, Housing);

        this.masterBudget = masterBudget;
        this.constants = constants;
    }) || _class);
});
define('budget-breakdown-module/category-modules/medical/medical',['exports', 'aurelia-framework', 'masterBudget', 'constants'], function (exports, _aureliaFramework, _masterBudget, _constants) {
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

    var _dec, _class;

    var Medical = exports.Medical = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _constants.Constants), _dec(_class = function Medical(masterBudget, constants) {
        _classCallCheck(this, Medical);

        this.masterBudget = masterBudget;
        this.constants = constants;
    }) || _class);
});
define('budget-breakdown-module/category-modules/other/other',['exports', 'aurelia-framework', 'masterBudget', 'constants'], function (exports, _aureliaFramework, _masterBudget, _constants) {
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

    var _dec, _class;

    var Other = exports.Other = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _constants.Constants), _dec(_class = function () {
        function Other(masterBudget, constants) {
            _classCallCheck(this, Other);

            this.masterBudget = masterBudget;
            this.constants = constants;
        }

        Other.prototype.getBasicOtherCost = function getBasicOtherCost() {
            this.masterBudget.otherCost = this.masterBudget.totalMonthlyIncome * 0.05;
        };

        return Other;
    }()) || _class);
});
define('budget-breakdown-module/category-modules/savings/savings',['exports', 'aurelia-framework', 'masterBudget', 'constants'], function (exports, _aureliaFramework, _masterBudget, _constants) {
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

    var _dec, _class;

    var Savings = exports.Savings = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _constants.Constants), _dec(_class = function Savings(masterBudget, constants) {
        _classCallCheck(this, Savings);

        this.masterBudget = masterBudget;
        this.constants = constants;
    }) || _class);
});
define('budget-breakdown-module/category-modules/taxes/taxes',['exports', 'aurelia-framework', 'masterBudget', 'constants'], function (exports, _aureliaFramework, _masterBudget, _constants) {
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

    var _dec, _class;

    var Taxes = exports.Taxes = (_dec = (0, _aureliaFramework.inject)(_masterBudget.MasterBudget, _constants.Constants), _dec(_class = function Taxes(masterBudget, constants) {
        _classCallCheck(this, Taxes);

        this.masterBudget = masterBudget;
        this.constants = constants;
    }) || _class);
});
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"css/styles.css\"></require><div id=\"app\"><div id=\"content\"><div id=\"intro\"><h1 style=\"font-size:36px;text-align:center\"><b>Budget Planning<b></b></b></h1></div><hr><router-view></router-view></div></div></template>"; });
define('text!css/styles.css', ['module'], function(module) { module.exports = "/* Style for personal info or intro page*/\r\n#personalInfo {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Style for banner module table*/\r\n#banner-table {\r\n    background: #E4E4E4;\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}\r\n\r\n/* Style for radio button lables in banner table*/\r\n#radio-label {\r\n    color: black;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    font-size: 16px;\r\n}\r\n\r\n/* Style for breakdown div*/\r\n#breakdown-div {\r\n    float:right;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Style for chart div*/\r\n#chart-div {\r\n    float:left;\r\n    width: 600px;\r\n    height: 400px;\r\n}\r\n\r\n/* Chart and breakdown table container*/\r\n#results-container {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}\r\n\r\n#collapse-table {\r\n    background: gray;\r\n}\r\n\r\nlabel {\r\n    display: inline-block;\r\n    width: 10em;\r\n    /* other CSS unchanged */\r\n}\r\n"; });
define('text!budget-breakdown-module/breakdown.html', ['module'], function(module) { module.exports = "<template><div id=\"collapse-table\" role=\"tablist\" aria-multiselectable=\"true\"><compose view-model=\"./category-modules/child-care/child-care\"></compose><compose view-model=\"./category-modules/food/food\"></compose><compose view-model=\"./category-modules/housing/housing\"></compose><compose view-model=\"./category-modules/medical/medical\"></compose><compose view-model=\"./category-modules/other/other\"></compose><compose view-model=\"./category-modules/savings/savings\"></compose><compose view-model=\"./category-modules/taxes/taxes\"></compose></div></template>"; });
define('text!chart/chart.html', ['module'], function(module) { module.exports = "<template><require from=\"highcharts/css/highcharts.css\"></require><div id=\"chartContainer\" style=\"height:450px\"></div><button click.delegate=\"changeChart()\">Toggle Hide Something</button></template>"; });
define('text!intro/intro.html', ['module'], function(module) { module.exports = "<template><form id=\"personalInfo\"><div class=\"form-group\"><label for=\"\">Annual Income:</label><input type=\"text\" class=\"form-control\" placeholder=\"50,000\" value.bind=\"displayIncome\" change.delegate=\"sanitizeIncome()\"></div><div class=\"form-group\"><label for=\"\">Location:</label><input type=\"text\" class=\"form-control\"></div><div class=\"radio\"><label>Adults in Household</label><br><label>1<input type=\"radio\" name=\"adultsInHousehold\" model.bind=\"1\" checked.bind=\"numberAdults\"></label><label>2<input type=\"radio\" name=\"adultsInHousehold\" model.bind=\"2\" checked.bind=\"numberAdults\"></label></div><div class=\"radio\"><label>Children in Household</label><br><label class=\"custom-control custom-radio\">1<input class=\"custom-control-input\" type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"1\" checked.bind=\"numberChildren\"></label><label class=\"custom-control custom-radio\">2<input class=\"custom-control-input\" type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"2\" checked.bind=\"numberChildren\"></label><label class=\"custom-control custom-radio\">3<input class=\"custom-control-input\" type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"3\" checked.bind=\"numberChildren\"></label><label class=\"custom-control custom-radio\">4<input class=\"custom-control-input\" type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"4\" checked.bind=\"numberChildren\"></label></div><button id=\"budgetButton\" class=\"btn-success\" click.delegate=\"route()\">Budget</button></form></template>"; });
define('text!results/results.html', ['module'], function(module) { module.exports = "<template><compose view-model=\"results-banner-module/banner\"></compose><div id=\"results-container\" class=\"row\"><div id=\"chart-div\"><compose view-model=\"chart/chart\"></compose></div><div id=\"breakdown-div\"><compose view-model=\"budget-breakdown-module/breakdown\"></compose></div><div></div></div></template>"; });
define('text!results-banner-module/banner.html', ['module'], function(module) { module.exports = "<template><table id=\"banner-table\" class=\"table\"><tr><td><div class=\"form-group\"><label for=\"\">Annual Income:</label><input type=\"text\" class=\"form-control\" placeholder=\"50,000\" value.bind=\"displayIncome\" change.delegate=\"sanitizeIncome()\"></div></td><td><div class=\"form-group\"><label for=\"\">Location:</label><input type=\"text\" class=\"form-control\"></div></td><td><div class=\"radio\"><label id=\"radio-label\">Adults in Household</label><br><label>1<input type=\"radio\" name=\"adultsInHousehold\" model.bind=\"1\" checked.bind=\"masterBudget.numberAdults\"></label><label>2<input type=\"radio\" name=\"adultsInHousehold\" model.bind=\"2\" checked.bind=\"masterBudget.numberAdults\"></label></div></td><td><div class=\"radio\"><label id=\"radio-label\">Children in Household</label><br><label>1<input type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"1\" checked.bind=\"masterBudget.numberChildren\"></label><label>2<input type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"2\" checked.bind=\"masterBudget.numberChildren\"></label><label>3<input type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"3\" checked.bind=\"masterBudget.numberChildren\"></label><label>4<input type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"4\" checked.bind=\"masterBudget.numberChildren\"></label></div></td></tr></table></template>"; });
define('text!budget-breakdown-module/category-modules/child-care/child-care.html', ['module'], function(module) { module.exports = "<template><div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOne\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseChildCare\" aria-expanded=\"true\" aria-controls=\"collapseChildCare\">Child Care</a></h5></div><div id=\"collapseChildCare\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingChildCare\"><div class=\"card-block\"><div repeat.for=\"constant of constants.childCare\" class=\"form-group\"><label>${childCare.label}</label><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><input type=\"text\" value.bind=\"masterBudgent.childCare[constant.value]\" class=\"form-control\"></div></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/housing/housing.html', ['module'], function(module) { module.exports = "<template><div id=\"housingCollapse\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingHousing\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseHousing\" aria-expanded=\"true\" aria-controls=\"collapseHousing\">Housing</a></h5></div><div id=\"collapseHousing\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingHousing\"><div class=\"card-block\"><div repeat.for=\"constant of housing.constants\" class=\"form-group\"><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><input type=\"text\" value.bind=\"masterBudget.housing[constant.value]\"></div></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/food/food.html', ['module'], function(module) { module.exports = "<template><div id=\"foodCollapse\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOne\"><h4 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseFood\" aria-expanded=\"true\" aria-controls=\"collapseFood\">Food</a></h4></div><div id=\"collapseFood\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingFood\"><div class=\"card-block\"><div repeat.for=\"constant of constants.food\" class=\"form-group\"><label>${constant.label}</label><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><input type=\"text\" value.bind=\"masterBudgent.food[constant.value]\" class=\"form-control\"></div></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/medical/medical.html', ['module'], function(module) { module.exports = "<template><div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingMedical\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseMedical\" aria-expanded=\"true\" aria-controls=\"collapseMedical\">Medical</a></h5></div><div id=\"collapseMedical\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingMedical\"><div class=\"card-block\"><div repeat.for=\"constant of constants.medical\" class=\"form-group\"><label>${medical.label}</label><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><input type=\"text\" value.bind=\"masterBudgent.medical[constant.value]\" class=\"form-control\"></div></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/other/other.html', ['module'], function(module) { module.exports = "<template><div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingOther\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseMedical\" aria-expanded=\"true\" aria-controls=\"collapseOther\">Other</a></h5></div><div id=\"collapseOther\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOther\"><div class=\"card-block\"><div repeat.for=\"constant of constants.other\" class=\"form-group\"><label>${other.label}</label><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><input type=\"text\" value.bind=\"masterBudgent.other[constant.value]\" class=\"form-control\"></div></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/savings/savings.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingSavings\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSavings\" aria-expanded=\"true\" aria-controls=\"collapseSavings\">Savings</a></h5></div><div id=\"collapseSavings\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingSavings\"><div class=\"card-block\"><div repeat.for=\"constant of constants.savings\" class=\"form-group\"><label>${savings.label}</label><div class=\"input-group mb-2 mr-sm-2 mb-sm-0\"><input type=\"text\" value.bind=\"masterBudgent.savings[constant.value]\" class=\"form-control\"></div></div></div></div></div></template>"; });
define('text!budget-breakdown-module/category-modules/taxes/taxes.html', ['module'], function(module) { module.exports = "<template><div class=\"card\"><div class=\"card-header\" role=\"tab\" id=\"headingTaxes\"><h5 class=\"mb-0\"><a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTaxes\" aria-expanded=\"true\" aria-controls=\"collapseTaxes\">Taxes</a></h5></div><div id=\"collapseTaxes\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTaxes\"><div class=\"card-block\"></div></div></div></template>"; });
//# sourceMappingURL=app-bundle.js.map