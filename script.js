

function add(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    result = num1 + num2
    document.getElementById('result').innerHTML = result
}

function subtract(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    result = num1 - num2
    document.getElementById('result').innerHTML = result
}

function multiply(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    result = num1 * num2
    document.getElementById('result').innerHTML = result
}

function divide(){
    const num1 = parseInt(document.getElementById('number1').value)
    const num2 = parseInt(document.getElementById('number2').value)
    result = num1 / num2
    document.getElementById('result').innerHTML = result
}