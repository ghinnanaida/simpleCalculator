const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) =>{
    calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number");

let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const inputNumber = (number)=>{
    if (currentNumber === '0'){
        currentNumber = number
    }else{
        currentNumber += number
    }
}

numbers.forEach((number)=>{
    number.addEventListener("click",(event)=>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
    })
})

const operators = document.querySelectorAll('.operator');

const inputOperator = (operator) =>{
    if (calculationOperator === ""){
        prevNumber = currentNumber
    }
    calculationOperator = operator
    currentNumber = ''
}
operators.forEach((operator)=>{
    operator.addEventListener('click',(event)=>{
        inputOperator(event.target.value)
    })
})

const equalSign = document.querySelector('.equal-sign');

const calculate = () =>{
    let result = ''
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            break
    }
    currentNumber = result
    calculationOperator = ''
}
equalSign.addEventListener('click',()=>{
    if(currentNumber.includes('%')){
        calculatePercent()
        updateScreen(currentNumber)
    } else {
        calculate()
        updateScreen(currentNumber)
    }
})

const clearBtn = document.querySelector('.all-clear')

const clearAll = () =>{
    prevNumber =''
    calculationOperator =''
    currentNumber = "0"
}
clearBtn.addEventListener('click',()=>{
    clearAll()
    updateScreen(currentNumber)
})

const decimal = document.querySelector('.decimal');

const inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

decimal.addEventListener('click', (event)=>{
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})

const percentage = document.querySelector('.percentage');

const inputPercent = (persen) =>{
    if(currentNumber.includes('%')){
        return
    }
    currentNumber += " "
    currentNumber += persen
}

percentage.addEventListener('click',(event)=>{
    inputPercent(event.target.value)
    updateScreen(currentNumber)
})

const calculatePercent = () =>{
    let result = ''
    let angka = currentNumber.split(' ');
    let nilai = angka[0]
    switch(calculationOperator){
        case '+':
            result = parseFloat(prevNumber) + parseFloat(nilai)/100 * parseFloat(prevNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(nilai)/100 * parseFloat(prevNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(nilai)/100 * parseFloat(prevNumber)
            break
        case "/":
            result = parseFloat(prevNumber) / parseFloat(nilai)/100 * parseFloat(prevNumber)
            break
        default:
            result = parseFloat(nilai)/100
            break
    }
    currentNumber = result
    calculationOperator = ''
}