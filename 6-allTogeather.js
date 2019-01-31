// Could be moved to seperate file; kept here for copy/paste convienence. 
const customerProvider = {
    GetAll() {
        return [
            {
                customerId: 1,
                address: { city: 'KC' },
                purchases: [
                    { amount: 30.02 },
                    { amount: 39.19 },
                    { amount: 60.88 }
                ]

            },
            {
                customerId: 2,
                address: { city: 'NY' },
                purchases: [
                    { amount: 230.39 },
                ]
            },
            {
                customerId: 3,
                address: { city: 'KC' },
                purchases: [
                    { amount: 70.29 },
                    { amount: 90.20 }
                ]
            },
            {
                customerId: 4,
                address: { city: 'KC' },
                purchases: [
                    { amount: 20.23 },
                    { amount: 15.02 }
                ]
            }
        ]
    }
}

let allCustomers = customerProvider.GetAll();

// Imperative Approach: 
function CustomerReport(customers, city, amountSpentRequired) {
    let result = [];
    for (let i = 0; i < customers.length; i++) {
        let customer = customers[i];
        if (customer.address.city === city) {
            let amountSpent = 0;
            for (let i = 0; i < customer.purchases.length; i++) {
                let purchase = customer.purchases[i];
                amountSpent = purchase.amount + amountSpent;
            }
            if (amountSpent >= amountSpentRequired)
                result.push(customer.customerId)
        }
    }
    return result;
}

let resultI = CustomerReport(allCustomers, 'KC', 100);
console.log("Imperative:  ", resultI);

// Declarative Approach:
let resultD = allCustomers
    .filter(x => x.address.city === 'KC')
    .filter(x => x.purchases
        .reduce((total, x) => total = total + x.amount, 0) >= 100)
    .map(x => x.customerId);
console.log("Declarative: ", resultD);