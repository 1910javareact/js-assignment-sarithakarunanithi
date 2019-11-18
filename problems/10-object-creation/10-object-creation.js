/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

let person = {
    firstName: "Saritha",
    lastName : "Karunanithi",
    education: "Masters in Microbioligy"
}

function myFunction(firstName,lastname,education) {
    this.firstName = firstName
    this.lastName = lastname
    this.education = education   
}
let person1 = new myFunction("Saritha", "Karunanithi", "Microbiology");

class personClass{
    constructor(firstName,lastName,education){
        this.firstName = firstName
        this.lastName = lastName
        this.education = education
    }
}
let person2 = new personClass("Selva", "Kumar", "PhD"); 

console.log(person);
console.log(person1);
console.log(person2);




