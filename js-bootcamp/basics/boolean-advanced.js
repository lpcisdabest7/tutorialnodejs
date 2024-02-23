let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked){
    console.log('Is account locked')
} else if (userRole === 'admin'){
    console.log('Welcome admin!')
} else {
    console.log('Welcome user!')
}

let temp = 45

if (temp <=32){
    console.log('It is freezing outside')
} else if (temp >=110) {
    console.log('It is hot outside')
} else {
    console.log('Go for it. It is perrty nice')
}