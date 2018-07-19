var Car = function Car(year,make,model){
    this.Year = year;
    this.Make = make;
    this.Model = model;
} ;

var cars = []


cars.push(new Car(2015,"ford","fusion"));
cars.push(new Car(2013,"Toyota","Corolla"));
cars.push(new Car(2012, "toyota","rav 4") )




for(var i= 0; i< cars.length; i++) {
    console.log(cars[i].Year + " " +cars[i].Make + " " + cars[i].Model);
}