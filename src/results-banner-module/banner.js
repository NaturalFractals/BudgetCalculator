export class Banner {
    constructor() {
        this.income = null;
        this.displayIncome = "";
    }

    sanitizeIncome() {
        this.displayIncome = this.displayIncome.replace(/,/g, "");
        this.displayIncome = this.displayIncome.replace(/\$/g, "");

        this.income = parseInt(this.displayIncome);

        this.displayIncome = '$' + this.income.toLocaleString();
    }
}