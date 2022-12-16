class Employee{

    setEmpDetails(id, Name, Phone){
        this.id = id;
        this.Name=Name;
        this.Phone = Phone;
    }

    GetEmpId(){
        return this.id;
    }

    GetEmpName(){
        return this.Name;
    }


    GetEmpPhone(){
        return this.Phone;
    }


}

let emp1 = new Employee()
emp1.setEmpDetails(1,'John',32342343)
console.log('emp1=='+ emp1.GetEmpId());
console.log('emp1=='+ emp1.GetEmpName());
console.log('emp1=='+ emp1.GetEmpPhone());
