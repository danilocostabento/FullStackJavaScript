/*Write a JavaScript program that starts by asking for the initial
amount of money available and then displays that amount on the 
screen along with options to add and remove money and an option 
to leave. When clicking on the add money option, the program should 
ask for the amount to be added, add this value to the initial amount 
and then show the menu again with the amount of money and options. 
The option to remove money should do the same, but subtracting the 
amount. The exit option should terminate the program.*/

let value = parseFloat(prompt(`What's the initial quantity?`))
let option = ""

do {
  option = prompt (
  `Disponible value: R$${value}
  \n1- Add money
  \n2- Remove money
  \n3- Exit`)
  
  switch (option) {
    case "1" :
      value += parseFloat(prompt("How much you want to add?"))
      break
    case "2" :
      value -= parseFloat(prompt("How much you want to remove?"))
      break
    case "3" :
      alert("Exiting...")
      break
    default:
      alert("Invalid entry")
      break
  }
} while (option !== "3")
