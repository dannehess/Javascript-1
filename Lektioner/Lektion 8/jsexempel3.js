//Arbeta med JavaScripts globala objekt

//Varning. Problem med var
/*
    Om du deklarerar variabler som råkar ha samma namn som objeketets egenskaper
    så skriver du över dessa egenskaper.
    Lösning: använd let istället.
*/
/*

let innerWidth = 100;
var innerHeight = 200;

function demo(){
    console.log(this.innerWidth + "px");
    console.log(this.innerHeight + "px");
    //this pekar på ett objekt som heter Window (i webbläsarens)
}
*/
// demo();

/*
//Två bra metoder i objektet Window

//Några användbara metoder i objektet Window

//1. prompt (Inmatningsfält) och alert (popup-ruta)
let greeting = prompt("Hello World!");
alert("Hej " + person);

//2. setTimeOut. Kör en funktion efter ett antal sekunder.

function helloPopup()
{
    alert("Hello " + person);
}

setTimeout(helloPopup, 3000); //3000 = 3 sekunder.


//3. setInterval. Kör en funktion flera gånger efter förutbestämd intervall.
setInterval(helloConsole, 3000);

function helloConsole()
{
    console.log(person);
}

*/

/*

console.log(document.title);
console.log(document.lastModified);
console.log(document.URL);

*/


//Window API

/*
    function minaKurser (name, teacher, points, grade, done)
    {
        this.name = name;
        this.teacher = teacher;
        this.points =  points;
        this.grade = grade;
        this.done = done;
    }
        
    let projektmetodik = new minaKurser ("Projektmetodik", "Per Söderberg", "25", "VG", true);
    let javascript1 = new minaKurser ("JavaScript1", "Mahmud Al Hakim", "35", "G", false);


    console.log(projektmetodik);
    console.log(javascript1);
 */


/*

Skapa ett objekt som beskriver en hiss.
Hissen har en enda egenskap, plan som lagrar aktuell våning.
Hissen har två metoder goTo () och where()
Metoden goTo() accepterar en parameter som sätter aktuell våning.
Vid anrop, t.ex. goTo(5) visar metoden i konsolen texten: ”Hissen åker till plan 5”. Metoden where() returnerar våningsnumret (en siffra).
Vid anrop visar metoden i konsolen texten: ”Hissen är på plan 5 just nu”.

*/

/*

function Elevator()
{
    plan: 0;

    goTo(plan)
{
    this.plan = plan;
    return "Hissen åker till plan " + plan;
}

where()
{
    return "Hissen är på plan " + plan + " just nu.";
}
};

goTo(5):

*/

/*



• Skapa en array som innehåller info om dina favoritrecept (minst 2 recept)
• Varje recept är ett objekt som har följande egenskaper.
• Titel (string)
• Gör så här (string)
• Ingredienser (array)
• OBS! Egenskapen Ingredienser är alltså en array som innehåller en lista över alla ingredienser.


function Person(name, age){
    this.name = name;
    this.age = age;
    this.recept = [];
 }
 let mahmud = new Person("Mahmud Al Hakim" , 45);
 let mehdi  = new Person("Mehdi Al Hakim"  , 23);
 let hoda   = new Person("Hoda Al Haim"    , 21);
 mahmud.recept.push(tacos);
 mahmud.recept.push(hoda);
 console.log(mahmud.children);


 */

 /*

• Skapa en array som innehåller info om dina favoritrecept (minst 2 recept)
• Varje recept är ett objekt som har följande egenskaper.
• Titel (string)
• Gör så här (string)
• Ingredienser (array)
• OBS! Egenskapen Ingredienser är alltså en array som innehåller en lista över alla ingredienser.



___________________________


*/

/*

function Recept(titel, howto) {
    this.titel = titel;
    this.howto = howto;
    this.ingrediens = [];
}


let tacos = new Recept("Tacos", "Stek köttfärsen, Servera!", ["Köttfärs", "Krydda", "Grönsaker", "Salsa", "Chips"]);
let pasta = new Recept("Spaghetti och Köttfärssås", "Stek köttfärsen, Servera!", ["Köttfärs", "Pasta", "Parmesan"]);


console.log(tacos.ingrediens);
console.log(pasta);

*/

/*

Skapa ett objekt som beskriver en hiss.
Hissen har en enda egenskap, plan som lagrar aktuell våning.
Hissen har två metoder goTo () och where()
Metoden goTo() accepterar en parameter som sätter aktuell våning.
Vid anrop, t.ex. goTo(5) visar metoden i konsolen texten: ”Hissen åker till plan 5”. Metoden where() returnerar våningsnumret (en siffra).
Vid anrop visar metoden i konsolen texten: ”Hissen är på plan 5 just nu”.

*/


/*

let Elevator = 
{
    plan: 0,

    goTo : function (thisplan)
    {
        plan = thisplan;
        return console.log("Hissen åker till plan: " + thisplan)
    },

    where : function ()
    {
        return console.log("Hissen är på plan: " + plan);
    },
};

Elevator.goTo(5);
Elevator.where();



*/








