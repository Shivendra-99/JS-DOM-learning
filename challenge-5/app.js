/**
 * Write your challenge solution here
 */
// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

let image = document.createElement('img');
let track = document.getElementById("carouselTrack");
let caption = document.getElementById("caption");
let indicators = document.getElementById("carouselNav");
for (let i = 0; i < images.length; i++) {
  let div = document.createElement('div');
  div.className = "carousel-indicator";
  indicators.appendChild(div);
}
track.appendChild(image);
image.className = "carousel-slide";
image.src = images[0].url;
image.alt = images[0].caption;
caption.textContent = images[0].caption;
let nextOrPrev = 0;
indicators.children.item(nextOrPrev).classList.add("active");

document.getElementById("darkMode").addEventListener('click',()=>{
  let value = document.getElementById("darkMode");
  let display = document.getElementById("timerDisplay");
  if(value.textContent == "Dark Mode On"){
    value.textContent= "Dark Mode off";
    let body = document.getElementById("body");
    body.style.backgroundColor =  'black';
    document.getElementById("darkMode").style.backgroundColor = 'grey';
    document.getElementsByTagName('h1').item(0).style.color = 'white';
    display.style.color = 'white';
  }else{
    value.textContent= "Dark Mode On";
    let body = document.getElementById("body");
    body.style.backgroundColor =  'white';
    document.getElementsByTagName('h1').item(0).style.color = 'black';
    document.getElementById("darkMode").style.backgroundColor = 'white';
    display.style.color = 'black';
  }
})

document.getElementById("nextButton").addEventListener('click', () => {
  nextOrPrev = nextOrPrev + 1;
  if (nextOrPrev >= images.length) {
    nextOrPrev = 0;
  }
  image.src = images[nextOrPrev].url;
  image.alt = images[nextOrPrev].caption;
  caption.textContent = images[nextOrPrev].caption;
  let index = nextOrPrev - 1 < 0 ? 3 : nextOrPrev - 1;
  indicators.children.item(index).classList.remove("active");
  indicators.children.item(nextOrPrev).classList.add("active");
});

document.getElementById("prevButton").addEventListener('click', () => {
  nextOrPrev = nextOrPrev - 1;
  if (nextOrPrev < 0) {
    nextOrPrev = 3;
  }
  image.src = images[nextOrPrev].url;
  image.alt = images[nextOrPrev].caption;
  caption.textContent = images[nextOrPrev].caption;
  let index = nextOrPrev == 3 ? 0 : nextOrPrev + 1;
  indicators.children.item(index).classList.remove("active");
  indicators.children.item(nextOrPrev).classList.add("active");
});
let interval = 0;
let round = 0, count = 5;
document.getElementById("autoPlayButton").addEventListener('click', () => {
  let timerDisplay = document.getElementById("timerDisplay");
  let value = document.getElementById("autoPlayButton").textContent;
  if (value == "Stop Auto Play") {
    document.getElementById("autoPlayButton").textContent = "Start Auto Play";
    timerDisplay.textContent = '';
    clearInterval(interval);
    interval=null;
  }else{
    document.getElementById("autoPlayButton").textContent = "Stop Auto Play";
    timerDisplay.textContent = "Next slide in 5";
    interval = setInterval(setTime, 1000);
  }
})

function setTime() {
  console.log("i am running ")
  timerDisplay.textContent = `Next slide in ${count}`;
  if (round >= images.length) {
    document.getElementById("autoPlayButton").textContent = "Start Auto Play";
    timerDisplay.textContent = '';
    clearInterval(interval);
    interval=null;
  }
  if (count == 0 && round < images.length) {
    count = 6;
    let index = round + 1 >= images.length ? 0 : round + 1;
    image.src = images[index].url;
    image.alt = images[index].caption;
    indicators.children.item(round).classList.remove("active");
    indicators.children.item(index).classList.add("active");
    round += 1;
  }
  count -= 1;
}




