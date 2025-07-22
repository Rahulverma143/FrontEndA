//  Arrow Functions and this

const obj = {
  name: "Alice",
  show: () => console.log(this.name)
};
obj.show(); 
// Output = undefined
