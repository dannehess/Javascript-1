//ITERATION

for (let i = 1 ; i <= 10 ; i++) {
    if(i%3 === 0)
       console.log(i + ' är delbart med 3');
 }


// Skriv ut alla jämna tal mellan 1 och 20


for(let i = 1; i<=20; i++)
{
    if(i%2 === 0)
    {
    console.log(i);
    }
}

// Skriv ut alla tal mellan 1 och 100, men enbart tal som är jämnt delbart med 5.


for(let i = 1; i <=100; i++)
{
    if (i%5 === 0)
    {
        console.log(i);
    } 
}

// Iteration över en array

let apa = ['Apa1', 'Apa2', 'Apa3', 'Apa4'];

for(let i = 0; i < apa.length; i++)
{
    console.log(apa[i]);
}


//Iterera över en array av objekt

let dator = 
[
{name: 'Daniel', lastName: 'Hessling'},
{name: 'Daniel', lastName: 'Hessling'},
{name: 'Daniel', lastName: 'Hessling'},
{name: 'Daniel', lastName: 'Hessling'}
];

for(let i = 0; i < dator.length; i++)
{
 console.log(dator[i].name);        //Förnamnet
 console.log(dator[i].lastName);    //Efternamnet   
}

//For-in-satsen

let data = [
    {name:'Mahmud', email:'mahmud@email.com'},
    {name:'Kalle' , email:'kalle@email.com'},
    {name:'Erik'  , email:'erik@email.com'}
  ];
  for (let i in data) {
     console.log(data[i].name);
  }

  // For-of-satsen
let data = [
    {name:'Mahmud', email:'mahmud@email.com'},
    {name:'Kalle' , email:'kalle@email.com'},
    {name:'Erik'  , email:'erik@email.com'}
  ];
  for (let obj of data) {
     console.log(obj.name);
  }

//While-satsen – Exempel
let i = 1;
while (i<=10) {
   console.log(i + ' x 5 = ' + i*5) ;
   i++;
}


//Break-satsen
while(true){
    let name = prompt("Vad heter du?");
    if(name === null){
      alert('Hejdå');
break; }
    alert('Välkommen ' + name);
}  // Slut på while-satsen
// Hit kommer vi när break exekveras


//Continue-satsen
while (true) { // Hit kommer vi när continue exekveras
    let name = prompt("Vad heter du?");
    if (name === '')
      continue;
    if (name === null)
      break;
     alert('Välkommen ' + name);
  }
  // Hit kommer vi när break exekveras


//Nästlade loopar
let table = '';
for (let row = 1; row <= 10; row++) {
  for (let col = 1; col <= 10; col++) {
    table += col * row + '\t';
}
  table += '\n';
}
console.log(table);


//Do...While – Exempel
let again = true;
do{
   alert('Välkommen till spelet!');
   again = confirm("Vill du spela igen?");
}while(again);
alert('Hejdå!');

/* 

Rekursion
• Rekursion uppstår när någonting definieras i termer av sig själv.
• Rekursion i JavaScript är förmågan att anropa en funktion från sig själv!
“self-calling-function”

*/

//En rekursiv funktion

function sum(n) {
    if (n === 0) return 0;
    else return n + sum(--n);
  }
  console.log(sum(5));




















