import React from 'react'
import { useParams } from 'react-router-dom'
import { members } from '../data/members';

function MemberProfile() {
  const {id} = useParams();
  const member = members.find(m=>m.handle == id);

  return (
    <div>

    <h1>
    {member.name}
    </h1>


    <p>
    Codeforces:
    {member.cfUsername}
    </p>


    <p>
    Rating:
    {member.rating}
    </p>


  </div>

)
}

export default MemberProfile