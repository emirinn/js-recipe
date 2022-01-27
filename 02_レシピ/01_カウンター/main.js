const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const minusButton = document.getElementById("minus-button")
const multiplyButton = document.getElementById("multiply-button")

let count = 0
plusButton.onclick = function () {
  count += 1
  display.textContent = count
}
minusButton.onclick = function () {
  count -= 1
  display.textContent = count
}
multiplyButton.onclick = function () {
  count *= 2
  display.textContent = count
}

const display1 = document.getElementById("display1")
const display2 = document.getElementById("display2")
const zero = document.getElementById("button0")
const one = document.getElementById("button1")
const two = document.getElementById("button2")
const three = document.getElementById("button3")
const four = document.getElementById("button4")
const five = document.getElementById("button5")
const six = document.getElementById("button6")
const seven = document.getElementById("button7")
const eight = document.getElementById("button8")
const nine = document.getElementById("button9")
const plus = document.getElementById("button+")
const minus = document.getElementById("button-")
const multiply = document.getElementById("button×")
const divide = document.getElementById("button÷")

let keisan1 = 0
let keisan2 = 0

zero.onclick = function () {
  keisan2 += 0
  display2.textContent = keisan2
}
one.onclick = function () {
  keisan2 += 1
  display2.textContent = keisan2
}
two.onclick = function () {
  keisan2 += 2
  display2.textContent = keisan2
}
three.onclick = function () {
  keisan2 += 3
  display2.textContent = keisan2
}
four.onclick = function () {
  keisan2 += 4
  display2.textContent = keisan2
}
five.onclick = function () {
  keisan2 += 5
  display2.textContent = keisan2
}
six.onclick = function () {
  keisan2 += 6
  display2.textContent = keisan2
}
seven.onclick = function () {
  keisan2 += 7
  display2.textContent = keisan2
}
eight.onclick = function () {
  keisan2 += 8
  display2.textContent = keisan2
}
nine.onclick = function () {
  keisan2 += 9
  display2.textContent = keisan2
}

//足すよ
plus.onclick = function () {
  keisan1 = keisan1 + keisan2
  a()
}
//引くよ
minus.onclick = function () {
  keisan1 = keisan1 - keisan2
  a()
}
//かけるよ
multiply.onclick = function () {
  keisan1 = keisan1 * keisan2
  a()
}
//割るよ
divide.onclick = function () {
  keisan1 = keisan1 / keisan2
  a()
}

const a = function () {
  display1.textContent = keisan1
  keisan2 = 0
  display2.textContent = keisan2
}
