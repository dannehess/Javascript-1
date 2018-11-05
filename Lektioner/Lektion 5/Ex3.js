//Aritmetiska operatorer i JS

let y = 5;
let x;

x = y + 2; // 7
x = y - 2; // 3
x = x + 2; // 5
x = x - 2; // 3
x = y * 2; // 10
x = x * 2; // 20
x = y / 2; // 2.5 OBS! punkt, ej komma
//Modulus-operator
x = y % 2 //  1 är resten vid heltalsdivision
x = 10 % 3; // 1

//Ökningsoperator / Increment
x = 10;
x++; //Öka alltid med ett
x++; // x = x + 1
x = x + 2;
//Eller
x += 2; //Lägg till två
x += 5; //Lägg till fem

//Minskningsoperator
x = 10;
x--; //Minska med ett
//Minska med två
x = x - 2; //7
//Eller
x -= 2; //5

x = "TEXT";
x = x / 2; //NaN
x = 2 / x; //NaN
x = x / x; //NaN

/*
let x2;
console.log(x2/2); //Nan
console.log(2/x2); //Nan
console.log(x2/x2); //Nan
*/

//Konkatenering
let firstName = "Daniel";
let lastName = "Hessling";
let fullName = 'Hej ' + firstName + ' ' + lastName + ' ';
console.log(fullName);

x = "1" + "2"; //12
x = "1" + 2; //12
x = 1 + "2"; //12 
x = "1" + 2 + 3; //123
x = 1 + 2 + "3"; //33
x = "1" + (2+3); //15
x = "1" - "2"; //-1     Vi får en automatisk typomvandling, Implicit typomvandling
x = 1 - "2"; //-1   Minus blir alltid subtraktion
x = "1" - 2; //-1
x = "1" * 2; //
x = "1" / "2"; //0.5


console.log(x);


