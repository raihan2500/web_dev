import React from 'react'

function Profile(props) {
  if(props.user == null){
    return (
      <p>No user found</p>
    );
  }
  const {handle, rating} = props.user;

  return (
    <div>
      <h2>Handle: {handle} </h2>
      <h2>rating: {rating}</h2>
    </div>
  )
}

export default Profile