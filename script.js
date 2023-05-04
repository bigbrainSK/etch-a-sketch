//can I create a loop for declaring each of the 16 containers (?)
const container = document.querySelector("#container");
const container2 = document.querySelector("#container2");
let box = document.createElement('div');
container.appendChild(box);
box.addEventListener("mouseover", colorChange); 

let userPrompt = '';
let divAdd = document.createDocumentFragment() 
let grid = 255;

for (let i=0; i<grid; i++) {
    box = document.createElement('div');
    container.appendChild(box);
    box.addEventListener("mouseover", colorChange); 
    box.addEventListener("click", revertColor);     //function to revert the color with a click
}

    
function gridPrompt() {   
     let userPrompt = prompt("enter a number from 1 - 100." ) 
     let parsedPrompt = parseInt(userPrompt);
     grid = parsedPrompt;
     alert(userPrompt);
     container.remove   //need to find remove element method

        for (let i=0; i<parsedPrompt; i++) {
            box = document.createElement('div');
            container.appendChild(box);
            box.addEventListener("mouseover", colorChange); 
            box.addEventListener("click", revertColor);     //function to revert the color with a click
        }
        if (parsedPrompt <1 || parsedPrompt >100) {
            parsedPrompt = 256;
            alert('try again');
        }
}

function colorChange() {
    this.style.backgroundColor = 'maroon';     
}

function revertColor() {
    this.style.backgroundColor = 'crimson';
}

