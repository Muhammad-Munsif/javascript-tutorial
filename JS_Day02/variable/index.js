// we can  declare, assigned and change the value of variable
/*
Noted
Prefer not to used var 
because of issue in the block scope and functional scope
*/
var Name = "Munsif";
Name = "Anees";
// we can assigned value only one time it can't change the value again
const accoundId = 12345;
// accoundId = 32424;

// we can declare and assigned the value
let emailName = "m.munsif123@gmail.com";
emailName = "m.Anees.C@gmail.com";
address = "Peshawar"; // its not a proper way to used a variable

console.table([Name, accoundId, emailName, address]);

// var fullName = "Muhammad Munsif";
// var number = 25;
// let bool = true;
// const array = ['khan', 'shan', 'shah', 'suban']
// const object = {id : '1', fullname : 'Muhammad Munsif', college : 'GSSC', age : 25, address : 'Peshawar'}
// console.log(typeof fullName );
// console.log(typeof number );
// console.log(typeof bool);
// console.log(typeof array);
// console.log(typeof object);
// console.table([fullName, number, bool, array, object])

// var name = 'Ali';
// console.log(name);
// name = 'khan'
// console.log(name);
let name = "Aleem";
let age = 25;
let status = "high";
let language = "JavScript";

let isStudent = "Fifth class";
console.table({ name, age, status, language, isStudent });
const student = ["Ahmad", "Zia", "Ali", "Saad", "Uzair"];
const classStudent = student.sort();
console.log(classStudent.slice(0, 3, "asad"));
