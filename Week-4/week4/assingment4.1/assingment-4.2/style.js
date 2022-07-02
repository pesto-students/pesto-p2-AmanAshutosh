function Aadmi() { }

Aadmi.prototype.initialize = function(naam, umar)
{
    this.naam = naam;
    this.umar = umar;
}

// TODO: create the class Teacher and a method teach
var mastershaab = function() {
    this.padhana = function(subject){
        console.log(this.naam + " master shaab padha rhae hai " + subject);
    }
}
mastershaab.prototype = new Aadmi();
var him = new mastershaab();

him.initialize("Lakhan", 45);
him.padhana("Inherited");

/* Output : 
    Lakhan master shaab padha rhae hai Inherited
*/