
export function createDetails(lebel, value){
  const el = document.createElement("div");
  el.classList.add("detail");
  el.textContent = `
    ${lebel} : ${value}
  `;
  return el;
}

const details = document.querySelector("#details");
export function addDetails(info) {
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