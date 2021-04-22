

// Display
let total = 0
let evalString = ''
let displayString = ''
var display = document.getElementById("display");

updateTotal = (evalStr, displayStr) => {
    evalString += `${evalStr}`;
    displayString += displayStr
    display.innerHTML = `<h1>${displayString}</h1>`;
    console.log(evalString, displayString)
}


// Number Button Handlers
var one = document.getElementById('one');
one.addEventListener('click', () => {updateTotal(1, 1)});

var two = document.getElementById('two');
two.addEventListener('click', () => {updateTotal(2, 2)});

var three = document.getElementById('three');
three.addEventListener('click', () => {updateTotal(3, 3)});

var four = document.getElementById('four');
four.addEventListener('click', () => {updateTotal(4, 4)});

var five = document.getElementById('five');
five.addEventListener('click', () => {updateTotal(5, 5)});

var six = document.getElementById('six');
six.addEventListener('click', () => {updateTotal(6, 6)});

var seven = document.getElementById('seven');
seven.addEventListener('click', () => {updateTotal(7, 7)});

var eight = document.getElementById('eight');
eight.addEventListener('click', () => {updateTotal(8, 8)});

var nine = document.getElementById('nine');
nine.addEventListener('click', () => {updateTotal(9, 9)});

var zero = document.getElementById('zero');
zero.addEventListener('click', () => {updateTotal(0, 0)});

// Operators
var add = document.getElementById('add');
add.addEventListener('click', () => {
    displayString = ''
    updateTotal('+', eval(evalString))
    evalString = evalString.replace(/[0-9]+[\+,\-,\/,\*][0-9]+/, displayString)
    displayString = ''
})

var subtract = document.getElementById('subtract');
subtract.addEventListener('click', () => {
    displayString = ''
    updateTotal('-', eval(evalString))
    evalString = evalString.replace(/[0-9]+/, displayString)
    displayString = ''
})

var divide = document.getElementById('divide');
divide.addEventListener('click', () => {
    displayString = ''
    updateTotal('/', eval(evalString))
    evalString = evalString.replace(/[0-9]+[\+,\-,\/,\*][0-9]+/, displayString)
    displayString = ''
})

var multiply = document.getElementById('multiply');
multiply.addEventListener('click', () => {
    displayString = ''
    updateTotal('*', eval(evalString))
    evalString = evalString.replace(/[0-9,\.]+[\+,\-,\/,\*][0-9,\.]+/, displayString)
    displayString = ''
})


let equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    displayString = ''
    updateTotal('', eval(evalString))
    evalString = evalString.replace(/[0-9]+[\+,\-,\/,\*][0-9]+/, displayString)
    displayString = ''
})

// Modifiers
let decimal = document.getElementById('decimal');
decimal.addEventListener('click', () => {
    updateTotal('.','.')
    evalString = evalString.replace(/[0-9]+[\+,\-,\/,\*][0-9]+/, displayString)
})