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