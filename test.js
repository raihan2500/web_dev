// localStorage.setItem("name", "Raihan");
// const name = localStorage.getItem("name");

const todo = {
  text: "Learn Js",
  completed: false
};

// localStorage.setItem("todo", JSON.stringify(todo));
const jsn = JSON.stringify(todo);
console.log(JSON.stringify(todo));

console.log(JSON.parse(jsn));