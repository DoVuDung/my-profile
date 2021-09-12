import React from 'react'
import "./Button.scss"
function Button(props) {
  return (
    <div className={props.className}>
      {props.children}
    </div>
  )
}

export default Button
