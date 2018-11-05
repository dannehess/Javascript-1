
//Arbeta med objektet Number

/*

let PI = 3.14159;
console.log(typeof PI);
//Avrunda till två decimaler = 3.14
console.log(PI.toFixed(2));
//Visar endast två siffror = 3.1
console.log(PI.toPrecision(2));

//Visa Max-värdet och Min-värdet på ett nummer i JS
console.log(Number.MIN_VALUE);
console.log(-Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(-Number.MAX_VALUE);

//Infinity
console.log(Number.MAX_VALUE * 2);
console.log(-Number.MAX_VALUE * 2);

*/

/*

//NaN
let x;
console.log(x); //undefined
x = x + 2; //NaN
console.log(x);
//Statiska metoder
console.log(Number.isNaN()); //false
console.log(Number.isNaN(x)); //true



//Objektet Math

// π = Alt+P för att få tecknet π (endast på Mac)

PI = Math.PI
console.log(PI);

*/

/*

console.log(Math.E);
console.log(Math.abs(-8769)); //8769
console.log(Math.pow(2,2)); //4
console.log(Math.pow(2,4)); //2*2*2*2
console.log(Math.pow(3,2)); //9
console.log(Math.sqrt(25)); //Roten ur = 5

*/

/*

//Avrunda till heltal
let pris = 10.40;
console.log(Math.round(pris)); //10
pris = 10.50;
console.log(Math.round(pris)); //11
console.log(pris.toFixed()); //11

let tal = 10.10;
console.log(Math.ceil(tal)); //11
console.log(Math.floor(tal)); //10


console.log(Math.max(3,9)); //9 = Största talet
console.log(Math.min(3,9)); //3 =Minsta talet

*/


/*
function capitalize(str)
{
    //Den första bokstaven
    let firstChar = str.charAt(0);
    //Omvandlar första tecknet till versal
    firstChar.toUpperCase();
    //Hämta resten från tecken 2 (index 1) till slutet
    let resten = str.slice(1); //Eller substring(1)
    //Skapa en ny sträng
    let result = firstChar + resten;
    return result;
}

let test = "hej och välkommen";
console.log(capitalize(test));

*/

//W3resource.com

/*

function capitalize_v2(str)
{
    return str.charAt(0).toUpperCase() + str.substring(1);
}

console.log(capitalize_v2('hej och välkommen!'));



// ... tar bort []

//Hitta största talet i en Array i en funktion

function maxArray(minArray)
{
    return Math.max(...minArray);
}
console.log(maxArray([345, 543, 322, 76])); //543

*/

//Slumptal
console.log(Math.random()); //Mellan 0 och 1
console.log(Math.floor( Math.random() * 10) + 1); //Mellan 1 och 10
console.log(Math.floor( Math.random() * 100) + 1); //Mellan 1 och 100
console.log(Math.floor( Math.random() * 1000) + 1); //Mellan 1 och 1000

