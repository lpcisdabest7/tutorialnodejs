let myBook = {
    title: 'IronMan',
    author: 'Mr.Lee',
    pageCount: 583
}

let otherBook = {
    title: 'Captian America',
    author: 'Bruno Fernandes',
    pageCount: 818
}

let getSummary = function (book){
    return {
        summary: `${book.title} by ${book.author}`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long`
    }
    // console.log(`${book.title} by ${book.author} and ${book.pageCount}`)
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary)
console.log(otherBookSummary)

let convertFahrenheit = function(fahrenheit){
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * 5/9,
        celsius: (fahrenheit - 32) * 5/9,
    }
}

let getFahrenheit = convertFahrenheit(32)

console.log(getFahrenheit)
 
