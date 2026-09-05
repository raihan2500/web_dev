import React from 'react'

function Profile(props) {
  if(props.user == null){
    return <p>No user loaded</p>;
  }
  const user = props.user;
  const {handle, rating, maxRating, firstName, rank, maxRank} = user;

  return (
    <section>
      <h2>Handle: {handle}</h2>
      <h2>Rating: {rating}</h2>
      <h2>Max Rating: {maxRating}</h2>
      <h2>Rank: {rank}</h2>
      <h2>Max Rank: {maxRank}</h2>

    </section>
  )
}

export default Profile