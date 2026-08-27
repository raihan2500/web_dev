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

const user = {
  name: "Raihan",
  rating: 1800,
  age: 23
};
const {name, rating} = user;
console.log(name + "  " + rating);



//Spread/rest
const a = [1, 2, 3];
const b = [...a, 4, 5];
console.log(b);

const newUser = {
  ...user,
  home: "BD"
};
console.log(newUser);

export function sum(...numbers){
  let ans = 0;
  for(const x of numbers){
    ans += x;
  }
  return ans;
}

console.log("Sum: " + sum(1, 5, 10, 15)); //here we didn't pass array but sum() inputs like array for ... this syntax. It's called rest.

