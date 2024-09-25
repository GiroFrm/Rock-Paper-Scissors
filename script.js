
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

//console.log(getComputerChoice());

function getHumanChoice(){
    let choice = prompt("what's your choice?");
    
    return choice;
}

//console.log(getHumanChoice())

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
  
    if(humanChoice === "paper" && computerChoice === "scissors") {

      console.log("You lose! Scissors beats Paper")

    } else if(humanChoice === "scissors" && computerChoice === "paper") {

      console.log("You win! Scissors beats Paper")

    } else if(humanChoice === "paper" && computerChoice === "rock"){

      console.log("You win! Paper beats Rock")

    } else if(humanChoice === "rock" && computerChoice === "paper"){
      
        console.log("You lose! Paper beats Rock")
    
    } else if(humanChoice === "rock" && computerChoice === "scissors"){

        console.log("You lose! scissors beats rock ")
    
    } else if(humanChoice === "scissors" && computerChoice === "rock"){

        console.log("You lose! scissors beats rock ")
    } 

}