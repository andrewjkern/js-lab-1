const playGame = () => {let userResponse=prompt('Would you like to play a game? yes or no');
if (userResponse === "yes"){
    let userName = prompt("Enter your username");
    console.log (`${userName} will do battle with Grant!`)
}else {(userResponse != "yes")
console.log("Aww that's too bad")
  }
}
playGame()

let userHealth = 40
let grantHealth = 10
let grantsLife =3
playingGame = true

while (playingGame === true){
  grantHealth = grantHealth - randomIntFromInterval(1,2)
  console.log(`Grant has ${grantHealth} health left`)
  userHealth = userHealth - randomIntFromInterval(1,2)
  console.log(`You have ${userHealth} health left`)
  if(grantHealth <= 0){
    console.log("Grant died")
    --grantsLife
    grantHealth = 10
    if(grantsLife<=0){
      console.log("You WIN!")
      break
    }
  }
  if(userHealth <= 0){
    console.log("You died")
    break
  }
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// randomIntFromInterval()
