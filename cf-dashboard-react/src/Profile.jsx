import React from 'react'

function Profile(props) {
  const handle = props.handle;
  return (
    <section>
      {/* <p>No user loaded</p> */}
      {/* <h2>{props.handle}</h2> */}
      <h2>{handle}</h2>
    </section>
  )
}

export default Profile