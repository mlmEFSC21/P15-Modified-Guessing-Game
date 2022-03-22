let randomNumber = Math.floor(Math.random() * 1000 + 1);
let guesses = [];

const guessInput = document.getElementById("guessInput");
const resultsDiv = document.getElementById("results");
const submitButton = document.getElementById("submitBtn");
const resetButton = document.getElementById("resetBtn");
const p = document.createElement("p");
const ul = document.getElementById("guessList");
const li = document.createElement("li");
const guessesContainer = document.getElementById("guessesContainer");
const h3 = document.createElement("h3");

//checks to see if the guess is higher, lower, or equal to
function checkGuess() {
    const currentGuess = Number(guessInput.value);
    if (currentGuess == randomNumber) {
        guesses.push(currentGuess);
        p.innerText = "Congratulations! You guessed the number!";
        resultsDiv.append(p);
        countGuesses();
    }
    if (currentGuess < randomNumber) {
        guesses.push(currentGuess);
        p.innerText = "Too low. Try again!";
        resultsDiv.append(p);
        trackGuesses();
    }
    if (currentGuess > randomNumber) {
        guesses.push(currentGuess);
        p.innerText = "Too high. Try again!";
        resultsDiv.append(p);
        trackGuesses();
    }
}
//tracks previous guess in a <ul>. Removes <li> and populates from guesses[] each time.
function trackGuesses() {
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    for (i = 0; i <= guesses.length - 1; i++) {
        let li = document.createElement("li");
        li.innerText = guesses[i];
        ul.appendChild(li);
    }
}

//counts how many guesses. Uses array length.
function countGuesses() {
    let numOfGuesses = guesses.length;
    h3.innerText = `It took you ${numOfGuesses} guesses!`;
    guessesContainer.append(h3);
}
// creates a new random number for replay
function newRNG() {
    randomNumber = Math.floor(Math.random() * 10 + 1);
}
//resets the game completely.
function resetGame() {
    p.innerText = "";
    resultsDiv.append(p);
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }
    h3.remove();
    guesses = [];
    newRNG();
    //logging random number for debugging.
    console.log(randomNumber);
}

submitButton.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);
//logging random number for debugging.
console.log(randomNumber);
