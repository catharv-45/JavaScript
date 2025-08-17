// create random number between 1 to 100
let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
// to store the value of user guesses
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('lastResult');
const lowOrHi = document.querySelector('lowOrHi');
const startOver = document.querySelector('resultParas');

const p = document.createElement('p');

let prevGuess = [] ;// for store previous guess number
let numGuess = 1 ;// counter for remaining guess
let playGame = true; // to start the game

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        // pass user input for validation of number
        validateGuess(guess);
    });

}

// check given user number is between 1 to 100 or not
function validateGuess(guess){
    if(isNaN(guess)){
        alert("please enter a valid number");
    }else if(guess<1){
        alert("please enter a number more than 1");
    }else if(guess>100){
        alert("please enter a number less than 100");
    }else{
        prevGuess.push(guess);
        //check guesses is over or not
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over! Random number was ${randomNumber}`);

        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}
// check user guess value is equal to original value

function checkGuess(guess){
    if(guess===randomNumber){
        displayMessage(`You guesses it right`);
        endGame();
    }else if(guess < randomNumber){
        displayMessage(`Number is to low`);
    }else if(guess > randomNumber){
        displayMessage(`Number is to high`);
    }
}

// clean the value for next
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML +=`${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11-numGuess}`;
}

// pass the after results
function displayMessage(message){
    lowOrHi.innerHTML= `<h2>${message}</h2>`;
}
function endGame(){
    userInput.value = "";
    userInput.setAttribute('disabled',"")
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
    startOver.appendChild(p);
    playGame =false;
    newGame();
}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber =parseInt(Math.random()*100+1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML='';
        remaining.innerHTML =`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame =true;
    })
}