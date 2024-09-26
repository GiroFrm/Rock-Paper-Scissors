
function getComputerChoice(){

    let number =  Math.floor(Math.random() * 3);

    if(number=== 0){ 
        return "rock";

    } else if(number === 1) {

        return "paper";
    }
    else if(number === 2) {

        return "scissors"
    }

}

function getHumanChoice(){
    let choice = prompt("what's your choice?");
    
    return choice;
}


function playGame(){

let humanScore = 0;

let computerScore = 0;

function playRound(humanChoice, computerChoice){
  
    if(humanChoice === "paper" && computerChoice === "scissors") {

      console.log("You lose! Scissors beats Paper");
      computerScore++;
      

    } else if(humanChoice === "scissors" && computerChoice === "paper") {

      console.log("You win! Scissors beats Paper")
      humanScore++;
      

    } else if(humanChoice === "paper" && computerChoice === "rock"){

      console.log("You win! Paper beats Rock")
      humanScore++;
      

    } else if(humanChoice === "rock" && computerChoice === "paper"){
      
        console.log("You lose! Paper beats Rock")
        computerScore++;
        
    
    } else if(humanChoice === "rock" && computerChoice === "scissors"){

        console.log("You win! rock beats scissors ")
        humanScore++;
        
    
    } else if(humanChoice === "scissors" && computerChoice === "rock"){

        console.log("You lose! scissors beats rock ")
        computerScore++;
        
    
    } else if(humanChoice === "rock" && computerChoice === "rock") {

        console.log("Even no one wins");
        
    
    } else if(humanChoice === "paper" && computerChoice === "paper") {

        console.log("Even no one wins")
        
    
    } else if(humanChoice === "scissors" && computerChoice === "scissors") {

        console.log("Even no one wins")
        
    }

}

for (let i = 0; i<5; i++) {

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);

}

if (humanScore>computerScore){
    console.log("Human wins the game!"+humanScore+"::"+computerScore)
} else if (computerScore>humanScore){
    console.log("Computer wins the game!"+computerScore+"::"+humanScore)
} else {
    console.log("It's a tie! No one wins!")
}

}


playGame();

