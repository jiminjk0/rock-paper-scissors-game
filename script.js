let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const genCompChoice = () =>
    {
        const options = ["rock", "paper", "scissors"];
        const random = Math.floor(Math.random() * 3);
        return options[random];
    }

    const showWinner = (userWin) =>
        {
            if(userWin)
                {
                    console.log("you win");
                    msg.innerText = "Congrats! You Won";
                    msg.style.backgroundColor = "green";
                }
                else
                {
                    console.log("you lose!");
                    msg.innerText = "Uh Oh :( You Lost"
                    msg.style.backgroundColor = "brown";
                }

        };

    const drawGame = () =>
        {
            console.log("Game was a draw");

        }

const playGame = (userChoice) =>
    {
        console.log("user choice",  userChoice);
        const compChoice = genCompChoice();
        console.log("comp choice", compChoice);

        if(userChoice === compChoice)
            {
                drawGame();
                msg.innerText = "Draw? Better Luck Next Time!"
                msg.style.backgroundColor = "rgb(64, 64, 169)";

            
            }
        else 
        {
           let userWin = true;
           if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
           }
           else if (userChoice === "paper")
           {
            userWin = compChoice === "scissors" ? false : true;
           }
           else 
           {
            userWin = compChoice === "rock" ? false : true;
           }
           showWinner(userWin);
        }
       
    };
choices.forEach((choice) => {
    choice.addEventListener("click", () => 
    {
        console.log("choice was clicked");
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});