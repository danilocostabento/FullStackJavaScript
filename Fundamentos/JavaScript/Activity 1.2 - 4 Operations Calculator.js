/*Write a JavaScript program that allows you to enter 
two numerical values ​​and then calculate the result 
of the four basic operations (addition, subtraction, 
multiplication and division).
After calculating the results, the program must display 
them on the screen.*/

var value1 = parseFloat(prompt(`What is the first value?`))
var value2 = parseFloat(prompt(`What is the second value?`))
let addition = value1 + value2
let subtraction = value1 - value2
let multiplication = value1 * value2
let division = value1 / value2

alert(`The values are ${value1} and ${value2}
\nAddition: ${addition}
\nSubtraction: ${subtraction}
\nMultiplication: ${multiplication}
\nDivision: ${division}`)
