export abstract class Human {
  constructor(private _firstName: string, private _lastName: string) {}

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

  getInfo(): string {
    return `FirstName= ${this._firstName}, LastName = ${this._lastName}`;
  }

  abstract describeFeature(): string;
}
