//comparing operators;
let a = 4;
let b = 5 ;
console.log (`a is equall to b ${a === b} `) //false
console.log (`a is not equall to b ${a != b}`)  //true
console.log (`a is greater than b ${a > b}`) //false
console.log (`a is less than b ${a < b}`)  //true



//logical operators; and, 0r, not
let x = 5;
let y = 6;

console.log (5 > 6 && 5 < 6) //false
console.log (5 > 6 || 5 < 6) //true
console.log !(5 > 6)        //false

console.log (5 < 6 && 5 < 6) //true
console.log (5 < 6 || 5 > 6) //true
console.log !(5 < 6)        //true     