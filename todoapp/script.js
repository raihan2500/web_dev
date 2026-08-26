const input = document.querySelector("#input");
const button = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

let todos = [];

function addItem(data){
  data = data.trim();
  if(data === "")return;
  const text = document.createElement("span");
  text.textContent = data;

  const item = document.createElement("li");
  
  const todo = {
    id: Date.now(),
    text: data,
    completed: false
  };
  todos.push(todo);

  list.appendChild(item);

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  item.appendChild(text);
  item.appendChild(deleteBtn);

  deleteBtn.addEventListener("click", ()=>{
    todos = todos.filter(t=> t.id !== todo.id);
    item.remove();
  });

  text.addEventListener("click", ()=>{
    todo.completed = !todo.completed;
    text.classList.toggle("completed");
  })

  input.value = "";
}

input.addEventListener("keydown", (event)=>{
  if(event.key == "Enter"){
    addItem(input.value);
  }
});

button.addEventListener("click", ()=>{
  addItem(input.value);
});

const loadBtn = document.querySelector("#loadBtn");


async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  if(!response.ok){
    throw new Error("HTTP error" + response.status);
  }
  return await response.json();
}


loadBtn.addEventListener("click", async ()=>{
  try{
    const data = await getTodo();
    data.forEach(element => {
      addItem(element.title);
    });
    
  } catch(err){
    console.error(err);
  }
});