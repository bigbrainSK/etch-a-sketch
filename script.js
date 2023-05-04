let container = document.querySelector("#container");
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
     parsedPrompt = Math.pow(parsedPrompt, 2);
     alert(userPrompt);
     container.remove();  
     container = document.createElement('div'); 
     container.setAttribute('id', 'container');
     document.body.appendChild(container);

        for (let i=0; i<parsedPrompt; i++) {
            box = document.createElement('div');
            box.style.width = (600/parsedPrompt + 'px');
            box.style.height = (600/parsedPrompt + 'px');
            container.appendChild(box);
            box.addEventListener("mouseover", colorChange); 
            box.addEventListener("click", revertColor);     //function to revert the color with a click
        }
        if (parsedPrompt <1 || parsedPrompt >1000) {
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

