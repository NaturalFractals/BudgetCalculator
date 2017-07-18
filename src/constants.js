export class Constants {
    constructor() {
        //Constant for children food cost
        this.foodCostPerChild = 155.7;
        //Constant for adult food cost
        this.foodCostPerAdult = 158.7;
        //Constant for miscellaneous cost
        this.miscellaneousCost = 0.05;
        //Constants for child care module

        this.childCare = [
            {
                'label': 'Private School',
                'variable': 'privateSchoolCost'
            },
            {
                'label': 'Daycare',
                'variable': 'daycareCost'
            }
        ];

        //Constants for food module
        this.food = [
            {
                'label': 'Groceries',
                'variable': 'groceriesCost'
            },
            {
                'label': 'Dining Out',
                'variable': 'diningOutCost'
            }
        ];

        //Constants for housing module
        this.housing = [
            {
                'label': 'Monthly Rent',
                'variable': 'monthlyRentCost'
            },
            {
                'label': 'Home Insurance',
                'variable': 'homeInsuranceCost'
            },
            {
                'label': 'Utilities Bill',
                'variable': 'homeInsuranceCost'
            }
        ];

        //Constants for medical module
        this.medical = [
            {
                'label': 'Health Insurance',
                'variable': 'healthInsuranceCost'
            },
            {
                'label': 'Dental Work',
                'variable': 'dentalCost'
            }
        ];

        //Constants for other module
        this.other = [
            {
                'label': 'Cellphone',
                'variable': 'cellPhoneCost'
            },
            {
                'label': 'Recreation/Travel',
                'variable': 'recreationCost'
            },
            {
                'label': 'Gym Membership',
                'variable': 'gymCost'
            },
            {
                'label': 'Entertainment',
                'variable': 'entertainmentCost'
            },
            {
                'label': 'Clothing',
                'variable': 'clothingCost'
            }
        ];

        //Constants for savings module
        this.savings = [
            {
                'label': 'Emergency Fund',
                'variable': 'emergencyFundCost'
            },
            {
                'label': 'Retirement',
                'variable': 'retirementCost'
            },
            {
                'label': 'Investments',
                'variable': 'investmentsCost'
            },
            {
                'label': 'College Savings',
                'variable': 'collegeSavingsCost'
            }
        ];
        
        //Constants for taxes module
        this.taxes = [
            {
                'label': 'Vehicle Taxes',
                'variable': 'vehicleTaxCost'
            },
            {
                'label': 'Housing Taxes',
                'variable': 'housingTaxCost'
            }
        ];
    }
}