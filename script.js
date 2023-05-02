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

// function gridButton () {
//     for (let i=0; i<100; i++) {
//         if (userPrompt==i+'x'+i) {
//             grid === i*i;
//         }
//         else {
//             grid === 16*16;
//         }
//         console.log('woof');
//     }
    // if (prompt=='4x4') {grid === 16};
//}


function gridButton () {
    switch(userPrompt) {
    case '2x2': grid = 4; 
        break;
    case '3x3': grid = 9;
        break;
    case '4x4': grid = 16;
        break;
    case '5x5': grid = 25;
        break;
    case '6x6': grid = 36;
        break;
    case '7x7': grid = 49;
        break;
    case '8x8': grid = 64;
        break;
    case '9x9': grid = 81;
        break;
    case '10x10':grid = 100;
        break;
    default: 
        grid = 256;
    }  
}
    
    
function gridPrompt() {   
     let userPrompt = prompt("please select desired grid dimensions, in the format of'3x3'." );
     alert(userPrompt);
     console.log('worked');
}

function colorChange() {
    this.style.backgroundColor = 'maroon';     
}

function revertColor() {
    this.style.backgroundColor = 'crimson';
}

