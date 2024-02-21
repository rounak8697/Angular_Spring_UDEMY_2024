import { Human } from "./Human";

export class Man extends Human {
  constructor(
    fName: string,
    lName: string,
    private _gendar: string,
    private _hasBeard: string
  ) {
    super(fName, lName);
  }

  public get gendar() {
    return this._gendar;
  }
  public set gendar(value) {
    this._gendar = value;
  }

  public get hasBeard() {
    return this._hasBeard;
  }
  public set hasBeard(value) {
    this._hasBeard = value;
  }

  getInfo(): string {
    return (
      super.getInfo() +
      ` Information About a Man :  1. Gender :${this._gendar}  2. Features : ${this._hasBeard}`
    );
  }

  describeFeature(): string {
    return ` Man should respect every being `;
  }
}
