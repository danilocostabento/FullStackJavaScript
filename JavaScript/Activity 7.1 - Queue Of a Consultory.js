/*Write a JavaScript program to simulate a waiting line at a doctor's office. The program must 
start by showing an interactive menu on the screen containing a list of all patients waiting 
in order, showing their position next to their name (e.g.: 1st Matheus, 2nd Marcos, etc.). 
The menu should also allow you to choose between the options “New patient”, to add a new 
patient to the end of the queue (asking for the patient's name), “Consult patient”, which 
removes the first patient from the queue and shows the name on the screen of the consulted 
patient, and “Exit”. The program must only be closed by choosing the “Exit” option, otherwise 
you must return to the menu.*/


let patients = []
let name = ""
let i = 0
let welcome = ""
do {
  welcome = prompt(`Welcome to the consultory, this is the names of the patients on the queue:
\n${patients}
\nThese are the options:
\n1- New Patient
\n2- Consult Patient
\n3-Exit`)
  
  if (welcome == 1) {
    name = prompt(`What's the name of the new patient?`)
    i++
    patients.push(`${i}- ${name}\n`)
  } else if (welcome == 2) {
    patients.shift()
  }
} while (welcome != 3)
  
alert(`Exiting... Have a great rest`)

//Other Resolution

let queue = []
let option = ""

do {
  let patients = ""
  for (let i = 0; i < queue.length; i++) {
    patients += (i + 1) + `º - ${queue[i]}\n `
  }
  option = prompt(`Choose an action:\n1- add patient\n2- remove patient\n3- exit`)
  
  switch (option) {
    case "1":
      const newPatient = prompt(`What's the name of the patient?`)
      queue.push(newPatient)
      break
    case "2":
      const patientConsulted = queue.shift()
      if (!patientConsulted) {
        alert(`Doesn't have patients on the queue`)
      } else {
        alert(`${patientConsulted} was removed from the queue!`)
      }
      break
    case "3":
      alert(`Exiting...`)
      break
    default:
      alert(`Invalid option`)
  }
} while (option !== "3")
