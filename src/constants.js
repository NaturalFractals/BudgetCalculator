export class Constants {
    constructor() {
        //Constant for children food cost
        this.foodCostPerChild = 155.7;
        //Constant for adult food cost
        this.foodCostPerAdult = 158.7;
        //Constant for miscellaneous cost
        this.miscellaneousCost = 0.05;

        //Field for the autobudget class
        this.autoBudgetFields = [
            {
                'label': 'Tuition',
                'class': 'savings',
                'variable': 'collegeSavingsCost'
            },
            {
                'label': 'Cable',
                'class': 'housing',
                'variable': 'monthlyCableCost'
            },
            {
                'label': 'Telephone',
                'class': 'housing',
                'variable': 'homeTelephoneCost'
            },
            {
                'label': 'Eating Out',
                'class': 'food',
                'variable': 'diningOutCost'
            },
            {
                'label': 'Workday Coffee/Lunch',
                'class': 'food',
                'variable': 'workdayCost'
            },
            {
                'label': 'Recreation/Travel',
                'class': 'other',
                'variable': 'recreationCost'
            },
            {
                'label': 'Vacation',
                'class': 'other',
                'variable': 'recreationCost'
            },
            {
                'label': 'Cell Phone Cost',
                'class': 'other',
                'variable': 'cellPhoneCost'
            },
            {
                'label': 'Clothing',
                'class': 'other',
                'variable': 'clothingCost'
            },
            {
                'label': 'Savings',
                'class': 'savings',
                'variable': 'emergencyFundCost'
            },
            {
                'label': 'Gym Membership',
                'class': 'other',
                'variable': 'gymCost'
            }
        ]

        //Constants for child care module
        this.childCare = [
            {
                'label': 'School Tuiton',
                'variable': 'privateSchoolCost'
            },
            {
                'label': 'Daycare',
                'variable': 'daycareCost'
            },
            {
                'label': 'School Expenses',
                'variable': 'schoolExpenseCost'
            },
            {
                'label': 'Child Support',
                'variable': 'childSupportCost'
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
            },
            {
                'label': 'Workday Coffee/Lunch',
                'variable': 'workdayCost'
            }
        ];

        //Constants for housing module
        this.housing = [
            {
                'label': 'Cable',
                'variable': 'monthlyCableCost'
            },
            {
                'label': 'Utilities',
                'variable': 'homeInsuranceCost'
            },
            {
                'label': 'Telephone',
                'variable': 'homeTelephoneCost'
            },
            {
                'label': 'Home Maintenance',
                'variable': 'homeMaintenanceCost'
            }
        ];

        //Constants for housing utilities
        this.housingUtilities = [
            {
                'label': 'Gas',
                'variable': 'utilityGasCost'
            },
            {
                'label': 'Water',
                'variable': 'utilityWaterCost'
            },
            {
                'label': 'Electricity',
                'variable': 'utilityElectricCost'
            }
        ];

        //Constants for housing owners
        this.housingRent = [
            {
                'label': 'Mortgage Payment',
                'variable': 'mortgageCost'
            },
            {
                'label': 'Home Insurance',
                'variable': 'homeInsuranceCost'
            },
            {
                'label': 'Home Improvements',
                'variable': 'homeImprovementCost'
            }
        ];

        //Constants for housing rent
        this.housingLease = [
            {
                'label': 'Rent',
                'variable': 'rentCost'
            },
            {
                'label': 'Renters Insurance',
                'variable': 'rentInsuranceCost'
            }
        ];

        //Constants for medical module
        this.medical = [
            {
                'label': 'Health Insurance',
                'variable': 'healthInsuranceCost'
            },
            {
                'label': 'Medication Cost',
                'variable': 'medicationCost'
            },
            {
                'label': 'Dental Work',
                'variable': 'dentalCost'
            },
            {
                'label': 'Other Medical Cost',
                'variable': 'otherMedicalCost'
            }
        ];

        //Constants for Transportation
        this.transportation = [
            {
                'label': 'Public Transportation Cost',
                'variable': 'publicTransportationCost'
            },
            {
                'label': 'Car',
                'variable': 'hasCar'
            }
        ];

        //Constants for Car Transportation
        this.transportationCar = [
            {
                'label': 'How Many Cars',
                'variable': 'numberOfCars'
            },
            {
                'label': 'Payment',
                'variable': 'carPaymentCost'
            },
            {
                'label': 'Repairs',
                'variable': 'carRepairCost'
            },
            {
                'label': 'Insurance',
                'variable': 'insuranceCost'
            },
            {
                'label': 'Gasoline',
                'variable': 'gasolineCost'
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
            },
            {
                'label': 'Student Loan Payments',
                'variable': 'studentLoanCost'
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
                'label': 'State Taxes',
                'variable': 'vehicleTaxCost'
            },
            {
                'label': 'Filing Status',
                'variable': 'filingStatus'
            }
        ];

        //Constants for filing status tax
        this.taxesFiling = [
            {
                'label': 'Property Tax',
                'variable': 'propertyTaxCost'
            },
            {
                'label': 'Vehicle Tax',
                'variable': 'vehicleTaxCost'
            },
            {
                'label': 'Income Tax',
                'variable': 'incomeTaxCost'
            }
        ];
    }
}