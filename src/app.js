import {inject} from 'aurelia-framework';
import 'bootstrap';
import $ from 'jquery';

export class App {
  constructor() {
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = "Budget Expectancy Calculator";
    config.map([
      {
        route: ['', 'intro'], moduleId: 'intro/intro',
        name: 'intro', title: 'Introduction', nav: true
      },
      {
        route: 'results', moduleId: 'restults/results',
        name: 'results', title: 'Personal Budget', nav: true
      }
    ]);

    this.modules = [{display: false, path: "results-banner-module/banner"},
                    {display: false, path: "medical/medical" },
                    // {display: false, path: "taxes"}, 
                    // {display: false, path: "savings"}, 
                    {display: false, path: "savings/savings"}]
  }
}
