const flex1 = document.querySelector(".flex1");
const flex2 = document.querySelector(".flex2");
const flex3 = document.querySelector(".flex3");
const flex4 = document.querySelector(".flex4");
const mainContainer = document.querySelector("#container1");

//first container
const box1 = document.createElement('div');
flex1.appendChild(box1);
box1.addEventListener("mouseover", colorChange); 




//second container
const baux1 = document.createElement('div');
flex2.appendChild(baux1);
baux1.addEventListener("mouseover", colorChange);



//third container
const bahx1 = document.createElement('div');
flex3.appendChild(bahx1);
bahx1.addEventListener("mouseover", colorChange);



//fourth container
const bahks1 = document.createElement('div');
flex4.appendChild(bahks1);
bahks1.addEventListener("mouseover", colorChange);


let divAdd = document.createDocumentFragment() 

for (let i=0; i<16; i++) {
    let newDiv = document.createElement('div');
    newDiv.class = 'flex' + i;
    divAdd.appendChild(newDiv);
    newDiv.addEventListener("mouseover", colorChange); 
    }



function colorChange() {
    this.style.backgroundColor = 'teal';
}