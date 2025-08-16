// Select all element which has class name as button
const buttons = document.querySelectorAll(".button");
// select body
const body = document.querySelector("body");

buttons.forEach(function(button){
    button.addEventListener("click", function(e){
        const color = e.target.id;
        switch(color){
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "white":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            
        }
    })
});