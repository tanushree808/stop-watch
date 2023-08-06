//let element = document.body;
/*let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";*/

/*let element = document.querySelector("#fruit");
let child = element.nextElementChild;
child.style.backgroundColor = "lightgreen";*/

//ADD OR CHANGE HTML ELEMENT

/*const nameTag = document.createElement("h1");
nameTag.innerHTML = window.prompt("enter your name");
document.body.append(nameTag);*/

/*const myList = document.querySelector("#fruit");
const listItem = document.createElement("li");
listItem.textContent = "nul";
myList.prepend(listItem);*/

/*const title = document.getElementById("mytitle");
title.style.backgroundColor = "red";
title.style.color = "rgb(50,200,250)";
title.style.fontFamily = "consolas";
title.style.textAlign = "center";
title.style.border = "2px solid";
title.style.display = "black";*/

//EVENTS

/*const element = document.getElementById("mybutton");
element.onclick = dosomething;

function dosomething() {
  alert("you did something!");
}*/

//const element = document.body;
//element.onload = dosomething;

/*element.onchange = dosomething;
const element = document.getElementById("mytext");
function dosomething() {
  alert("you did something!");
}*/

/*const element = document.getElementById("mydiv");
//element.onmouseover = dosomething;
//element.onmouseout = dosomethingelse;
element.onmousedown = dosomething;
element.onmouseup = dosomethingelse;

function dosomething() {
  //alert("you do something");
  element.style.backgroundColor = "red";
}

function dosomethingelse() {
  //alert("you do something");
  element.style.backgroundColor = "lightgreen";
}*/

//ADD EVENT LISTNER METHOD

/*const innerdiv = document.getElementById("innerdiv");
const outerdiv = document.getElementById("outerdiv");

innerdiv.addEventListener("click", changeblue);
outerdiv.addEventListener("click", changeblue);

function changeblue() {
  alert(`you selected ${this.id}`);
  this.style.backgroundColor = "lightblue";
}*/

//KEY PRESSES
/*const mydiv = document.getElementById("mydiv");
window.addEventListener("keydown", move);
let x = 0;
let y = 0;

function move(event) {
  switch (event.key) {
    case "ArrowDown":
      y += 5;
      mydiv.style.top = y + "px";
      break;
  }
}*/

//ANIMATION

/*const mybutton = document.getElementById("mybutton");
const myanimation = document.getElementById("mydiv");

mybutton.addEventListener("click", begin);

function begin() {
  let timerid = null;
  let degrees = 0;
  let x = 0;
  let y = 0;

  timerid = setInterval(frame, 1);

  function frame() {
    if (x >= 200 || y >= 200) {
      clearInterval(timerid);
    } else {
      degrees += 8;
      x += 1;
      y += 1;
      myanimation.style.left = x + "px";
      myanimation.style.top = y + "px";
      myanimation.style.transform = "rotateZ(" + degrees + "deg)";
    }
  }
}*/

/*let canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");*/

/*context.strokeStyle = "purple";
context.lineWidth = 10;
context.beginPath();
context.moveTo(0, 0);
context.lineTo(250, 250);
context.lineTo(250, 500);
context.moveTo(500, 0);
context.lineTo(250, 250);
context.stroke();*/
//draw triangle

/*context.beginPath();
context.moveTo(250, 0);
context.lineTo(0, 250);
context.lineTo(500, 250);
context.lineTo(250, 0);
context.fill();
context.fillStyle = "purple";*/
//cookies

//document.cookie =
// "firstname=tanu;expires=sunday,1 january 2030 12:00:00 UTC;path=/";
//document.cookie =
//"firstname=tanu;expires=sunday,1 january 2030 12:00:00 UTC;path=/";
//console.log(document.cookie);

/*function setcookie(name, value, daystolive) {
  const date = new Date();
  date.setTime(date.getTime()+daystolive*24*60*60*1000);
  let expires="expires"+date.toUTCString();
  document.cookie=`${name}`=${value};
}*/
const timedisplay = document.querySelector("#timedisplay");
const startbtn = document.querySelector("#startbtn");
const pausebtn = document.querySelector("#pausebtn");
const resetbtn = document.querySelector("#resetbtn");

let starttime = 0;
let elapsedtime = 0;
let currenttime = 0;
let paused = true;
let intervalid;
let hrs = 0;
let mins = 0;
let secs = 0;

startbtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    starttime = Date.now() - elapsedtime;
    intervalid = setInterval(updatetime, 75);
  }
});
pausebtn.addEventListener("click", () => {
  if (!paused) {
    paused = true;
    elapsedtime = Date.now();
    -starttime;
    clearInterval(intervalid);
  }
});
resetbtn.addEventListener("click", () => {
  paused = true;
  clearInterval(intervalid);
  starttime = 0;
  elapsedtime = 0;
  currenttime = 0;
  hrs = 0;
  mins = 0;
  secs = 0;
  timedisplay.textContent = "00:00:00";
});
function updatetime() {
  elapsedtime = Date.now() - starttime;
  secs = Math.floor((elapsedtime / 1000) % 60);
  mins = Math.floor((elapsedtime / (1000 % 60)) % 60);
  hrs = Math.floor((elapsedtime / (1000 * 60 * 60)) % 60);

  secs = pad(secs);
  mins = pad(mins);
  hrs = pad(hrs);

  timedisplay.textContent = `${hrs}:${mins}:${secs}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}
