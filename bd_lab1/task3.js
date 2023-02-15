function calculate() {
    var number = Number(document.getElementById("inputNumber").value)
    var result
    if (number % 2 == 0) {
        result = getFactorial(number)
    } else {
        result = getAverage(number)
    }
    alert(result)
}

function getFactorial(number) {
    if (number == 0) {
        return 1
    }
    var result = 1
    for (let currentNumber = 1; currentNumber <= number; ++currentNumber) {
        result *= currentNumber
    }
    return result
}

function getAverage(number) {
    var result = 0
    for (let currentNumber = 1; currentNumber <= number; ++currentNumber) {
        result += currentNumber
    }
    result = result / number
    return result
}