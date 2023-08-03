// a = 0
// if(a==0){
//     console.log("The number is 0 and adding 1 making it positive")
// }

array = [10,20]
array.forEach(element => {
    console.log(element)
    
});

console.log("After change:")
array.push("3rd year")
for (var ele of array){
    console.log(ele)
}

array.pop()

console.log("After pop")
if (array.length >0){
    console.log("e")
}

a = {
    car:"audi",
    model:"A8",
    airbags:8,
    wheels:5,
    color:"blue"
}
// Array
const array = [10,20,"PW",23.08 , Date() ]
console.log("Before change:")
for (var ele of array) {
    console.log(ele)
}

// after
console.log("After change:")
array.push("3rd year")
for (var ele of array) {
    console.log(ele)
}

// pop
array.pop()
console.log("After pop:")

for (var ele of array) {
    console.log(ele)
}

array.pop()
array.pop()
array.pop()
array.pop()
array.pop()

if (array.length > 0) {
    console.log ("Elements are in the array")
    for (var ele of array) {
        console.log(ele)
    }
}
else {
    console.log ("No elements are in the array")
}

array.push(1)
if (array.length > 0) {
    console.log ("Elements are in the array")
    for (var ele of array) {
        console.log(ele)
    }
}
else {
    console.log ("No elements are in the array")
}