// define a class to hold the car details
class carDetails{
    constructor(name,model,price){
        this.name = name;
        this.model = model;
        this.price = price;
    }
    output(){
        return `The name of the car is ${this.name} ,its model is ${this.model} and it costs ${this.price} only.`;
    }
}
// add a new property to the class using a prototype
carDetails.prototype.stock = 'In stock';
// create an instance of the car object
let car1 = new carDetails('mercedez','toyota','1000000 USD');
console.log(car1.output());