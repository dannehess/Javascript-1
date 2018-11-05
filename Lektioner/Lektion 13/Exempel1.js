/*
    //INLINE-JAVASCRIPT (!=)

    <button onclick="document.body.bgColor='red'">Röd</button>
    <button onclick="document.body.bgColor='green'">Grön</button>
    <button onclick="document.body.bgColor='blue'">Blå</button>
    <button onclick="document.body.bgColor='pink'">Rosa</button>
    <button onclick="document.body.bgColor='yellow'">Gul</button>

*/

/*
<p id="demo">Hej</p>

<button onclick="myFunction()">Klicka på mig!</button>

<script>

function myFunction(){

    document.getElementById('demo').innerHTML = "Hello";

}
*/


/*

<p id="demo">Hej</p>

<button onclick="myFunction()">Klicka på mig!</button>

<script>

function myFunction(){

    document.getElementById('demo').innerHTML = 'Helloooo';
    let el = document.getElementById('demo');
    el.innerHTML = "Hello2";
    el.style.fontSize = "50px";
}

*/


/*

<p>Hej</p>
<p>Hej</p>
<p>Hej</p>

<button onclick="myFunction()">Klicka på mig!</button>
<button onclick="changeText()">Klicka på mig!</button>


<script>

function myFunction(){
    let el = document.getElementsByTagName('p');
for(let i = 0; i < el.length; i++){

el[i].innerHTML = "Hello2222";
}
}

function changeText(){

let el = document.getElementsByTagName('p')[0];
el.innerHTML = "Hello333333";
el.style.color = "green";
}

*/

//Göm text alla <p>

/*

<p>Hej</p>
<p>Hej</p>
<p>Hej</p>

<button onclick="hideMe()">Klicka på mig!</button>

<script>

function hideMe()
{
    let h = document.getElementsByTagName('p');
    for(let i = 0; i < h.length; i++)
    {
        h[i].style.display = 'none';
    }

}



</script>

*/


/*

VISA KLOCKAN - TRYCK PÅ KNAPP

      <p id="time"></p>
<button onclick="showTime()">Klicka här</button>

<script>
        function showTime()
        {
            setInterval(showTime,0, 50)

            let t = document.getElementById('time').innerHTML = new Date().toTimeString().substring(0, 8);
        }
        
        </script>

*/



//VISA / DÖLJ TEXT


/* 

<p id ="demo">Dölj denna text....</p>

<button onclick ="hideAll()">Dölj</button>
<button onclick = "showAll()">Visa</button>


<script>

        function hideAll()
    {
        let pp = document.getElementById('demo');
        pp.style.display = 'none';
    }

    function showAll()
    {
        let pp = document.getElementById('demo');
        pp.style.display = 'block';
    }




</script>

*/

//VISA GÖM TEXT MHA ONMOUSEOVER / ONMOUSEOUT

/*

<button 
onmouseover="hideElementById('demo')"
onmouseout="showElementById('demo')">
Håll musen över denna knapp</button>

<p id ="demo">Visa/Dölj denna text....(onmouseover / onmouseout)</p>


<script>


    function hideElementById()
    {
        document.getElementById('demo').style.display = "none";
    }
    
    function showElementById()
    {
        document.getElementById('demo').style.display = "block";
    }
    


</script>

*/

//DÖLJ TEXT GENOM ATT KLICKA PÅ TEXTEN
//<p onclick="this.style.display='none'">Dölj texten genom att klicka här</p>


// OLIKA LÖSNINGAR INLOGG

/*

    <script>
    
    //Hämta nödvändiga element
    let elUser = document.getElementById('username');
    let elPass = document.getElementById('password');
    let elMsgUser = document.getElementById('feedbackUser');
    let elMsgPass = document.getElementById('feedbackPass');
       
    //Koppla events till olika funktioner
        elUser.oninput = checkUsername;
        elPass.oninput = checkPassword;
    
        function checkUsername()
        {
            let elMsg = document.getElementById('feedbackUser');
            elMsg.innerHTML = elUser.value.length<5? "Ange minst 5 teckennnnn" : "";
            elMsg.style.color = "red";
        }
        
        function checkPassword()
        {
            let elMsg = document.getElementById('feedbackPass');
            if(elPass.value.length < 8)
                elMsg.innerHTML = "Lösenordet måste innehålla minst 8 tecken";
                elMsg.style.color="red";
            else
                elMsg.innerHTML = "";
        }


    </script>

*/


//BERÄKNA MOMS
/*

  <h1>Exempel 3</h1>

    Ange pris exkl. moms:
    <input type="text" id="elPrice1">
    <button id="btnPrice">Beräkna pris inkl. moms</button>
    <p id="elPrice2">RESULAT:</p>

    <script>
        //Hämta nödvändiga element
        let elPrice1 = document.getElementById('elPrice1');
        let elPrice2 = document.getElementById('elPrice2');
        let btnPrice = document.getElementById('btnPrice');
        
        //Koppla event till knappen (Inga parenteser)
        //  ONINPUT --- 
        elPrice1.oninput = getPrice;
        //  ONCLICK --- 
        btnPrice.onclick = getPrice;

        //Skapa funktionen
        function getPrice()
        {
            elPrice2.innerHTML = elPrice1.value * 1.25;

        }

    </script>

    */

//VISA DATUM OCH KLOCKA - RENARE KOD NEDANFÖR

/*

 <h1>EXEMPEL 4</h1>

    <button id="btnDate">Visa dagens datum</button>
    <button id="btnTime">Visa klockan</button>
    <p id="date"></p>
    <p id="time"></p>
    
<script>
        
        //Hämta en referens till knappen
let btnDate = document.getElementById('btnDate');

        //Koppla event med standard DOM Events
        //btnDate.onclick = displayDate;

        //Koppla en event listener till knappen
btnDate.addEventListener("click", displayDate);
btnTime.addEventListener("click", displayTime);

        //Skapa funktionen, Hämta datum
function displayDate()
{
    document.getElementById('date').innerHTML = new Date().toLocaleDateString();
}

        //Skapa funktionen, Hämta tiden
function displayTime()
{
    setInterval(displayTime);
    document.getElementById('time').innerHTML = new Date().toLocaleTimeString();
}


</script>

*/

//SHOWHIDE
/*

<button id="btn">Röd</button>
<p id="a">heklöafsldf</p>

<script>

document.getElementsByTagName('button')[0];
btn.onclick = showhide;

function showhide()
{
a.style.display="none";
}

</script>
*/