let userScore = 0 ;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const message = document.querySelector("#mssg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    const options = ["ROCK" , "PAPER" , "SCISSOR"];
    const randomindex = Math.floor(Math.random()*3);
    return  options[randomindex];
}


    const Drawgame = () => {
    message.innerText = "GAME HAS BEEN DRAW PLAY AGAIN!!"
    message.style.backgroundColor = "blue"
}

    const  showwinner = (userwin, userChoice, compChoice)  => {
    if (userwin) {
        userScore++;
        userscorepara.innerText = userScore;
        message.innerText= `userwin as ${userChoice} beats ${compChoice}`;
        message.style.backgroundColor = "green";
    } else {
        compScore++;
        compscorepara.innerText = compScore;
        message.innerText= `compwin as ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}





const playgame  = (userChoice) => {
    const compChoice = gencompchoice();
    if (userChoice === compChoice) {
        
        Drawgame();
      } else {
        let userwin = true;
        if (userChoice === "ROCK") {
          //scissors, paper
          userwin = compChoice === "PAPER" ? false : true;
        } else if (userChoice === "PAPER") {
          //rock, scissors
          userwin = compChoice === "SCISSOR" ? false : true;
        } else {
          //rock, paper
          userwin = compChoice === "ROCK" ? false : true;
        }
        showwinner(userwin, userChoice, compChoice);
      }
}


choices.forEach((choice) => {
    choice.addEventListener('click' , () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})
