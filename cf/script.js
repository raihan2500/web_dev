const input = document.querySelector("#input");
const button = document.querySelector("#load");
const show = document.querySelector("#show");
const details = document.querySelector("#details");

let info;

function createDetails(lebel, value){
  const el = document.createElement("div");
  el.classList.add("detail");
  el.textContent = `
    ${lebel} : ${value}
  `;
  return el;
}

function addDetails() {
  details.innerHTML = "";
  profile.innerHTML = "";

  const avatar = document.createElement("img");

  avatar.src = info.avatar;
  avatar.alt = `${info.handle}'s avatar`;

  profile.appendChild(avatar);

  details.appendChild(createDetails("Handle", info.handle));
  details.appendChild(createDetails("Rating", info.rating));
  details.appendChild(createDetails("Max Rating", info.maxRating));
  details.appendChild(createDetails("Rank", info.rank));
  details.appendChild(createDetails("Max Rank", info.maxRank));
  details.appendChild(createDetails("Contribution", info.contribution));
  details.appendChild(createDetails("Friends", info.friendOfCount));
}

async function loadDetails(){
  let handle = input.value.trim();
  if(handle === "")return;

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