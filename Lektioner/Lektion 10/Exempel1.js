/*

let myRepeat = 'Ha! '.repeat(3);
console.log(myRepeat);

*/

/*

let score = 49;

//If-satsen
if(score>50)
{
    congratulate();
}

//Else-satsen

{
    encourage()
}

function congratulate()
{
console.log("Grattis!");
};

function encourage()
{
    console.log("Have another go!");
}

*/

/*

let score = 75;
if (score >= 50) {
    congratulate();
}
function congratulate(){
    let msg ='Congratulations! ';
    msg += 'Proceed to the next round.';
    console.log(msg);
}

*/

/*

let x = '5';
let y = 5;
if (x == 5)  // True! Farligt
   console.log(x + 2); // 52 !!!
if (y === 5) // True! Säkrare
   console.log(y + 2); // 7

*/


/*

   // == eller ===
let x = '5' // eller "5"
console.log(typeof x); // String

let y = 5;
console.log(typeof y); // Number

if (x == 5) // Farligt!!!
{
    console.log(x +5); // 55 (Konkatenering)
}

if (x == 5) // Farligt
{
    console.log(Number(x) +5); // FEL!!!
}

if (y === 5)    
{
    console.log(+y + 5); // 10  FEL!!
}

if (y === 5)    
{
    console.log(y + 5); // 10
}

if (y == 5)
{
    console.log(y + 10);  // Ok. men...
}

if (x === 5)    // False då x är en string...
{
    console.log(x + 2);
}

x = '5'
if (x != 5)    // False
{
    console.log(x + 2);
}

*/

/*

//if...else-satsen
let hour = new Date().getHours();
//console.log(hour);
let greeting '';
if (hour < 12) {
   greeting = "God morgon";
}
else if (hour >= 12) {
   greeting = "God dag";
}
console.log(greeting);

*/

/*

let hour = new Date().getHours();
if (hour < 11) {
   greeting = "God morgon";
}
else if (hour < 20) {
   greeting = "God dag";
}
else{
   greeting = "God kväll";
}
console.log(greeting);

*/

/*

//Ternary - operatorn
function getFee(isMember) {
    return (isMember ? "20kr" : "100kr");
}
console.log(getFee(true));  // 20kr
console.log(getFee(false)); // 100kr

*/


/*

//Ternary - operatorn   ? :
//Villkor ? Om sant : Om falskt

//Returnera ett värde

function getFee(isMember)
{
return (isMember ? "20kr" : "100kr");
}

console.log(getFee(true)); //20kr
console.log(getFee(false)); //100kr


//OM EN SATS BEHÖVS INGA MÅSVINGAR

//Exakt samma funktion men utan Ternary
//Nackdel om många villkor

function getFeeVersion2(isMember)
{
    if(isMember)
    {
        return "20kr";
    }
    else
    {
        return "100kr";
    }
};

console.log(getFeeVersion2(true));
console.log(getFeeVersion2(false));

/*

let age = prompt("Hur gammal är du?")
let voteable = (age < 18) ? "Du får inte rösta" : "Du får rösta";
console.log(typeof age); //string;
console.age(age<18); // "17"<18 true

let age = +prompt("Hur gammal är du?");
let age = Number(("Hur gammal är du?"));

let voteable = '';
if(age<18)
{
    voteable = 'Du får inte rösta!';
}
else
{
    voteable = "Du får rösta!";
}

//Omvandla logiken ovanför till ternary istället
//? :

let voteable = (age < 18) ? "Du får inte rösta" : "Du får rösta";

Villkor ? Gör detta om sant : Gör detta om falskt

alert(voteable);

*/

//Steg 1. Läs in data

/*
antaletMinuter = prompt("Ange antalet minuter?");
kostnadenPerMinut = prompt("Ange kostnaden per minut");

let rabatt = 0.10;

if(antaletMinuter >=1000)
{
    totalKostnad = (antaletMinuter * kostnadenPerMinut) * 0.9;
}

else
{
    totalKostnad = antaletMinuter * kostnadenPerMinut;
}

let resultat = 'Din kostnad per månad är: ' + totalkostnad;
resultat += '\n';
resultat += 'Din rabatt är: ' + rabatt;

alert(resultat);

*/

/*

function promptAge() {
    let age = prompt("Hur gammal är du?");
    if (age == null || age == "")
    console.log("Felaktig inmatning");
 return;
    let voteable = (age < 18) ? "Du får inte rösta!"
                              : "Ok. Du får rösta";
    alert(voteable);
 }
 promptAge();

*/

/*

Truthy & Falsy
• Följande värden är alltid falska (falsy values)
1) false
2) 0 (noll)
3) '' eller "" (tom string)
4) null
5) undefined
6) NaN (t.ex. vid division med noll)
• Allt annat är sanna värden (truthy) t.ex. strängen "0" och en tom array [ ]

*/

