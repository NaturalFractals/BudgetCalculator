export class App {
  constructor() {
    this.message = 'Hello World!';

    this.modules = [{display: false, path: "medical/medical" },
                    // {display: false, path: "taxes"}, 
                    // {display: false, path: "savings"}, 
                    {display: false, path: "savings/savings"}]
  }
}
