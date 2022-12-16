// //arrays

// let x =[1,2,3,4]
// console.log(x)

// let fruits = ['Apple','Orange','Banana']
// console.log(fruits)

// let cars = new Array('Merc','Ford','Renault')
// console.log(cars)
// console.log(cars[2])

// cars[1]='Honda'
// console.log(cars[1])

// fruits.push('Cherry')
// console.log(fruits)
// console.log(fruits.length)

let fruits = ['Apple','Orange','Banana']
 console.log(fruits)
 fruits.pop() // last element removed
 console.log(fruits)
 fruits.shift() // first element removed
 console.log(fruits)
 fruits.push('Cherry') // add an element at the end
 console.log(fruits)
 fruits.unshift('Tomato') // add an element at the beginning
 console.log(fruits)

 delete fruits[1] // position still remains.. empty spae
 console.log(fruits)
fruits[1]='Orange'
console.log(fruits)

fruits[1]='Orange'
console.log(fruits)

let citrusFruits = fruits.slice(0,2)
console.log(citrusFruits)
