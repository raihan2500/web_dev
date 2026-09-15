import React from 'react'
import { members } from '../data/members'
// import MemberCard from '../components/members/MemberCard'
import MemberCard from '../components/members/MemberCard'

function Members() {
  return (
    <div>
      {
        members.map((member)=>(
          
          <MemberCard key={member.handle} member={member} />
        ))

      }
    </div>
  )
}

export default Members