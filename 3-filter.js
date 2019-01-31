let heights = [3.75, 4.25, 5.5, 3];

function onlyTallEnough(heights, minHeight){
    let result = [];
    for(let i = 0; i < heights.length; i++){
        let height = heights[i]
        if(height >= minHeight)
            result.push(height)
    }
    return result;
}
// Turns out 4'3" = 4.25'
let resultI = onlyTallEnough(heights, 4.25)
let resultD = heights.filter(x => x >= 4.25);

console.log("Imperative Filter:  ", resultI);
console.log("Declarative Filter: ", resultD);