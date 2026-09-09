import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import UserContext from './UserContext';
import Card from './Card';
import UserInfo from './UserInfo';
function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(event){
    event.preventDefault();

    console.log(username);
    console.log(password);

  }

  return (
    <main>

      <UserContext.Provider value={username}>
        <UserInfo />
      </UserContext.Provider>
      

      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder='useraname'
          value={username}
          onChange={(event)=>setUsername(event.target.value)}
        />
        <br />
        <input 
          type="password" 
          placeholder='password'
          onChange={event=>setPassword(event.target.value)}
        />
        <br />
        <button type='submit'>submit</button>
      </form>

      <Card>
        <h1>Hi how are u</h1>
      </Card>
      
      <Card>
        <h2>Hello I'm fine</h2>
      </Card>



    </main>
  );

}

export default App