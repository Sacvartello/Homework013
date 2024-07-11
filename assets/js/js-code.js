const a = 4;
const b = 3;
console.log(a*b)

const c = 8;
const d = 2;
console.log(c/d)

const e = 'git'
const f = 33
const sum = e + f
console.log(sum)

const number11 = 11;
const booleanTrue = true;
const stringJS = "Java Script"
const string100 = "100"
console.log(number11, booleanTrue, stringJS, string100)

let num = 1
num += 11
num -=11
num *=11
num /= 11
num ++
num --

const number1FromUser = Number(prompt("Яке число ви бажаєте піднести до квадрату?"))
const changedNumber1FromUser = number1FromUser**2
console.log(changedNumber1FromUser)

const arithmeticMeanNumber1 = Number(prompt('Перше число:'))
const arithmeticMeanNumber2 = Number(prompt('Друге число число:'))
const arithmeticMean =(arithmeticMeanNumber1+arithmeticMeanNumber2)/2
console.log('Середнє арифметичне: ',arithmeticMean )

const minutes = Number(prompt('Введіть кількість хвилин яку бажаєте перевести в секунди:'))
const seconds = minutes*60
console.log('Кількість секунд: ',seconds )

const greeting = String('Hello,')
const userName = String(prompt('Your name:'))
console.log(greeting, userName)
