"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer_1 = require("./Customer");
var myCustomer = new Customer_1.Customer("Rounak", "Ghosh");
console.log(myCustomer);
console.log((myCustomer.firstName = "Radhe"));
console.log((myCustomer.lastName = "KRISHNA"));
