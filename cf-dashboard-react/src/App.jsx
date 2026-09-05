import Header from "./Header";
import SearchBar from "./SearchBar";
import Profile from "./Profile";

import { use, useState } from "react";
import { getUser } from "./api";


function App(){
  const [handle, sethandle] = useState("");
  const [user, setUser] = useState(null);
  
  async function handleSearch(){
    try{
      const data = await getUser(handle);
      setUser(data);
    }catch{

    }
  }

  return(
    <>
      <Header />
      <SearchBar
        handle={handle}
        sethandle = {sethandle}
        onSearch={handleSearch}
      />
      <Profile 
        user={user}
      />
    </>
  );
}
export default App;