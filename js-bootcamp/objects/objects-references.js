let myAccount = {
    name: 'Le Cuong',
    expenses: 0,
    income: 0,
    user: 'bruno8'
}
 
let addExpenses = function(account,amount){
    account.expenses = account.expenses + amount
}

let addIncome = function(account, income){
    account.income = account.income + income
}

let resetAccount = function (account){
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account){
    let balance = account.income - account.expenses
    return `Account for ${account.name} has $${balance}. $${account.income} in come. $${account.expenses} in expenses.`
}

addExpenses(myAccount,100)
addExpenses(myAccount,300)
addIncome(myAccount,1000)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
