export class ChildCare {
    constructor() {
        this.cost = 0;
    }

    calculatePrivateSchoolCost(privateSchoolCost) {
        this.cost += privateSchoolCost; 
    }

    calculateDaycareCost(daycareCost) {
        this.cost += daycareCost;
    }
}