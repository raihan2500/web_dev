import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router';

function Home() {
  const [handle, setHandle] = useState("");
  const navigate = useNavigate();

  const search = ()=>{
    event.preventDefault();
    if(handle.trim() === ""){
      return;
    }  
    navigate(`/profile/${handle}`);
  }

  return (
    <main>
      <h1>CF Dashboard</h1>
      <form  onSubmit={search} >
        <input 
          type="text" 
          value={handle}
          placeholder='Enter handle'
          onChange={(event) => {setHandle(event.target.value);}}
          
        />
        <button>
          Search
        </button>
      </form>
      
    </main>
  )
}

export default Home