import React from 'react'
import Pizza from '../Pizza'

function User({auth}) {
  return (
    <div>
      <h1>{auth.name}</h1>
 
        <Pizza/>
    </div>
  )
}

export default User
