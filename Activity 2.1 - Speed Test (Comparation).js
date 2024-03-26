Write a JavaScript program that allows you to enter the name 
and speed of two vehicles and display a message on the screen 
saying which of the two is faster (or that the speeds are the 
same if this is the case)

let vehicle1 = prompt(`What's the name of the fisrt vehicle?`)
let vehicle2 = prompt(`What's the name of the second vehicle?`)
var speed1 = parseFloat(prompt(`What's the speed of ${vehicle1}?`))
var speed2 = parseFloat(prompt(`What's the speed of ${vehicle2}`))

if (speed1 == speed2) {
  alert(`The ${vehicle1} is in the same speed that the ${vehicle2}`)
}

if (speed1 < speed2) {
  alert(`The ${vehicle1} is slower than the ${vehicle2}`)
} else if (speed1 > speed2) {
  alert(`The ${vehicle1} is faster than the ${vehicle2}`)
}
