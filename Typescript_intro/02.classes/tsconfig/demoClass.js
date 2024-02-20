"use strict";
class Customer {
    constructor(fName, Lname) {
        this._firstName = fName;
        this._lastName = Lname;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
let myCustomer = new Customer("Rounak", "Ghosh");
console.log(myCustomer);
console.log((myCustomer.firstName = "Radhe"));
console.log((myCustomer.lastName = "KRISHNA"));
