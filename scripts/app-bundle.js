define('app',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function App() {
    _classCallCheck(this, App);

    this.message = 'Hello World!';

    this.modules = [{ display: false, path: "medical/medical" }, { display: false, path: "savings/savings" }];
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
define('utilities/chart',["exports", "highcharts"], function (exports, _highcharts) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.Chart = undefined;

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

    var Chart = exports.Chart = function () {
        function Chart() {
            _classCallCheck(this, Chart);
        }

        Chart.prototype.createChart = function createChart(containerID) {
            Highcharts.chart(containerID, {});
        };

        return Chart;
    }();
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
define('text!app.html', ['module'], function(module) { module.exports = "<template><div repeat.for=\"module of modules\"><compose view-model=\"savings/savings\"></compose></div></template>"; });
define('text!medical/medical.html', ['module'], function(module) { module.exports = "<template><h1>This is medical.</h1></template>"; });
define('text!savings/savings.html', ['module'], function(module) { module.exports = "<template><h1>This is savings.</h1></template>"; });
//# sourceMappingURL=app-bundle.js.map