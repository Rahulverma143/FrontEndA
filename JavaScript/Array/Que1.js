function abc(data){
  
  console.log(data.length)

  
}
const data = ["a" , "b", "c", "d", "e", "f"]
abc(data)


function abc(data){
  
  console.log(data.pop("d"))

  
}
const data = ["a" , "b", "c", "d", "e", "f"]
abc(data)

function abc(data){
  
  console.log(data.push("a"))

  
}
const data = ["a" , "b", "c", "d", "e", "f"]
abc(data)


function abc(data){
  
  console.log(data.shift("1"))
  console.log(data)

  
}
const data = ["a" , "b", "c", "d", "e", "f"]
abc(data)


function abc(data){
  
  console.log(data.unshift("r"))
  console.log(data)

  
}
const data = ["a" , "b", "c", "d", "e", "f"]
abc(data)

function abc(data){
  
  console.log(data.reverse())
  console.log(data)

  
}
const data = ["a" , "b", "c", "d", "e", "f"]
abc(data)

function abc(data){
  
  console.log(data.sort())
  console.log(data)

  
}
const data = ["a" , "b", "c", "d", "f", "e"]
abc(data)


// settimeout  execute unce after time delay
// setinterval execute multiple time after time delay


function abc(){
  console.log(`start`)
  setTimeout(function(){
    console.log(`log print after 5 second`)
  }, 5000);
   setTimeout(function(){
    console.log(`log print after 2 second`)
  }, 2000);
  setTimeout(function(){
    console.log(`log print after 4 second`)
  }, 4000);
   setTimeout(function(){
    console.log(`log print after 1 second`)
  }, 1000);
  console.log(`end`)
}
abc()

function abc(){
  console.log(`start`)
  setTimeout(function(){
    console.log(`log print after 1 second`)
  }, 1000);
   setInterval(function(){
    console.log(`log print after 5 second`)
  }, 5000);
  setTimeout(function(){
    console.log(`log print after 4 second`)
  }, 4000);
   setTimeout(function(){
    console.log(`log print after 3 second`)
  }, 3000);
  console.log(`end`)
}
abc()