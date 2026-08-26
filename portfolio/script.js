const skills = [
  "c/c++",
  "javascript",
  "java",
  "react"
]


const obj = {
  name:"Raihan",
  university:"University of Rajshahi",
  skills: skills
}


const add = (a, b) =>{
  return a + b;
}


const title = document.querySelector("#title");
const button = document.querySelector("#changeBtn");

button.addEventListener("click", () => {
  title.textContent = "Hello JavaScript!";
  title.style.color = "blue";
});

const cards = document.querySelector(".card");
console.log(cards);

const projects = document.querySelector(".projects");
const newCard = document.createElement("p");
newCard.textContent = "project 3";
newCard.classList.add("card");

projects.appendChild(newCard);
