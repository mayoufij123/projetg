import React from 'react'
import Pizza from '../Pizza'

function User({auth,userId}) {
  return (
    <div>
      <h1>{auth.name}</h1>
 
        <Pizza  userId={userId}/>
    </div>
  )
}

export default User
