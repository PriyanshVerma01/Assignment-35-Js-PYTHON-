const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//console.log(Math.min.apply(Math, ages)); // find the min age
//console.log(Math.max.apply(Math, ages)); // find the main age
//console.log(Math.min(...ages));  // second Method for find the min age 
//console.log(Math.max(...ages)); // second Method for find the max age 

//console.log(ages.sort()); //Sort the array and find the min and max age
console.log(ages.reduce((a,b)=>a+b,0)/ages.length); // Find the average age(all items divided by number of items)

