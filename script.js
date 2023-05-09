let container = document.querySelector("#container");

let userPrompt = '';
let divAdd = document.createDocumentFragment() 
let grid = 256;

for (let i=0; i<grid; i++) {
    box = document.createElement('div')
    container.appendChild(box);
    box.classList.add('box1');
    box.addEventListener("mouseover", colorChange); 
    box.addEventListener("click", revertColor);     //function to revert the color with a click
}

    
function gridPrompt() {   
     let userPrompt = prompt("enter a number from 1 - 100." ) 
     let parsedPrompt = parseInt(userPrompt);
     let finalPrompt = Math.pow(parsedPrompt, 2);
     container.remove();  
     let container2 = document.querySelector("#container2");

        for (let i=0; i<finalPrompt; i++) {
            box = document.createElement('div');
            box.style.width = (650/parsedPrompt)+'px';
            box.style.height = (650/parsedPrompt)+'px';
            box.classList.add('box2');
            container2.appendChild(box);
            box.addEventListener("mouseover", colorChange); 
            box.addEventListener("click", revertColor);    
        }
        if (finalPrompt <1 || finalPrompt >10000) {
            finalPrompt = 256;
            alert('try again');
        }
}

function colorChange() {
    this.style.backgroundColor = 'maroon';     
}

function revertColor() {
    this.style.backgroundColor = 'crimson';
} 

function clearContainer() {
    //console.log(document.getElementById("container2"));
    document.getElementById("container2").innerHTML = '';
}