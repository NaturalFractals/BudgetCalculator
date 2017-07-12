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

  var _dec, _class;

  var App = exports.App = (_dec = (0, _aureliaFramework.inject)(), _dec(_class = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      this.router = router;
      config.title = "Budget Expectancy Calculator";
      config.map([{
        route: ['', 'intro'], moduleId: 'intro',
        name: 'intro', title: 'Introduction', nav: true
      }, {
        route: 'results', moduleId: 'results',
        name: 'results', title: 'Personal Budget', nav: true
      }]);
      this.message = 'Hello World!';

      this.modules = [{ display: false, path: "medical/medical" }, { display: false, path: "savings/savings" }];
    };

    return App;
  }()) || _class);
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
define('intro',['exports', 'aurelia-framework', 'aurelia-router'], function (exports, _aureliaFramework, _aureliaRouter) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Intro = undefined;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _dec, _class;

    var Intro = exports.Intro = (_dec = (0, _aureliaFramework.inject)(_aureliaRouter.Router), _dec(_class = function () {
        function Intro(router) {
            _classCallCheck(this, Intro);

            this.router = router;
        }

        Intro.prototype.route = function route() {
            this.router.navigate("#/results");
        };

        return Intro;
    }()) || _class);
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
define('results',["exports"], function (exports) {
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

    var Chart = exports.Chart = function Chart() {
        _classCallCheck(this, Chart);

        _chartFactory.ChartFactory.createChart('container');
    };
});
define('medical/medical',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Medica = exports.Medica = function Medica() {
        _classCallCheck(this, Medica);
    };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('savings/savings',["exports"], function (exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var Savings = exports.Savings = function Savings() {
        _classCallCheck(this, Savings);
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
            Highcharts.chart(containerID, {
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
define('text!app.html', ['module'], function(module) { module.exports = "<template><require from=\"bootstrap/css/bootstrap.css\"></require><require from=\"css/styles.css\"></require><div id=\"app\"><div id=\"content\"><div id=\"intro\"><h1 style=\"font-size:36px;text-align:center\"><b>Budget Planning<b></b></b></h1></div><hr><router-view></router-view></div><div repeat.for=\"module of modules\"><compose view-model=\"savings/savings\"></compose></div></div></template>"; });
define('text!css/styles.css', ['module'], function(module) { module.exports = "#personalInfo {\r\n    width: 75%;\r\n    margin: 0 auto;\r\n}"; });
define('text!intro.html', ['module'], function(module) { module.exports = "<template><form id=\"personalInfo\"><div class=\"form-group\"><label for=\"\">Annual Income:</label><input type=\"text\" class=\"form-control\" placeholder=\"50,000\"></div><div class=\"form-group\"><label for=\"\">Location:</label><input type=\"text\" class=\"form-control\"></div><div class=\"radio\"><label>Adults in Household</label><br><label>1<input type=\"radio\" name=\"adultsInHousehold\" model.bind=\"1\" checked.bind=\"numberAdults\"></label><label>2<input type=\"radio\" name=\"adultsInHousehold\" model.bind=\"2\" checked.bind=\"numberAdults\"></label></div><div class=\"radio\"><label>Children in Household</label><br><label class=\"custom-control custom-radio\">1<input class=\"custom-control-input\" type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"1\" checked.bind=\"numberChildren\"></label><label class=\"custom-control custom-radio\">2<input class=\"custom-control-input\" type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"2\" checked.bind=\"numberChildren\"></label><label class=\"custom-control custom-radio\">3<input class=\"custom-control-input\" type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"3\" checked.bind=\"numberChildren\"></label><label class=\"custom-control custom-radio\">4<input class=\"custom-control-input\" type=\"radio\" name=\"childrenInHouseHold\" model.bind=\"4\" checked.bind=\"numberChildren\"></label></div><button id=\"budgetButton\" class=\"btn-success\" click.delegate=\"route()\">Budget</button></form></template>"; });
define('text!results.html', ['module'], function(module) { module.exports = "<template><compose view-model=\"chart/chart\"></compose></template>"; });
define('text!chart/chart.html', ['module'], function(module) { module.exports = "<template><div id=\"container\" style=\"height:450px\"></div></template>"; });
define('text!medical/medical.html', ['module'], function(module) { module.exports = "<template><h1>This is medical.</h1></template>"; });
define('text!savings/savings.html', ['module'], function(module) { module.exports = "<template><h1>This is savings.</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map