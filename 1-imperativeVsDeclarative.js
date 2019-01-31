// Could be moved to seperate file; kept here for copy/paste convienence. 
const customerProvider = {
    GetAll() {
        return [
            {
                customerId: 1,
                amountSpent: 130.39,
                address: { city: 'KC' }
            },
            {
                customerId: 2,
                amountSpent: 230.39,
                address: { city: 'NY' }
            },
            {
                customerId: 3,
                amountSpent: 160.49,
                address: { city: 'KC' }
            },
            {
                customerId: 4,
                amountSpent: 34.25,
                address: { city: 'KC' }
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
        if (customer.address.city === city && customer.amountSpent >= amountSpentRequired)
            result.push(customer)
    }
    return result;
}

let resultI = CustomerReport(allCustomers, 'KC', 100);
console.log("Imperative:")
console.log(resultI);

// Declarative Approach:
let resultD = allCustomers.filter(x => x.address.city === 'KC' && x.amountSpent >= 100)
console.log("Declarative: ")
console.log(resultD);