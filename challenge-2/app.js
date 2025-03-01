/**
 * Write your challenge solution here
 */
let heading = document.getElementById("mainHeading");
let redButton = document.getElementById("redButton");
let greenButton = document.getElementById("greenButton");
let blueButton = document.getElementById("blueButton");
let purpleButton = document.getElementById("purpleButton");
let resetButton = document.getElementById("resetButton");
redButton.addEventListener('click',()=>{
    heading.style.color="#e74c3c";
});
greenButton.addEventListener('click',()=>{
    heading.style.color="#2ecc71";
});
blueButton.addEventListener('click',()=>{
    heading.style.color="#3498db";
});
redButton.addEventListener('click',()=>{
    heading.style.color="#e74c3c";
});

purpleButton.addEventListener('click',()=>{
    heading.style.color = '#9b59b6';
});

resetButton.addEventListener('click',()=>{
    heading.style.color = '#34495e';
})