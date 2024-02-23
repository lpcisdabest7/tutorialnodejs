let add = function (a,b){
    return a + b
}
let result = add (10,1)
console.log(result)

let getScoreText = function(name = 'Anonymus', score = 0){
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText('Leo ',99)
console.log(scoreText)

//challenge

let getTotalAndTip = function(total = 0, tipPrecent = .2){
    // return total * tip
    // return `Total: ${total} - Tip + ${total*tipPrecent}`
    let percent = tipPrecent * 100
    let tip = total * tipPrecent
    return `A ${percent}% tip on $${total} would be $${tip}`
}
let totalAndTip = getTotalAndTip(60) 
console.log(totalAndTip)

let name = 'Bruno'
let age = 21
console.log(`Hey, my name is ${name}! I am ${age} years old`)