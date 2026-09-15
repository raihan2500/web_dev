import React from 'react'

import { Link, useParams, Outlet } from 'react-router'
import useFetch from '../hooks/useFetch';
function ProfileLayout() {

  const {handle} = useParams();
  const url = "https://codeforces.com/api/user.info?handles=" + handle;
  
  const {
    data,  
    loading,
  } = useFetch(url);
  
  if(loading){
    return (
      <h1>Loading</h1>
    )
  }else{
    console.log(url);
    console.log(data);
    return(
      <main>
        done
      </main>
    );

  }

  return (
    <main>
      <h1>{handle}'s profile </h1>
      <nav>
        <Link to=".">
          Overview
        </Link>

        <Link to="contests">
          Contests
        </Link>

        <Link to="submissions">
          Submissions
        </Link>
      </nav>

      <hr />

      <Outlet />
    </main>

  )
}

export default ProfileLayout