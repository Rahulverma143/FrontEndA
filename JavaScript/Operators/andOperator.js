//  logical Operator
//  logical And operator  (&&)
//  cond1 = t , cond2 = t then ans true
//  cond1 = t , cond2 = f then ans false
//  cond1 = f , cond2 = t then ans false
//  cond1 = f , cond2 = f then ans false

let a = 6;
let b = 5;

let cond1 = a > b;   
console.log(cond1)   // true

let cond2 = a === 6;
console.log(cond2)   // true

console.log("cond1 && cond2" , cond1 && cond2); // cond1 && cond2 true
// console.log("cond1 && cond2" , a > b && a === 6); // cond1 && cond2 true