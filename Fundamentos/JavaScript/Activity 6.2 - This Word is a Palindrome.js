/*Write a JavaScript program that is capable of identifying whether a 
word is a palindrome. A palindrome is a word that read backwards has 
the same letters in the same order. The program must start by asking 
for a word to be entered and then it must display a message saying 
whether or not that word is a palindrome. If it is not a palindrome, 
the program must show the word read from left to right and right to left.*/


let word = prompt(`Whats is the word?`)
let inverseWord = ""

for (let i = word.length - 1; i >= 0; i--) {
  inverseWord += word[i]
}

if (word === inverseWord) {
  alert(`${word} is a palindrome`)
} else {
  alert(`${word} isn't a palindrome\n${word} !== ${inverseWord}`)
}