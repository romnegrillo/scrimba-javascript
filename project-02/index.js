let firstNum
let secondNum
let resultEl = document.getElementById("result")
let resultElInitialValue = "Result: "


function checkInput() {
    firstNum = parseInt(document.getElementById("first-number").value)
    secondNum = parseInt(document.getElementById("second-number").value)

    if (isNaN(firstNum) || isNaN(secondNum)) {
        resultEl.textContent = "Both input must be a number."
        return false
    }

    return true
}


function add() {
    if (checkInput()) {
        resultEl.textContent = `${resultElInitialValue} ${firstNum + secondNum}`
    }
}

function subtract() {
    if (checkInput()) {
        resultEl.textContent = `${resultElInitialValue} ${firstNum - secondNum}`
    }
}

function multiply() {
    if (checkInput()) {
        resultEl.textContent = `${resultElInitialValue} ${firstNum * secondNum}`
    }
}

function divide() {

    if (checkInput()) {
        if (secondNum === 0 || secondNum == 0) {
            resultEl.textContent = `${resultElInitialValue} Cannot divide by zero.`
        } else {
            resultEl.textContent = `${resultElInitialValue} ${firstNum / secondNum}`
        }
    }
}