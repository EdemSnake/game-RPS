const buttons = document.querySelectorAll(".game-btn");
const displayUserImage = document.getElementById("displayUserChoise");
const displayComputerImage = document.getElementById("displayComputerChoise");
const resultElement = document.getElementById("result-text");

const images = ["paper.png","rock.png","scissors.png"]
let randomIndex ;
let useChoise = '';

const computerChoise = ()=>{
    setTimeout(()=>{
         randomIndex = Math.floor(Math.random() * images.length)
         const compChoise = images[randomIndex].split(".")[0]
        displayComputerImage.src = "img/" +images[randomIndex];
        resultGame(userChoice, compChoise);
    },1000)
}


buttons.forEach((el) => {
  el.addEventListener("click", (event) => {
    resultElement.textContent = "Waiting for result"
    buttons.forEach((el) => el.classList.remove("active"));
    console.log(event.target.innerText);
    event.target.classList.add("active");
    const imgSrc = event.target.getAttribute("data-img");
    userChoice = imgSrc.split(".")[0];
    displayUserImage.src = `img/${imgSrc}`;

    computerChoise();
  });
});


const resultGame = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        resultElement.textContent = "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        resultElement.textContent = "You win!";
    } else {
        resultElement.textContent = "You lose!";
    }
};