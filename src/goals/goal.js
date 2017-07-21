export class Goal {
    constructor(name, cost, month, year) {
        this.name = name;
        this.cost = cost;
        this.month = month;
        this.year = year;

        var monthNum = null;
        switch (this.month) {
            case "January":     monthNum = 0; break;
            case "February":    monthNum = 1; break;
            case "March":       monthNum = 2; break;
            case "April":       monthNum = 3; break;
            case "May":         monthNum = 4; break;
            case "June":        monthNum = 5; break;
            case "July":        monthNum = 6; break;
            case "August":      monthNum = 7; break;
            case "September":   monthNum = 8; break;
            case "October":     monthNum = 9; break;
            case "November":    monthNum = 10; break;
            case "December":    monthNum = 11; break;
        }

        var currYear = new Date().getFullYear();
        var currMonth = new Date().getMonth();

        var monthsBetween = null;
        if (currYear === this.year)
            monthsBetween = monthNum - currMonth;
        else
            monthsBetween = (11 - currMonth) + (12 * (this.year - currYear - 1)) + monthNum;

        this.monthlyCost = parseInt(this.cost / monthsBetween);
    }
}