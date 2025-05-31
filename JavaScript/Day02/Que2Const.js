
const student = {
    fullName : "Rahul Verma",
    age : 20,
    cgpa : 8.5,
    isPass : true,
};
console.log(student.age);   // output 20
console.log(student["age"]); // output 20
console.log(student);   // output { fullName: 'Rahul Verma', age: 20, cgpa: 8.5, isPass: true }
console.log(typeof student);  //  output object 
console.log(typeof student ["age"]); //  output number
console.log(typeof student ["fullName"]); // output string
console.log(typeof student["isPass"]);  //  output boolean
console.log(typeof student["cgpa"]); // output  number
console.log(student ["isPass"]);  //  output true
console.log(student ["cgpa"]); // output 8.5
console.log(student ["age"]); // output 20