# Project related to DOM

## Project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Color scheme Switcher by using if statement

```javascript

console.log("Atharv");
// select all element which has class name as button
const buttons = document.querySelectorAll(".button"); 
// select body 
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click",function(e){
    console.log(e)
    console.log(e.target);
    if(e.targetid = "grey"){
      body.style.backgroundColor = e.target.id
    }
    if(e.targetid = "white"){
      body.style.backgroundColor = e.target.id
    }
    if(e.targetid = "blue"){
      body.style.backgroundColor = e.target.id
    }
    if(e.targetid = "yellow"){
      body.style.backgroundColor = e.target.id
    }
  })
});

```
# Color Scheme Switcher by using switch case 
```javascript
const buttons = document.querySelectorAll(".button");

const body = document.querySelector("body");

buttons.forEach(function(buttons){
  buttons.addEventListener("click",function(e){
    const color =e.target.id;
    switch(color)
    {
        case "grey":
        body.style.backgroundColor = e.target.id;
        break;
        case "white":
        body.style.backgroundColor = e.target.id;
        break;
        case "blue":
        body.style.backgroundColor = e.target.id;
        break;
        case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
        default:
        console.log("No matching color is Found");

    }
  })
  
});

```

# body mass index calculator

```javascript
const form = document.querySelector("form");

// this usecase will give you empty
//const height = parseInt(document.querySelector("#height").value);
form.addEventListener("submit", function(e){
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if(height === "" || height<0 ||isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }else if(weight === "" || weight<0 ||isNaN(weight)){
    results.innerHTML = `Please give a valid height ${weight}`;
  }
  else{
    const bmi = (weight / ((height*height)/10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }

})
```

# Digital clock

```javascript

const clock = document.getElementById("clock");

setInterval(function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleString();
},1000);

```

# Number Guessing Game

```javascript
// create random number between 1 to 100
let randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
// to store the value of user guesses
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1 
let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    // pass user input in validateGuess function
    validateGuess(guess);
  });
}
// check given user number is between 1 to 100 or not
function validateGuess(guess){
  if(isNaN(guess)){
    alert("please enter a valid number");
  }else if(guess<1){
    alert("Please enter a number more than 1");
  }else if(guess>100){
    alert("please enter a number less than 100");
  }else{
    prevGuess.push(guess);
    //check guesses is over or not
    if(numGuess === 11)
    {
      displayGuess(guess);
      displayMessage(`Game Over! Random number was ${randomNumber}`);
      endGame()
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
// check user guess value is equal to original value
function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`You guesses it right`);
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`Number is to low`);
  }else if(guess > randomNumber){
    displayMessage(`Number is to high`);
  }
}
// clean the value for next number
function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML =`<h2>${message}</h2>`;
}
function endGame(){
  userInput.value = ""
  userInput.setAttribute('disabled', "")
  p.classList.add("button");
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  newGame()

}
function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
      randomNumber = parseInt(Math.random()*100+1);
      prevGuess = []
      numGuess = 1
      guessSlot.innerHTML =''
      remaining.innerHTML = `${11-numGuess}`;
      userInput.removeAttribute('disabled')
      startOver.removeChild(p);
      playGame = true;
    })
}
```