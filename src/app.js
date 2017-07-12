import {inject} from 'aurelia-framework';
import 'bootstrap';
import $ from 'jquery';

@inject()
export class App {
  constructor() {
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = "Budget Expectancy Calculator";
    config.map([
      {
        route: ['', 'intro'], moduleId: 'intro',
        name: 'intro', title: 'Introduction', nav: true
      },
      {
        route: 'results', moduleId: 'results',
        name: 'results', title: 'Personal Budget', nav: true
      }
    ]);
  }
}
