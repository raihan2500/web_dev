import { getUser } from "./api.js";
import { addDetails } from "./ui.js";

const input = document.querySelector("#input");
const button = document.querySelector("#load");

async function loadDetails(){
  let handle = input.value.trim();
  if(handle === "")return;
  const info = await getUser(handle);
  addDetails(info);  
  input.value = "";
}


input.addEventListener("keydown", (event)=>{
  if(event.key === "Enter"){
    loadDetails();  
  }
});

button.addEventListener("click", ()=>{
  loadDetails();
});