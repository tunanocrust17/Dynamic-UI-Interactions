import Buildings from './buildings.jpg';
import Computer from './computers.jpg';
import TallBuildings from './tall-buildings.jpg';

let imageArray = [Buildings, Computer, TallBuildings];
let imageArrayLength = imageArray.length;

let currentIndex = 0;

function Component(){
let imgElement = document.querySelector('.carousel-img');
imgElement.src = imageArray[currentIndex];
}

let forwardBtn = document.querySelector('.forward-btn-div');
let backBtn = document.querySelector('.back-btn-div');

function moveForward(){
    forwardBtn.addEventListener('click', ()=>{
        
        if(currentIndex < imageArrayLength-1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        console.log(currentIndex)
        Component();
    })
}

function moveBack(){
    backBtn.addEventListener('click', ()=>{
        console.log('we going waaaaay back')
        if(currentIndex == 0) {
            currentIndex = imageArrayLength-1;
        } else {
            currentIndex--;
        }
        console.log(currentIndex)
        Component();
    })
}

export {Component, moveForward, moveBack}