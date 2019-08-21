import React from 'react'

const PasswordDisplay=(props)=>{
  return(
    <div id="displayBox" className="box">
      {props.passwords.map((password,i)=>{
        return <p key={i}>{password}</p>
      })}
    </div>
  )
}

export default PasswordDisplay