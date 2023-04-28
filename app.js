const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))



let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

const fromEuroToDollar = (euros) => {
    return euros * oneEuroIs.USD
}


const fromDollarToYen = (dolares) => {
    return dolares * oneEuroIs.USD * oneEuroIs.JPY
}

const fromYenToPound = (yenes) => {
    return yenes *oneEuroIs.GBP * oneEuroIs.USD
}

module.exports = {sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};
