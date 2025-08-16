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