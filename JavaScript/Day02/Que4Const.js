const  student = {
    fullName : "Rahul Verma",
    age : 22,
    class : "12th",
    cgpa : 8.8,
    isPass : true,
};
 
console.log(student);
//   output {
//   fullName: 'Rahul Verma',
//   age: 22,
//   class: '12th',
//   cgpa: 8.8,
//   isPass: true
// }
// key = fullName, value = Rahul Verma , = assign the value
// we can't change constant variable but we can  change const object inside the keys 
console.log(student.age); // output 22 
student["age"] = student["age"]+1;  // increase the value
console.log(student.age); // output 23