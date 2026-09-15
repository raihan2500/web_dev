import React from 'react'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch';

function Profile() {
  
  
  return (
    <main>
      <h1>Profile</h1>
      <p>Handle: {handle} </p>
    </main>
  )
}

export default Profile