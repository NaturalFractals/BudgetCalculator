import {inject} from 'aurelia-framework';
import 'bootstrap';
import $ from 'jquery';

export class App {
  constructor() {
        this.modules = [{display: false, path: "budget-breakdown-module/category-modules/child-care"},
                    {display: false, path: "budget-breakdown-module/category-modules/food" },
                    {display: false, path: "budget-breakdown-module/category-modules/housing"}, 
                    {display: false, path: "budget-breakdown-module/category-modules/medical"}, 
                    {display: false, path: "budget-breakdown-module/category-modules/savings"},
                    {display: false, path: "budget-breakdown-module/category-modules/other"},
                    {display: false, path: "budget-breakdown-module/category-modules/taxes"}];
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
        route: 'results', moduleId: 'results/results',
        name: 'results', title: 'Personal Budget', nav: true
      }
    ]);
  }
}
