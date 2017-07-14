export class MoneyValueConverter {
    toView(value) {
        // this.displayIncome = this.displayIncome.replace(/,/g, "");
        // this.displayIncome = this.displayIncome.replace(/\$/g, "");

        // this.income = parseInt(this.displayIncome);

        // this.displayIncome = '$' + this.income.toLocaleString();
        // return value.toLocaleString();
        value = value.replace(/,/g, "");
        return value.toLocaleString();
    }
}