
function getComputerChoice() {
    let number =  Math.floor(Math.random() * 3);
    if(number=== 0) { 
        return "rock";
    } else if(number === 1) {
        return "paper";
    } else if(number === 2) {

        return "scissors"
    }

}

function getHumanChoice() {
    let choice = prompt("what's your choice?");
    return choice;
}


    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  
    if(humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper");
      computerScore++;
    } else if(humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats Paper")
      humanScore++;
    } else if(humanChoice === "paper" && computerChoice === "rock"){
      console.log("You win! Paper beats Rock")
      humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock")
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! rock beats scissors ")
        humanScore++; 
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! scissors beats rock ")
        computerScore++;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Even no one wins");
    } else if (humanChoice === "paper" && computerChoice === "paper") {
        console.log("Even no one wins")
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("Even no one wins")  
    }
}


function checkWinner(){
    let result =""
    if (humanScore>computerScore){
        console.log("Human wins the game!"+humanScore+"::"+computerScore);
        result = "Human wins the game!"+humanScore+"::"+computerScore;
    } else if (computerScore>humanScore){
        console.log("Computer wins the game!"+computerScore+"::"+humanScore);
        result = "Computer wins the game!"+computerScore+"::"+humanScore;
    } else {
        console.log("It's a tie! No one wins!");
        result = "It's a tie! No one wins!"
    }
    return result;
}

 let counter = 0;
const btns = document.querySelectorAll("button");
const computer_score = document.querySelector(".computer_score");
const human_score = document.querySelector(".human_score");
const winner =document.querySelector(".winner");
const btn_reset = document.querySelector(".btn_reset");
    btn_reset.disabled = true;

btns.forEach(btn => {
    btn.addEventListener("click", function() {
        counter++;
        let computerChoice = getComputerChoice();
        let humanChoice = this.innerText;
        playRound(humanChoice, computerChoice);
        computer_score.innerHTML = computerScore;
        human_score.innerHTML = humanScore;
        if(counter>=5){
           winner.innerText = checkWinner();
           btns.forEach(btn => {
            btn.disabled = true;
           })
           btn_reset.disabled = false;
        }
    })

})

