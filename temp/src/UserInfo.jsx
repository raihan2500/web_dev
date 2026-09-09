import React from 'react'
import UserContext from './UserContext'
import { useContext } from 'react'

function UserInfo() {
  const username = useContext(UserContext);

  return (
    <div>
      UserInfo: {username}
    </div>
  )
}

export default UserInfo