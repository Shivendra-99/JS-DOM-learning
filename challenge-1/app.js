/**
 * Write your challenge solution here
 */

let trunOnOff = document.getElementById("toggleButton");
let body = document.getElementById("body");
trunOnOff.addEventListener("click",(event)=>{
    event.preventDefault();
    var status = document.getElementById("status");
    if(trunOnOff.textContent =="Turn Off"){
        body.style.backgroundColor = "White";
        status.textContent = "Status: Off";
        trunOnOff.textContent = "Turn On";
       document.getElementById("bulb").className='bulb off';
        document.getElementById("status").style.color ="Black";
        document.getElementsByTagName('h1')[0].style.color = "Black";
        document.getElementsByTagName('p')[0].style.color = "Black";
    }else{
        status.textContent = "Status: On"; 
        trunOnOff.textContent = "Turn Off";
        body.style.backgroundColor = "Black";
        document.getElementById("status").style.color ="white";
        document.getElementsByTagName('h1')[0].style.color = "White";
        document.getElementsByTagName('p')[0].style.color = "white";
        document.getElementById("bulb").className='bulb ';
    }
})