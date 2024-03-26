/*Write a JavaScript program that works as a measurement converter. 
The program should ask for a value in meters and then give the 
option to choose which unit of measurement this value should be 
converted to. The options are:
millimeter (mm)
centimeter (cm)
decimeter (dm)
decameter (dam)
hectometer (hm)
kilometer (km)
The program must then convert the measurement according to the 
chosen option and display the result.
The program must also display an “Invalid option” message if 
the user enters an option other than those available 
(use break and default for this)*/

let value = parseFloat(prompt(`What's the value in meters?`))
var options = prompt(`What's the desired value?
\n1- Milimeter mm
\n2- Centimer cm
\n3- Decimeter dm
\n4- Decameter dam
\n5- Hectometer hm
\n6- Kilometer km
\n7- Exit`)
var newValue = 0

switch (options){
  case "1":
    newValue = value * 1000
    alert(`The new value is ${newValue} mm`)
    break
  case "2":
    newValue = value * 100
    alert(`The new value is ${newValue} cm`)
    break
  case "3":
    newValue = value * 10
    alert(`The new value is ${newValue} dm`)
    break
  case "4":
    newValue = value * 0,1
    alert(`The new value is ${newValue} dam`)
    break
  case "5":
    newValue = value * 0,01
    alert(`The new value is ${newValue} hm`)
    break
  case "6":
    newValue = value * 0,001
    alert(`The new value is ${newValue} km`)
    break
  case "7":
    alert(`Exiting...`)
    break
  default:
    alert(`Entrada inválida`)
}
