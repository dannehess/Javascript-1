//Arbeta med primitiva typer (datatyper)

// 1. String
let firstName = "Daniel";
let lastName = 'Hessling';

console.log(firstName);
console.log("It´s very nice!");
console.log(`I Love You JS`);   //ES6 Template Strings, OBS! Backticks

// 2. Number
let age = 45;
const PI = 3.14159;
let price = 5.50;
let quantity = 10;
let total = price * quantity;
console.log(total);

// 3. Boolean, True/False
let again = false; // Eller 0

if(again)
    console.log("Inne i if-satsen");
    again = true;
if(again)
    console.log("Inne again i for-satsen");

// 4. Undefined (Detta är en typ i JS)
    let name;
    console.log(name);
    
    console.log(mobile);
    // OK eftersom mobile har deklarerats med var
    var mobile;
    mobile = "073-1231123";

    // console.log(adress); // FEL!
    let adress;
    adress ="Hemfridsvägen 17";


    // 5. Null
    let ingenting = null;
    console.log("----------------");
    console.log(typeof firstName);
    console.log(typeof age);
    console.log(typeof again);
    console.log(typeof name);
    console.log(typeof ingenting);

    


    
    
    
    