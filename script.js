const flexContainer1 = document.querySelector("#flex1");
const flexContainer2 = document.querySelector("#flex2");
const flexContainer3 = document.querySelector("#flex3");
const flexContainer4 = document.querySelector("#flex4");
const mainContainer = document.querySelector("#container1");

//first container
const box1 = document.createElement('div');
flexContainer1.appendChild(box1);
box1.addEventListener("mouseover", colorChange); 

const box2 = document.createElement('div');
flexContainer1.appendChild(box2);
box2.addEventListener("mouseover", colorChange);

const box3 = document.createElement('div');
flexContainer1.appendChild(box3);
box3.addEventListener("mouseover", colorChange);

const box4 = document.createElement('div');
flexContainer1.appendChild(box4);
box4.addEventListener("mouseover", colorChange);


//second container
const baux1 = document.createElement('div');
flexContainer2.appendChild(baux1);
baux1.addEventListener("mouseover", colorChange);

const baux2 = document.createElement('div');
flexContainer2.appendChild(baux2);
baux2.addEventListener("mouseover", colorChange);

const baux3 = document.createElement('div');
flexContainer2.appendChild(baux3);
baux3.addEventListener("mouseover", colorChange);

const baux4 = document.createElement('div');
flexContainer2.appendChild(baux4);
baux4.addEventListener("mouseover", colorChange);

//third container
const bahx1 = document.createElement('div');
flexContainer3.appendChild(bahx1);
bahx1.addEventListener("mouseover", colorChange);

const bahx2 = document.createElement('div');
flexContainer3.appendChild(bahx2);
bahx2.addEventListener("mouseover", colorChange);

const bahx3 = document.createElement('div');
flexContainer3.appendChild(bahx3);
bahx3.addEventListener("mouseover", colorChange);

const bahx4 = document.createElement('div');
flexContainer3.appendChild(bahx4);
bahx4.addEventListener("mouseover", colorChange);

//fourth container
const bahks1 = document.createElement('div');
flexContainer4.appendChild(bahks1);
bahks1.addEventListener("mouseover", colorChange);

const bahks2 = document.createElement('div');
flexContainer4.appendChild(bahks2);
bahks2.addEventListener("mouseover", colorChange);

const bahks3 = document.createElement('div');
flexContainer4.appendChild(bahks3);
bahks3.addEventListener("mouseover", colorChange);

const bahks4 = document.createElement('div');
flexContainer4.appendChild(bahks4);
bahks4.addEventListener("mouseover", colorChange);




function colorChange() {
    this.style.backgroundColor = 'black';
}