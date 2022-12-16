/**
 * Process where one class acquires properties(methods and fields) from another class
 * Parent - Child
 * Super - Sub
 * Base - Derived
 */

class Car{

    setName(Name){
        this.Name = Name;
    }
    startEngine(){
        console.log('Engine started for '+this.Name)
    }
 stopEngine(){
        console.log('Engine stopped for '+this.Name)
    }


}

class Toyoto extends Car{

    topSpeed(speed){
       console.log('Top speed of this '+this.Name +'is'+ speed)
    }
    
}

let myCar = new Toyoto();
myCar.setName('Camry')
myCar.startEngine()
myCar.topSpeed(200)
myCar.stopEngine()
