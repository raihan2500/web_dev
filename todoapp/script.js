const input = document.querySelector("#todoInput");
const button = document.querySelector("#addBtn");
const result = document.querySelector("#result");

button.addEventListener("click", async()=>{
  const title = input.value.trim();
  if(title === "")return;
  const post = await fetch(
    "https://jsonplaceholder.typicode.com/todos",
    {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        title: title,
        completed: false,
        // userId: Date.now()
      })
    }
  );
  const data = await post.json();
  console.log(data);
  result.textContent = "Created todo with id: " + String(data.userId);

});

