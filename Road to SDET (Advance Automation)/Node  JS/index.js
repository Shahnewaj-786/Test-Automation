console.log  ("Start Basic Node js");

var  x = 25;
var x = 30;

let y = "Variable";
let z = 90; 

console.log(x);
console.log(y);
console.log(z);
console.log("Variable type is: " + typeof(y));


let a = 50;
let b = 90;
a =  undefined;
b = null;
console.log(a);
console.log(b);


let obj = {
    name : "Boba",
    age : 30
};

console.log("This is an object: ");
console.log(obj);


const people = {
    name : "Tuni",
    age : 2,
    salary : "100 TK",
    day : 5,
    address : {
        home : "Dhaka",
        office : "Mirpur"
    }
};

people.name = "Bappi";
people.address.home =  "Gopalganj";
people.salaryAccount = "Brac Bank";

console.log(people);
