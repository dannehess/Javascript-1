function Person(name, epost, mobil, adress)
{
    this.name = name,
    this.epost = epost,
    this.mobil = mobil,
    this.adress = adress,

    this.print = function()
    {
        console.log(this.name + "\n\n" + this.adress.gatuadress + "\n" + this.adress.postnummer + this.adress.ort + "\n");
    }
}

    function Adress(gatuadress, postnummer, ort)
    {
        this.gatuadress = gatuadress,
        this.postnummer = postnummer,
        this.ort = ort
    }

let daniel = new Person ("Daniel Hessling", "daniel.hessling@gmail.com", "070 494 31 41",new Adress ("Maltesholmsgatan 141", "165 66", "\tHässelby"));
let kalle = new Person ("Kalle Anka", "kalle.anka@gmail.com", "070 343 21 21",new Adress("Disneygatan 24", "193 14", "\tDisneyland"));


    daniel.print();
    kalle.print();