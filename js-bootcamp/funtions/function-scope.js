
let convertFtoC = function(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9

    if ( celsius <=0){
         let isFreezing = true
    }

    return celsius
}
let valueC = convertFtoC(32)
let otherValueC = convertFtoC(68)

console.log(valueC)
console.log(otherValueC)