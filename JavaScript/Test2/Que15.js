// sum of reverse numbrer 

function sum (n){
    if(n === 0)
    return 1
    return n+ sum(n-1)
}
const result = sum(5)
console.log(result);

// output  16