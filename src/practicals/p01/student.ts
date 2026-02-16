export class Student {
  firstname: string;
  lastname: string;

  constructor() {
    this.firstname = "";
    this.lastname = "";
  }

  printName(): string {
    return `${this.firstname} ${this.lastname}`;
  }
}
