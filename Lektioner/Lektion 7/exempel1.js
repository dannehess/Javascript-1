// Objekt

// Objektliteral (Object Literal)
// Skapa objekt med hjälp av {}

// Objekt skapas i JS mha {}

/*

let daniel = {
    name: "Daniel",
    age: 29,
    weight: 80,
    isMarried: false,
    plan: ;
    
    goTo: function()
    {
        console.log("Du är på plan " + this.plan);
    }

    where: function()
    {

    }
};

goTo(5);

*/
/*
let plan;

function hiss(plan)
{
    console.log("Du är på plan: " + plan);
}

hiss(5);

*/

/*

let floor = 0;

let Elevator =
{

    goTo(floor) 
    {
    console.log("Hissen åker till plan: " + floor);
    },
    where(floor)
    {
        console.log("Du är på plan: " + floor);
    }
};

Elevator.where(floor);
Elevator.goTo(3);
Elevator.goTo();
Elevator.where(floor);

*/

/*
let floor;

let Elevator =
{
goTo : function()
{

}

};

*/

/*

let Elevator = 
{
    floor: [],

    let goTo(floor[])
    {
        console.log("Hissen åker till plan: " + floor);
    }

    let where(floor)
    {
        console.log("Hissen är på plan: " + floor + " just nu.");
    }
};

goTo([5])


*/

/*
let Elevator = 
{
    floor: '',
    goTo : function (goToFloor)
    {
        console.log("Going to floor: " + goToFloor)
        floor = goToFloor;
    },
    where : function()
    {
        console.log("You are at floor: " + floor);
    },
};

Elevator.goTo(9);
Elevator.where();
*/

/*

let car =
{
name: "Fiat",
model: 500,
weight: "850 kg",
color: "Vit",

start : function ()
{
    console.log("Bilen startas");
},

drive : function ()
{
    console.log("Bilen kör");
},

brake : function ()
{
    console.log("Bilen bromsar");
},

stop : function ()
{
    console.log("Bilen stängs av");
}
};


car.start();
car.drive();
car.brake();
car.stop();

let newCar = 
{
    name: "Ford",
    model: 600,
    weight: "1000 kg",
    color: "Blå",
}

console.log(newCar.name) + newCar.name + car.brake();

*/


/*


Kopiera objekt
• Metoden assign() används för att kopiera objekt *1 let obj1 = { a: 1 };

let copy1 = Object.assign({}, obj1); • Enklare syntax fr.o.m. ES2018 *2
let copy2 = {...obj1};


*/

/*

let javaScript = 
{
course: "JavaScript 1",
teacher: "Mahmud",
school: "Nackademin",
weeks: 7,
period: "Vecka 40 - Vecka 47",
};


console.log(javaScript.course);

*/

function swap()
{
    let x = 12;
    let y = 20;

    console.log();

}

swap();

let a = 20;
let b = 30;

^a=b;

console.log(a);
console.log(b);
