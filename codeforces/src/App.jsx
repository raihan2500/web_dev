import React, { useEffect } from 'react'
import SearchBar from './SearchBar'
import Profile from './Profile'
import { getUser } from './api'
import { useState } from 'react'

function App() {
  const [handle, setHandle] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(()=>{
    setLoading(true);
    async function search(){
      try{
        const data = await getUser(handle);
        setUser(data);
        console.log(data);
      }catch(err){
        setError(err.message);
        setUser(null);
      } finally{
        setLoading(false);
      }
    }  
    search();
  }, [handle]);

  return (
    <main>

      <SearchBar 
        setHandle = {setHandle}
        />
      
      {loading && <p>Searching...</p>}
      {error && <p>{error}</p> }
      {!loading && !error && user && <Profile user = {user} /> }
    </main>
  )
}

export default App