export class Constants {
    constructor() {
        //Constant for children food cost
        this.foodCostPerChild = 155.7;
        //Constant for adult food cost
        this.foodCostPerAdult = 158.7;

        //Constants for child care module
        this.childCare = [
            {
                'label': 'Private School'
            },
            {
                'label': 'Daycare'
            }
        ];

        //Constants for food module
        this.food = [
            {
                'label': 'Groceries'
            },
            {
                'label': 'Dining Out'
            }
        ];

        //Constants for housing module
        this.housing = [
            {
                'label': 'Monthly Rent'
            },
            {
                'label': 'Home Insurance'
            },
            {
                'label': 'Utilities Bill'
            }
        ];

        //Constants for medical module
        this.medical = [
            {
                'label': 'Health Insurance'
            },
            {
                'label': 'Dental Work'
            }
        ];

        //Constants for other module
        this.other = [
            {
                'label': 'Cellphone'
            },
            {
                'label': 'Recreation/Travel'
            },
            {
                'label': 'Gym Membership'
            },
            {
                'label': 'Entertainment'
            },
            {
                'label': 'Clothing'
            }
        ];

        //Constants for savings module
        this.savings = [
            {
                'label': 'Emergency Fund'
            },
            {
                'label': 'Retirement'
            },
            {
                'label': 'Investments'
            },
            {
                'label': 'College Savings'
            }
        ];
        
        //Constants for taxes module
        this.taxes = [
            {
                'label': 'Vehicle Taxes'
            },
            {
                'label': 'Housing Taxes'
            }
        ];
    }
}