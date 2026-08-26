const input = document.querySelector("#nameInput");
const button = document.querySelector("#greetBtn");
const message = document.querySelector("#message");


// button.addEventListener("click", ()=>{
//   console.log(input.value);
//   message.textContent = input.value;
// });


input.addEventListener("keydown", (event)=>{
  console.log(input.value);
  if(event.key == "Enter"){
    message.textContent = input.value;
  }
});

/*
click
mouseover
keydown
submit
input
change
 */