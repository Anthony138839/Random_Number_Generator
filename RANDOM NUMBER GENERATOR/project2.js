// RANDOM NUMBER GENERATOR

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");

myButton.onclick = function(){
    let randomNum = Math.floor(Math.random() * 10) + 1;
    myLabel.textContent = randomNum;
}