class Customer {
  private _firstName: string;
  private _lastName: string;

  constructor(fName: string, Lname: string) {
    this._firstName = fName;
    this._lastName = Lname;
  }

  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public get lastName(): string {
    return this._lastName;
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
}

let myCustomer = new Customer("Rounak", "Ghosh");

console.log(myCustomer);

console.log((myCustomer.firstName = "Radhe"));
console.log((myCustomer.lastName = "KRISHNA"));
