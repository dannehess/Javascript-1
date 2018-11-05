//En konstruktor är en metod som skapara (initierar) ett objekt.
//Kallas även en konstruktör eller konstruerare.
//En konstrukor används som en "blueprint" för att skapa flera objekt av samma typ.
//Konstruktorer skrivs helst i PascalCase t.ex. Object,Person, Car osv.

/*

//Arbeta med konstruktorer 

//Construktor Notation
let daniel = new Object();

//Egenskaper
daniel.name = "Daniel Hessling",
daniel.age = 29;

//Metoder

//En metod som skriver ut info i console
daniel.print = function()
{
    console.log(this.name + " är " + this.age + " år gammal");
    return "Hej";
}

*/

// Literaler och konstruktorer är exakt samma 

//Repetition
//Skapa en objektliteral

/*
let kalle = 
{
    name : "Kalle Anka",
    age : 20,
    print:function()
    {
        console.log(this.name + " är " + this.age + " år gammal");
    },
    info:function()
    {
        return this.name + " är " + this.age + " år gammal";
    }
}
console.log(kalle);

//Lägg till flera egenskaper och metoder
kalle.mobile = "0704545454"

console.log(kalle);
*/



//En metod är en funktion inne i ett objekt

/*

//Använd objektets egenskaper
console.log(daniel.name);

//Använd objektets metoder
daniel.print();
console.log(daniel.print());
let i = daniel.info();
console.log(i);

//En metod som returnera en sträng
daniel.info = function()
{
    // return this.name + " är " + this.age + " år gammal ";
    return `${this.name} är ${this.age} år gammal.`
}

console.log(daniel.info());

*/




//Skapa ett objekt med hälp av en konstruktor (constructor notation)
//Ett nytt blankt objekt skapas med nyckelordet new och Object() som kallas en konstruktor (constructor)

/*

let mahmud  = new Object();
mahmud.name = "Mahmud Al Hakim";
mahmud.age  = 45;
mahmud.info = function () {
   console.log(this.name + " är " +
   this.age + " år gammal!");
}

console.log(mahmud);

*/

/*

var hotel = new Object();
hotel.name = "Quay";
hotel.rooms = 40;
hotel.booked = 25;

hotel.checkAvailability = function()
{
    return this.rooms - this.booked;
};

console.log(hotel);

*/

/*

//Skapa en array
//Arrayliteral
let persons = ["Daniel", "Kalle"];
//Arraykonstruktor
let cars = new Array();
cars[0] = "Volvo";
cars[1] = "Mazda";
cars = ["Volvo", "Mazda"];

console.log(persons);
console.log(cars);

*/

/*

//new skapar alltid objekt

//Sammanfattning - Att skapa ett objekt i JS
//1. Literal Notation
let vadsomhelst = {};

//2. Constructor Notation
let ettAnnatObjekt = new Object();


*/


//Skapa flera objekt med en egen konstruktor (Constructor function) - Skapa en egen konstruktor

/*

function Person(name, age) 
{
    this.name = name;
    this.age = age;
}

let daniel = new Person ("Daniel Hessling", 29);
let kalle = new Person ("Kalle Anka", 100);

console.log(daniel);
console.log(kalle);

*/

