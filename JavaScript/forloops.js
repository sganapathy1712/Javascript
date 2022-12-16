// let x = 20
// for(i=1;i<=x;i++)
// {
//     console.log("i is "+i)
// }

let fruits = ['Apple','Orange','Banana']
let x;
for(x in fruits){
    console.log('fruit is '+fruits[x])
}

for(x of fruits){
    console.log('fruit is '+x)
}
