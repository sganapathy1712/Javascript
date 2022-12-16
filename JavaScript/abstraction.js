function EmployeeDetails(name,Age,BaseSalary){
this.name = name
this.Age=Age
this.BaseSalary = BaseSalary;
let Bonus = 1000;

CalculateFinalSalary=function(){
let finalSalary = BaseSalary + Bonus;
console.log('Base Salary is '+BaseSalary)
console.log('Bonus  is '+Bonus)
console.log('Final Salary is '+finalSalary)
}

this.getEmployeeDetails=function(){
    console.log('Name is '+this.name+' Age is '+this.Age + ' Base Salary is '+this.BaseSalary)
    CalculateFinalSalary();
}

}

let Emp1 = new EmployeeDetails('John',30,2000)
Emp1.getEmployeeDetails()
//Emp1.CalculateFinalSalary()