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

// No Fat Arrow Syntax
let resultNFA = allCustomers.filter(function (customer) { return customer.address.city === 'KC' })
console.log("Without Fat Arrow Syntax:")
console.log(resultNFA);

// No Fat Arrow Syntax And No Anonymous Function
function checkCity(customer, cityToCheck) {
    return customer.address.city === cityToCheck;
}
let resultNFANAF = allCustomers.filter(checkCity, 'KC');
console.log("Without Fat Arrow Syntax And Without Anonymous Function:")
console.log(resultNFA);

// With Fat Arrow Syntax
let resultWFA = allCustomers.filter(x => x.address.city === 'KC')
console.log("With Fat Arrow Syntax:")
console.log(resultWFA);

// If logic is more than one line, must use curly braces 
// and return statment with fat arrow syntax
let resultMOL = allCustomers.filter(x => {
    let example = false;
    return x.address.city === 'KC' && example;
})
console.log("Example of more than one line; should return empty")
console.log(resultMOL);

