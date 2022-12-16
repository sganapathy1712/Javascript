/**
 * in JS, every function has a property called prototype..
 * By default, it is empty.. but we can add properties and methods to it.
*/

let EmpDetails = function(Name, Age){
this.Name=Name;
this.Age=Age;

};

EmpDetails.prototype.getName=function(){
    return this.Name;
}

EmpDetails.prototype.getAge=function(){
    return this.Age;
}


let emp1 = new EmpDetails('John',18)
let emp2 = new EmpDetails('Ravi',29)
let emp3 = new EmpDetails('Ramya',32)

console.log('Emp Name'+emp1.getName())
console.log('Emp Age'+emp2.getAge())