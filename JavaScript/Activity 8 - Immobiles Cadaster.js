let immobiles = []
let option = ""

do {
  option = prompt(`Welcome to immobiles center, what you want to do?
  \n 1- Cadaster a new immobile \n 2- List all immobiles \n 3- Exit.`)
  
  switch (option) {
    case "1":
      const immobile = {}
      
      immobile.owner = prompt(`What is the name of the owner?`)
      immobile.rooms = prompt(`How many rooms are in the immobile?`)
      immobile.restrooms = prompt(`How many bathrooms the immobile has?`)
      immobile.garage = prompt(`The immobile has garage? (yes/no)`)
      
      const confirmSave = confirm(`Save this immobile?\n 
        \nOwner: ${immobile.owner}
        \nRooms: ${immobile.rooms} 
        \nBathrooms: ${immobile.bathrooms} 
        \nHas garage? ${immobile.garage}`)
      
      if (confirm) {
        immobiles.push(immobile)
      }
      break
    case "2":
      for (let i = 0; i < immobiles.length; i++) {
        alert(
          `Immobile  ${(i + 1)}
          \nOwner: ${immobiles[i].owner}
          \nRooms: ${immobiles[i].rooms}
          \nBathrooms: ${immobiles[i].bathrooms}
          \nHas Garage? ${immobiles[i].garage}`
        )
      }
      break
    case "3":
      alert("Exiting...")
      break
    default:
      alert("Invalid Option!")
      break
  }
} while (option !== "3");
