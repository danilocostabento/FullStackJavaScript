/*Write a program that allows you to enter a character's name and attack power, 
then another character's name, amount of hit points, defense power and whether 
they have a shield, and then calculate the amount of damage dealt based on the 
following rules:
If the attack power is greater than the defense and the defender does not have 
a shield, the damage caused will be equal to the difference between the attack 
and defense.
If the attack power is greater than the defense and the defender has a shield, 
the damage dealt will be equal to half the difference between the attack and 
defense.
If the attack power is less than or equal to the defense, the damage dealt 
will be 0.
Finally, the program must subtract the amount of damage from the amount of 
life points of the defending character and display the amount of damage and 
updated information for both characters on the screen.*/

let name1 = prompt(`What's the name of the character?`)
let power = parseFloat(prompt(`How much power the character have?`))
let defense = parseFloat(prompt(`How much defense the character have?`))
let lifePoints = parseFloat(prompt(`How much life points the character have?`))
let name2 = prompt(`What's the name of the second character?`)
let shield = prompt(`The opponent, have a shield?\n0- No\n1- Yes`)
var damage = 0

if (shield = 0) {
  if (power > defense) {
    damage = power - defense
  } else if (power <= defense)
    damage = 0
} else{
  if (power > defense) {
    damage = (power - defense) / 2

  } else if (power <= defense) {
    damage = 0
  }
  var totalLifePoints = lifePoints - damage
  alert(`The damage was ${damage} and the new life points is: ${totalLifePoints} HP`)
}
