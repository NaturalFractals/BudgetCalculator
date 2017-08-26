# Budget Calculator

A robust budgeting tool for analyzing your expenditures. A frontend SPA developed using Javascript Aurelia, HTML, and CSS.

### Features
* Entering data monthly or yearly—whichever is more convenient
* Graphical representation of budget (Highcharts)
* Google Geolocation API for grabbing the user's location, in order to start your budget with smart defaults based on your area
* 5-year inflation projections
* Goals calculator to see how much you need to save monthly in order to afford a future big purchase (car, new TV, etc.)
* Auto-budgeter to fix your budget from going over your salary [Still in development]

## Development Instructions

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

* NodeJS
* AureliaJS

### Installing

Once you have the prerequisites installed, you can install the Aurelia CLI itself. From the command line, use npm to install the CLI globally:

```
npm install aurelia-cli -g
```

Using Node, install the project dependencies: 
```
npm install
```

Once the dependencies are installed (it will take a few minutes), your project is ready to go. Just change directory into the project folder and run it by typing:

```
au run --watch
```



## Built With

* [Aurelia](http://aurelia.io/) - The web framework used
