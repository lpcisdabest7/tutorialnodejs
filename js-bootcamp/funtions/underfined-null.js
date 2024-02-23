//undefined for variable 
let name

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

// console.log(name)

// underfined for funtion 

console.log('Underfined for funtion arguments')


let square = function (num){
    console.log(num)
}

let result = square()
console.log(result)

let age = 37
age = null
console.log(age)
