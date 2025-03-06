/**
 * Write your challenge solution here
 */
const clock = document.querySelector(".digital-clock")
let count =0;
setTime();

const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
const clockface = document.querySelector('.clock');
for(let i=12;i>=1;i--){
    const span = document.createElement('span');
    span.className = "number";
    span.style = "--rotation:"+i;
    span.textContent = i;
    clockface.appendChild(span);
}

document.querySelector(".date").textContent = new Date().toLocaleDateString(undefined,options);

setInterval(setTime,1000);

function setTime (){
    const date = new Date();
    let hour = date.getHours();
    hour = date.getHours()<10 ? "0"+hour : hour%12==0?"00":"0"+hour%12;
    let minutes = date.getMinutes();
    minutes = minutes<10?"0"+minutes:minutes;
    let sec =  date.getSeconds();
    sec = sec<10?"0"+sec:sec;
    //Setting the time 
    clock.textContent = hour+":"+minutes+":"+sec;

    let degrees = ((hour % 12) * 30); 
    let min = minutes * 6;
    document.getElementById("sec").style.rotate = sec*6+"deg";
    document.getElementById("min").style.rotate = min+"deg";
    document.getElementById("hour").style.rotate = degrees+"deg";
}