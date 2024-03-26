/*Write a JavaScript program to simulate a deck of cards. The program should start
by showing an interactive menu on the screen containing the number of cards currently
in the deck and the options to “Add a card”, “Draw a card” and “Exit”. When choosing 
“Add a card”, the program should ask for the name of the card and add it to the top 
of the deck. When choosing “Pull a card”, the program must remove the card from the 
top of the deck and show the name of the card drawn on the screen. The program must 
only be closed by choosing the “Exit” option, otherwise you must return to the menu.*/


let cards = [`Ace of Hearts`, `Ace of Clubs`, `Ace of Diamonds`, `Ace of Spades`, `Two of Hearts`, `Two of Clubs`, `Two of Diamonds`, `Two of Spades`, `Three of Hearts`, `Three of Clubs`, `Three of Diamonds`, `Three of Spades`, `Four of Hearts`, `Four of Clubs`, `Four of Diamonds`, `Four of Spades`, `Five of Hearts`, `Five of Clubs`, `Five of Diamonds`, `Five of Spades`, `Six of Hearts`, `Six of Clubs`, `Six of Diamonds`, `Six of Spades`, `Seven of Hearts`, `Seven of Clubs`, `Seven of Diamonds`, `Seven of Spades`, `Eight of Hearts`, `Eight of Clubs`, `Eight of Diamonds`, `Eight of Spades`, `Nine of Hearts`, `Nine of Clubs`, `Nine of Diamonds`, `Nine of Spades`, `Ten of Hearts`, `Ten of Clubs`, `Ten of Diamonds`, `Ten of Spades`, `Jack of Hearts`, `Jack of Clubs`, `Jack of Diamonds`, `Jack of Spades`, `Queen of Hearts`, `Queen of Clubs`, `Queen of Diamonds`, `Queen of Spades`, `King of Hearts`, `King of Clubs`, `King of Diamonds`, `King of Spades`, `Red Joker`, `Black Joker`]

let welcome = ""
let card = ""
let newCardName = ""
let listOfCards = []
let i = 0

do {
  welcome = prompt(`Welcome to the digital card deck, what do you want to do?
  \n1- Put a card
  \n2- Pull a card
  \n3- Exit
  \nTotal cards: ${cards.length}\nMissing Cards: ${listOfCards}`)
  switch (welcome) {
    case "1":
      newCardName = prompt(`What's the new card?`)
  let cardExists = false;
  for (let index = 0; i < cards.length; index++) {
      if (cards[index] === newCardName) {
        cardExists = true;
        break;
      } // verify if the cards exist in the cards list.
    }
    if (cardExists) {
      alert(`This card is already in the card deck`)
    } else {
     cards.push(newCardName)
    }
        break
    case "2":
      i++
      let card = cards[Math.floor(Math.random() * cards.length)]
      alert(`The card that you have pulled is the: ${card}`)
      let card1 = cards.indexOf(card)
      cards.splice(card1, 1)
      listOfCards.push(`${i}- ${card}\n`)
      break
    case "3":
      alert(`Exiting...`)
      break
    default:
      alert(`Invalid option`)
      break
  }
} while (welcome !== "3")
