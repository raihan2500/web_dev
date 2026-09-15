import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";


// Current file directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


// Read userList.txt
const data = fs.readFileSync(
  path.join(__dirname, "userList.txt"),
  "utf-8"
);


// Convert lines into array
const handles = data
  .split("\n")
  .map(line => line.trim())
  .filter(line => line.length > 0);



async function generateMembers() {

  const members = [];


  for (const handle of handles) {

    try {

      const url =
        `https://codeforces.com/api/user.info?handles=${handle}`;


      const response = await fetch(url);

      const result = await response.json();


      const user = result.result[0];


      members.push({

        handle: user.handle,

        rating: user.rating ?? 0,

        maxRating: user.maxRating ?? 0,

        rank: user.rank ?? "unrated",

        maxRank: user.maxRank ?? "unrated"

      });


      console.log(`Fetched: ${handle}`);


    } catch(error) {

      console.log(`Failed: ${handle}`);

    }

  }



  // Create JS file content

  const fileContent = 
`export const members = ${JSON.stringify(
  members,
  null,
  2
)};
`;



  // Write to src/data/members.js

  fs.writeFileSync(

    path.join(
      __dirname,
      "../src/data/members.js"
    ),

    fileContent

  );



  console.log("members.js generated successfully!");

}



generateMembers();