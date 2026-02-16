export class Person {
    firstname : string;
    lastname : string;
    private age : number ;
    static COUNTRY: string = "Thailand";

    constructor(){
        this.firstname = ""
        this.lastname = ""
        this.age = 0
    }

    getFullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }
    setAge(age : number){
        this.age = age
    }
    getAge(){
        return this.age
    }
}