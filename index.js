// SELECTEURS 

//document.querySelector('h4').style.background="yellow";

//const baliseHTML = document.querySelector("h4");

//baliseHTML.style.background="yellow";

//console.log(baliseHTML);

//-----------------------------------------------------------------

// CLICK EVENT

const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const answer = document.querySelector('p');


questionContainer.addEventListener('click', () => {

  questionContainer.classList.toggle('question-clicked');

});

btn1.addEventListener("click", () => {
  answer.classList.add("show-response");
  answer.style.background = "green";
  //console.log("clickez, clickez");
});

btn2.addEventListener("click", () => {
  // console.log("click stp");

  answer.classList.add("show-response");
  answer.style.background = "red";
})
//-------------------------------------------------------------

//MouseEvent

const mousemove = document.querySelector(".mousemove");
// console.log(mousemove);

window.addEventListener('mousemove', (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
})

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%, -25%)";
  mousemove.style.border = "2px solid white";
})


window.addEventListener('mouseup', () => {
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
  mousemove.style.border = "2px solid teal";
})


questionContainer.addEventListener('mouseenter', () => {
  questionContainer.style.background = "green";
  //console.log("mouseenterrrrrr")
})

questionContainer.addEventListener('mouseout', () => {
  //console.log("mouseoooooout !!!");
  questionContainer.style.background = "yellow";
})

answer.addEventListener('mouseover', () => {
  answer.style.transform = "rotate(2deg)";
})

//---------------------------------------------------------------

// KeyPress event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

document.addEventListener('keypress', (e) => {
  key.textContent = e.key;
  if (e.key == "g") {
    keypressContainer.style.background = "red";
  } else if (e.key == "G") {
    keypressContainer.style.background = "teal";
  } else {
    keypressContainer.style.background = "yellow";
  }
})

// -----------------------------------------------------------

// scroll event

const nav = document.querySelector('nav');
console.log(nav);

window.addEventListener('scroll', () => {

  if (window.scrollY > 120) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-50px";
  }
})

// -----------------------------------------------------------------

// form events

const inputName = document.querySelector('input[type="text"]');
console.log(inputName);
let pseudo = "";
const select = document.querySelector("select");

inputName.addEventListener("input", (e)=>{
 // console.log(e.target.value);
  pseudo = e.target.value;
  console.log(pseudo);
})


























































































