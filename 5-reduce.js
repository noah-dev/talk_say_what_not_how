let customer = {
    customerId: 1,
    purchases: [
        { amount: 21.23 },
        { amount: 10.48 }
    ]
}

function calculateSpent(customer) {
    let total = 0
    for (let i = 0; i < customer.purchases.length; i++) {
        let purchase = customer.purchases[i];
        total = purchase.amount + total;
    }
    return total;
}

let totalI = calculateSpent(customer);
// NOTE: Because of how this statment is written, the 0 is required - without it, it gives a bad result
// See below for more details
let totalD = customer.purchases.reduce((total, x) => total = x.amount + total, 0);

console.log("Imperative Reduce:  ", totalI);
console.log("Declarative Reduce: ", totalD);

// ---
// As mentioned above, the 0 is required. When writing a reduce operator, the 2nd argument
// (which is zero in the above code) is optional; if left off, the reduce operator uses
// the first value in the array it is called on by default; but since the first value
// of the array is an object and not a number, funky behavior occurs. 
// If re-written like this, so that the filter is off an array of numbers, the zero 
// can be left off:

let totalDAlt = customer.purchases.map(x => x.amount).reduce((total, x) => total = x + total);
console.log("Declartive Reduce Alt. Approach: ", totalDAlt)

// Reference (See Syntax Section): 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce