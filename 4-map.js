let customers = [
    {
        address: {
            city: 'KC'
        }
    },
    {
        address: {
            city: 'NY'
        }
    }
]

function getCities(customers) {
    let result = [];
    for (let i = 0; i < customers.length; i++) {
        let customer = customers[i];
        result.push(customer.address.city)
    }
    return result;
}

let resultI = getCities(customers);
let resultD = customers.map(x => x.address.city);

console.log("Imperative Map:  ", resultI);
console.log("Declarative Map: ", resultD);