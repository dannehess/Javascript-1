
//Arbeta med inbyggda globala JS-Objekt

//Objeketet String

/*
let firstName = "Daniel";
console.log(typeof firstName); //Typen är string

let antal = firstName.length;
console.log(firstName.length); //6
console.log(antal); //6

//Konverterar till gemener
firstName = firstName.toLowerCase();
console.log(firstName);

//Konveterar till versaler
firstName = firstName.toUpperCase();
console.log(firstName);



//Konkatenering - Slå ihop strängar
lastName = 'Hessling';
let fullName = firstName.concat(' ', lastName);

console.log(fullName);

*/

/*

//JavaScript - strängar är oföränderliga - skapa ny variabel

//Konstruktor, Objekt alltid stora bokstäver

//Substring
let firstName = "Daniel";
let lastName = "Hessling";
let fullName = firstName + lastName;

console.log(fullName.substring(0,6));
//console.log(fullName.substring(6));

//Leta efter första mellanslaget
let space = fullName.indexOf(' ');
console.log(space);
console.log(fullName.substring(space+1));

//substr()
//'Daniel Hessling'
console.log(fullName.substr(7, 2));

//Strängar i JS indexeras på samma sätt som arrayer
console.log(fullName[0]); //Första bokstaven
//Skriv ut sista tecknet i strängen
console.log(fullName[fullName.length-1]);

let arrTest = [1,2,3];
console.log(arrTest.length); //Längd på array
console.log(arrTest[arrTest.length-1]); //Skriv ut sista elementet i arrayen

let newName = "Kalle Anka ";

//Skriv ut index på första mellanslaget
console.log(newName.indexOf(' ')); //5
console.log(newName.lastIndexOf(' ')); //10, Mellanslaget i slutet på strängen

console.log(fullName.charAt(1)); //A, andra elementet i strängen

//split() - //Tar bort valfritt tecken i array
let nameArray = fullName.split(' '); //I detta fallet mellanslaget
console.log(nameArray);
nameArray = fullName.split('');
console.log(nameArray);
nameArray = fullName.split(' ');
console.log(nameArray);

fullName = "Daniel;Hessling";
nameArray = fullName.split(';'); //Separera med ; eller |

fullName = "   Daniel   Hessling   ";
nameArray = fullName.split(' ');
console.log(nameArray);

nameArray = fullName.trim(); //Rensar bort mellanslagen i början och i slutet på en sträng
console.log(nameArray);

//Chaining - En sats istället för två föregående satser
nameArray = fullName.trim().split(' ');

*/


/*

fullName = "Daniel;Hessling";
console.log(fullName);

fullName = fullName.replace(';',' '); //Byt ut ; med mellanslag
console.log(fullName);

fullName = "     Daniel    Hessling   ";
//Rensa alla mellanslag men behåll ett
nameArray = fullName.replace(/ +/g , ' '); //RegExp (överkurs)
console.log(nameArray);

*/

//Escape-tecken
// \n new line
// \" för att visa " i en sträng
// \' för att visa ' i en sträng
// \t visar en tab
// \\ visa backslash


/*
console.log('Hej \n\n Välkommen till \'JS\'\n\nIdag har vi jobbat med string\n');
console.log('Hej \n\n Välkommen till \'JS\'');
console.log("Namn\tEpost");
console.log("Daniel\tdaniel.hessling@gmail.com");
console.log("Visa en backslash med dubbla \\");
*/

/*

//Arbeta med datum och tid
let today = new Date();  //Date = datumkonstruktor
console.log(today);
console.log(today.getDate()); // Allt
console.log(today.getDay()); // 3 = Onsdag
console.log(today.getMonth()); //9 = Oktober
console.log(today.getFullYear()); //2018

console.log(today.getHours()); //Timme
console.log(today.getMinutes()); //Minut
console.log(today.getSeconds()); //Sekund

//0 = Söndag, 1 = Måndag och så vidare..
//0 = Januari, 1 = Februari och så vidare..

console.log(today.toDateString()); //Wed Oct 17 2018
console.log(today.toTimeString()); //14:23:46 GMT+0200 (CEST)

*/

/*

let today = new Date();
console.log(today.getFullYear() + "-" + (today.getMonth()+1) + "-" + today.getDate());

console.log(today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());

let days = ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'];
let months = ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'];

console.log(days[today.getDay()] + " den " + (today.getMonth()+1) + " " + today.getFullYear());

*/

/*

Dag den xx månad år t.ex.
Onsdag den 17 oktober 2018
Tips: Använd arrayer för att lagra veckodagar och månader.

*/ 

