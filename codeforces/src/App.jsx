import React from 'react'
import SearchBar from './SearchBar'
import Profile from './Profile'
import { getUser } from './api'
import { useState } from 'react'

function App() {
  const [handle, setHandle] = useState("tourist");
  const [user, setUser] = useState(null);

  async function searchHandle(){
    try{
      const data = await getUser(handle);
      setUser(data);
      console.log(data);
    }catch (err){

    }
  }

  return (
    <main>
      <SearchBar 
        setHandle = {setHandle}
        searchHandle = {searchHandle}
      />
      <Profile 
        user = {user}
      />      
    </main>
  )
}

export default App