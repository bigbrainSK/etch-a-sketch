const flexContainer = document.querySelector("#flex1");
const flexContainer2 = document.querySelector("#flex2");
const flexContainer3 = document.querySelector("#flex3");
const flexContainer4 = document.querySelector("#flex4");
const mainContainer = document.querySelector("#container1");


const box1 = document.createElement('div');
flexContainer.appendChild(box1);
box1.addEventListener("mouseover", colorChange); 

const box2 = document.createElement('div');
flexContainer.appendChild(box2);
box2.addEventListener("mouseover", colorChange);

const box3 = document.createElement('div');
flexContainer.appendChild(box3);
box3.addEventListener("mouseover", colorChange);

const box4 = document.createElement('div');
flexContainer.appendChild(box4);
box4.addEventListener("mouseover", colorChange);

const box5 = document.createElement('div');
flexContainer.appendChild(box5);
box5.addEventListener("mouseover", colorChange);

const box6 = document.createElement('div');
flexContainer.appendChild(box6);
box6.addEventListener("mouseover", colorChange);



const baux = document.createElement('div');
flexContainer2.appendChild(baux);








function colorChange() {
    this.style.backgroundColor = 'black';
}