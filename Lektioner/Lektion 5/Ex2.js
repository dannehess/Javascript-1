// 
//Skapar en ny Array med 10 element
let kurser = 
["Projektmetodik", 
"Javascript 1", 
"Javascript 2", 
"Javascript 3", 
"Javascript 4",
"LIA 1", 
"LIA 2", 
"HTML och CSS",
"Frontend-Projekt", 
"Examensarbete"];

//Sorterar elementen i bokstavsordning
kurser.sort();

//Skriver ut den sorterade arrayen
console.log(kurser);

//Skriver ut antalet element
console.log(kurser.length);

//Skapar en ny array
let customers = ["Daniel", "Olle", "Erik", "Pelle", "Rikard"];

//Hoppar från första elementet -1 tillbaka till sista elementet och skriver ut
console.log(customers.slice(-1)[0]);
console.log(customers[customers.length-1]);
let sista = customers[customers.length-1];
console.log(sista);

//Skapar en ny array
let Array = ["Äpple", "Apelsin", "Banan", "Melon"];

//Ändrar värdet på tredje elementet
Array[2] = "Vindruva";

//Skriver ut tredje elementet
console.log(Array[2]);

//Skriver ut den arrayen med det nya värdena
console.log(Array);

//Skapar en tom array
let stack = [];

//Anger elementens värden -- Push lägger till element (sist)
stack.push("JavaScipt 1");
stack.push("JavaScript 2");
stack.push("JavaScript 3");
stack.push("JavaScript 4");

//Skriver ut hela arrayen
console.log(stack);

//Skriver ut antal element i arrayen
console.log(stack.length);

//Ta bort ett element


stack.pop(); //Tar bort det sista elementet, Kan bara ta bort det sista elementet
console.log(stack);

//Spara sista elementet innan borttagning
let kurs = stack.pop();
console.log(stack);
console.log(kurs);

let currentLength = stack.push("Bla bla bla");
console.log(currentLength);
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log(stack);

//Mer om array-konstruktorn
let test1 = new Array (10,20,30);
console.log(test1);
console.log(test1.length);

//Vad gör denna sats? Skapar en array med 1973 tomma element
let test2 = new Array (1973);
test2.push(2018);
test2.push(2008);

//Rätt lösning
let test2 = new Array ('1973');
test2.push('2018');
test2.push('2008');


console.log(test2);
console.log(test2.length);
let test3 = [10];
console.log(test3);
console.log(test3.length);

//Vad gör denna sats?
let test4 = new Array('10');
console.log(test4);
console.log(test4.length);

