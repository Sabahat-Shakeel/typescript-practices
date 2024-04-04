//slide part 2 practics

let shirt = "small size";
let shirtprint: string = "bts";
let price: number = 1700;
let totall = ["shirt", "shirtprice", "price"];

console.log(totall); // array output,

console.log(shirt);
console.log(shirtprint);
console.log(price);
 
let favrtcolor = "white";
console.log (favrtcolor);

//let change value of favrtcolor..
favrtcolor = "bright-yellow";  // output update,
console.log(favrtcolor)

//case sensitive
let camelCase: number  = 121;
let snake_case: number = 21;
let PascalCase :number = 0;
console.log (121-21-0);   // output 200

let $num= 12;
let _num1 = 11;
let _num_2 = 0;
console.log ($num+_num1+_num_2) //output  23


//strongly type syntax

let full_Name : string = "eric jhon";
let age : number = 12;
let isvalue : boolean = true;
let random_value : any = "www.google.com";


//type inference

let name_1 = "eric jhon";
let Age = 12;
let Is_Value = true;
let RandomValue = "www.google.com";


// advance varible (let and  constanst)

const bankaccount : number = 110083478294;  // this is const value
let balance : number = 100;
balance = 50;


//primitive data type 

let c = undefined
let d = null

// string concatenation

let phone : string = "iphone 14"
let ver : string = "pro max"
let total : string = phone  +" "+ ver
console.log (total)


//template literals

let balance1 :number = 12000
let morebalance: number = 200
let totallAll = `${balance1} ${morebalance}`;
console.log(totallAll) 


//operators addition 

let sum : number = 90
let sum2 : number = 10
console.log (sum + sum2); // 100
console.log (90 + 10) // output 100


// substraction 

let subs1 : number = 200
let subs2 : number = 100 
console.log (200 - 100);  // output 100


// multiple

let multi1 = 2
let multi2 = 50
console.log (multi1 * multi2) //output 100


//division

let division1 = 4
let division2 = 2
console.log (4 / 2)
  

//exponentation

let exp : number = 5 **2
console.log (exp)


//module 
let oneBagEach10Apples= 100
let apples = 6 // output 10
console.log (100 % 6) //reminder


//unary operators

let a = 10
let b = 9

console.log ("++a,", ++a)  // output 11
console.log ("a++," ,a++) //output 11 
console.log ("b++,", b++) // output 9
console.log ("++b,", ++b) //output 11

let x = 10
let y = 9

console.log ("--y,", --y) //output 8
console.log ("y--,", y--) //output 8


//combine operators 
let num1 = 3 + 4 * 5
console.log(num1) //output 23

let num2 = 2 + 4 * 5
console.log (num2) // output 22