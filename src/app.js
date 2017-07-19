import {inject} from 'aurelia-framework';
import 'bootstrap';
import 'bootstrap-material-design';
import 'jquery-ui-dist';
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
        route: 'results', moduleId: 'results/results',
        name: 'results', title: 'Personal Budget', nav: true
      },
            {
        route: 'goals', moduleId: 'goals/goals',
        name: 'goals', title: 'Goals', nav: true
      },
            {
        route: 'five-year', moduleId: 'five-year/five-year',
        name: 'five-year', title: 'Five Year Plan', nav: true
      }
    ]);
  }
}
