// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 50) + 1;

let attempts = 0;

function checkGuess() {
    const userGuess = document.getElementById('userGuess').value;
    const message = document.getElementById('message');
    const attemptsElement = document.getElementById('attempts');

    attempts++;

    if (userGuess == randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number in ${attempts} attempts.`;
        message.style.color = 'green';
        attemptsElement.textContent = attempts;
        document.getElementById('userGuess').disabled = true;
    } else if (userGuess < randomNumber) {
        message.textContent = 'Too low. Try again!';
        message.style.color = 'red';
    } else {
        message.textContent = 'Too high. Try again!';
        message.style.color = 'red';
    }
}
