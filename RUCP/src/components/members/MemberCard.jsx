import React from 'react'
import { Link } from 'react-router-dom'
function MemberCard({member}) {
  
  return (
    <div>
      <h2>{member.handle}</h2>
      <p>{member.rating}</p>
      <p>{member.rank}</p>
      <Link to={`/members/${member.handle}`} >View profile</Link>
    </div>
  )
}

export default MemberCard