/*Write a JavaScript program that simulates an interactive menu with 
5 different options. The program should start showing the 5 available 
options, the first four do not require any specific functionality, 
the last option should be the “Quit” option. When clicking on one of 
the first four options, a message should be displayed on the screen 
indicating which option was chosen and then the program should display 
the menu with the 5 options again. This should continue to happen until 
the user chooses the “Quit” option. When choosing it, a message saying 
that the system is being closed should be displayed on the screen and 
then the program ends.*/

let incorrectOption = ["1", "2", "3", "4"]
let correctOption = "5"
var option = ""

do {
  option = prompt(`What's your programming language?: 
  \n 1 - CSS 
  \n 2 - HTML 
  \n 3 - PYTHON 
  \n 4 - Javascript 
  \n 5 - Exit`)
  if (option != correctOption){
    alert(`Your choose was the number ${option}`)} else {
      alert(`Exiting...`)
    }
} while (option != inccorrectOption)
  
if (option == correctOption) {
  alert(`Exiting...`)
}
