//can I create a loop for declaring each of the 16 containers (?)
const container = document.querySelector("#container");
let box1 = document.createElement('div');
container.appendChild(box1);
box1.addEventListener("mouseover", colorChange); 


let divAdd = document.createDocumentFragment() 

for (let i=0; i<256; i++) {
    box1 = document.createElement('div');
    container.appendChild(box1);
    box1.addEventListener("mouseover", colorChange); 
    console.log('meow');
}


function colorChange() {
    this.style.backgroundColor = 'teal';
}