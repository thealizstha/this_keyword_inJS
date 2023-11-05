// this keyword in js

let person = {
    firstname: "Aliz",
    sayHello() {
        console.log("Hello! I am" + this.firstname + "and I have a" + car.brand + "car.");
    }
};
let car = {
    brand: "Iconic",
    model: "safari"
};
person.sayHello();