let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
        let result = num * num
        return result
}

let value = square(3)
let otherVaule = square(10)

console.log(value)
console.log(otherVaule )

// convert F to C


let convertFtoC = function(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9

    return celsius
}
let valueC = convertFtoC(32)
let otherValueC = convertFtoC(68)

console.log(valueC)
console.log(otherValueC)
// caaal