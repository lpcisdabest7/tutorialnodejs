let grandeCalc = function (score, totalScore){
    let percent = (score / totalScore) * 100
    let letterGrade = ''
    if (percent >= 90){
        letterGrade = 'A'
    } else if (percent >= 80 && percent < 90) {
        letterGrade = 'B'
    } else if (percent >= 70 && percent < 80) {
        letterGrade = 'C'
    } else if (percent >= 60 && percent < 70) {
        letterGrade = 'D'
    }
     else{
        letterGrade = 'F'
    }
    return `You got a ${letterGrade} and (${percent}%)!`
}

let result = grandeCalc(160,200)
console.log(result)
