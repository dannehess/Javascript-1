//Skapa egna konstruktorer (Constructors)

//Skapa en blueprint (ritning) på en helt ny grej. t.ex personer, bilar..

//Exempel - Skapa en konstruktor som beskriver en person
//Person blir en ny typ (Prototyp)

/*

function Person(name, age)
{
    this.name = name;
    this.age = age;
}



//Skapa flera objekt av Person() = Skapa nya instanser (- Person = En konstruktor)
let daniel = new Person("Daniel Hessling", 29); //Vi kan inte använda {}
let kalle = new Person("Kalle Anka", 100);

//daniel och kalle blir två nya referenser till två olika objekt

//Byta värden
daniel.name ="Danne";

//Lägga till egenskaper
daniel.weight = 84;

console.log(daniel);

*/

/*

function Person(name, age) 
{
    this.name = name;
    this.age = age;
    this.children = [];
}

let daniel = new Person ("Daniel Hessling", 29);
let kalle = new Person ("Kalle Anka", 100);


//Skapa en array av ett antal objekt
let persons = [daniel, kalle];
console.log(persons[0].name);
//Ändra namnet
persons[0].name = "Daniel";
console.log(persons[0].name);

//Objekt kan innehålla arrayer
// daniel.children = [];


daniel.children.push(kalle);

console.log(daniel);

*/

function Person(name, age) 
{
    this.name = name;
    this.age = age;
    this.children = [];
}

let daniel = new Person ("Daniel Hessling", 29);
let kalle = new Person ("Kalle Anka", 100);


//Skapa en konstruktor som beskriver en bil

function Car (regnr, fabrikat)
{
    this.regnr = regnr;
    this.fabrikat = fabrikat;
}

//Skapa en instans av Car = Skapa ett objekt

let car1 = new Car ("ABC 123 ", "Volvo");
let car2 = new Car ("FGH 789", "Saab");
let car3 = new Car ("RTY 456 ", "Mazda");

console.log(car1);
console.log(car2);
console.log(car3);

// console.log(car1.regnr);

//Daniel och Kalle blir två nya referenser till två olika objekt

//Daniel har köpt car1, car2 och car3 (3 bilar)

daniel.cars.push(car1, car2, car3);

console.log(daniel.cars[0].regnr);




