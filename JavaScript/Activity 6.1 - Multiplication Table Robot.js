/*Write a JavaScript program that is capable of calculating the multiplication table of a 
given number (from 1 to 20). The program must start by asking for the number to be used 
in the calculations and then save all multiplication results from 1 to 20 using the number 
entered within a string variable. Then the program should display these results and finish.*/

var number = parseFloat(prompt(`What's the number you wnat the multiplication table?`))
let multiplicationTable = ""
let newNumber = 0 

for (let i = 1; i <= 20; i++){
  newNumber = number * i
  multiplicationTable = multiplicationTable + (`${i} - ${newNumber}\n`)
}
 alert(multiplicationTable)
