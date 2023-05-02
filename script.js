//can I create a loop for declaring each of the 16 containers (?)
const container = document.querySelector("#container");
let box = document.createElement('div');
container.appendChild(box);
box.addEventListener("mouseover", colorChange); 

const userPrompt = '';
let divAdd = document.createDocumentFragment() 
let grid = 256;

for (let i=0; i<grid; i++) {
    box = document.createElement('div');
    container.appendChild(box);
    box.addEventListener("mouseover", colorChange); 
    box.addEventListener("click", revertColor);     //function to revert the color with a click
}

function gridButton () {
    for (let i=0; i<100; i++) {
        if (userPrompt==i+'x'+i) {
            grid === i*i;
        }
        else {
            grid === 16*16;
        }
        console.log('woof');
    }
    // if (prompt=='4x4') {grid === 16};
}
    
function gridPrompt() {   
     let userPrompt = prompt("please select desired grid dimensions, in the format of'3x3'." );
     alert(userPrompt);
     console.log('worked');
     return gridButton();
}

function colorChange() {
    this.style.backgroundColor = 'maroon';     
}

function revertColor() {
    this.style.backgroundColor = 'crimson';
}

