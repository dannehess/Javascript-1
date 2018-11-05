//Array literal
let cars = ["Saab", "Volvo", "BMW"];

//Array constructor
let cars = new Array("Saab", "Volvo", "BMW");

// Literal = Värdet i elementet/variabeln

//Konstruktorer har alltid vanliga parenteser (Har en bugg)

//Arbeta med arrayer ------------------

//Skapa en tom array
let cars = [];

//Skapa en array som innehåller data
let cars = ["Saab", "Volvo", "BMW"]
//Detta är en array-literal

//Skapa en array med hjälp av en konstruktor (Skapas alltid med en stor bokstav)
let cars = new Array (1, 2, 3);

//En tom array - Används för att förtydliga att detta är en ny Array
let cars = new Array ();

//Att komma åt data, Exemplet skriver ut det tredje elementet
console.log(cars[2]);
//let cars = ["Saab", "Volvo", "BMW"];

//Exemplet skriver ut hela Arrayen
//console.log(cars[]);

//Lagring av en kopia
let bil1 = cars2[0];
console.log(bil1);

//Ändra innehållet i ett element i en array
let cars2 = ["Saab", "Volvo", "BMW"];
cars2[0] = "Mazda";
console.log(cars2);
console.log(bil1);

//En array i JS kan innehålla olika typer 
let person = ["Daniel", "Hessling", 29, true];

//Du kan skapa 4 olika variabler istället för en array.
let firstName = "Daniel";
let lastName = "Hessling";
let age = "29";
let gift = true;

//Hitta antal element med egenskapen length
let person = ["Daniel", "Hessling", 29, true];
let antal = person.length;
console.log(antal);

//Sortera en array - Metoden ändrar arrayen och orginalsorteringen finns inte kvar
let cars2 = ["Saab", "Volvo", "BMW"];
console.log(cars);
cars.sort();
console.log(cars);

