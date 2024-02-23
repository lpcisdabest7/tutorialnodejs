let name = '   Le Cuong'

console.log(name.length)

console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password = 'abc123password098'
console.log(password.includes('password'))
console.log(password.includes('093 '))

console.log(name.trim())

// isvalidPassword 
let isValidPassword = function (password){
    if (password.length > 8 && !password.includes('password')){
        return true
    } else {
        return false
    }
}

console.log(isValidPassword('asdfo'))
console.log(isValidPassword('ahgfsdfsdyfg5534@jfhsdjfh2'))
console.log(isValidPassword('dfsdghfsdhfgsd'))