/*Write a JavaScript program that allows you to save a recruit's information. The information to be saved is:
the first name
the surname
the field of study
the year of birth
Then the program should display the recruit's full name, field of study and age (only based on year of birth).*/

let name = prompt(`What's your fisrt name?`)
let surname = prompt(`What's your surname?`)
let studyField = prompt(`What's your study field?`)
let birthday = prompt(`What's your birthday year?`)
let age = birthday - 2024

alert(`Welcome to abroad recruit!
\nName: ${name} ${surname}
\nStudy Field: ${studyField}
\nAge: ${birthday}`)
