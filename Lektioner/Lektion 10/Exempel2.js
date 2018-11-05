//Truthy & Falsy

//Följande värden är alltid falska i JS
//0
//Null
//NaN
//False
//Tomma strängar '' eller ""
//Undefined

/*

if(false || 0 || null || NaN || undefined || '' || "")
{
console.log("Vi kommer aldrig hit");
}

let x = '';
if(x === '')
{
    console.log("x är en tom sträng");
}

if([])
{
    console.log("Vi har en array");
}

if("0")
{
    console.log("Vi har en nolla");
}
//OBS! En sträng som innehåller 0 är true


if(!NaN)
{
    console.log("Test på !NaN");
}

*/

/*

//Switch-satsen

function getDay()
{
    let day;
    let today = new Date().getDay();
    switch(today)
        {
            case 0: day = "Söndag"; break;
            case 1: day = "Måndag"; break;
            case 2: day = "Tisdag"; break;
            case 3: day = "Onsdag"; break;
            case 4: day = "Torsdag"; break;
            case 5: day = "Fredag"; break;
            case 6: day = "Lördag"; break;

        }
        return day;
    }

    console.log("Det är " + getDay().toLowerCase() + " idag.");

    */



   let personnumer = prompt("Personnumer (ååmmdd-xxxx)?");
   switch (personnumer.charAt(9)) 
   {
      case '0': 
      case '2': 
      case '4': 
      case '6': 
      case '8’: alert("Kvinna");
         break; 
      case '1':
      case '3':
      case '5': 
      case '7': 
      case '9’:
         alert("Man");
         break;
      default:
         alert("Felaktigt personnummer");
   }















