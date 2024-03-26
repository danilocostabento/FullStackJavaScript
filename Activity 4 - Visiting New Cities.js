/*Write a JavaScript program that asks for a tourist's
name and then asks if they have visited a city. 
If the answer is yes, ask for the name of the city and 
store it in a variable, and then continue asking if the 
tourist visited any other city until the answer is no. 
At the end, the program must display the tourist's name, 
how many and which cities he visited.*/

let name = prompt("What´s your name?")
var fly = prompt(`Have you visited any city?
\n0- No
\n1- Yes`)
let citys = ""
let count = 0

while (fly != 0) {
  let city = prompt(`What is the name of the city visited?`)
  citys += `- ${city}\n`
  count++
  fly = prompt(`Have you visited other city?
  \n0- No
  \n1- Yes`)
}

alert(`Tourist: ${name}
\nCity Quantity: ${count}
\nCities Visited:\n${citys}`)
