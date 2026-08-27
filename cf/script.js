const input = document.querySelector("#input");
const button = document.querySelector("#load");
const show = document.querySelector("#show");
const details = document.querySelector("#details");

let info;

function addDetails(){
  details.innerHTML = "";
  const rating = document.createElement("span");
  rating.innerHTML = `
    <span>Rating ${info.rating} </span>
  `;
  details.appendChild(rating);
  
  const maxRating = document.createElement("span");
  maxRating.innerHTML = `
  <span>Max Rating ${info.maxRating} </span>
  `;
  details.appendChild(maxRating);

}

async function loadDetails(){
  let handle = input.value.trim();
  // if(handle === "")return;
  
  console.log(handle);
  handle = "tourist";

  try{
    const url = "https://codeforces.com/api/user.info?handles=" + handle;
    const res = await fetch(url);
    const data = await res.json();
    info = data.result[0];
    console.log(info);
    addDetails();
  }catch(err){
    console.log(err);

  }
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


show.addEventListener("click", ()=>{
  console.log(info);

});