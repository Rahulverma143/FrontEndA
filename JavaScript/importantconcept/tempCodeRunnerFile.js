let x = "1";
// let y = 320;
// let z = a + b;
// console.log(z);

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}
greet("Rahul", () => console.log("How are you?"));
