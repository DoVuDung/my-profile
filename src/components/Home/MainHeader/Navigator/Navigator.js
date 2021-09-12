import React from 'react'
import styles from './Navigator.module.scss'
function Navigator(props) {
  return (
    <nav className={styles.nav}>
      <ul>About Me
        <li><a href="/">Info</a></li>
        <li><a href="/">My CV</a></li>        
      </ul>

    </nav>
  )
}

export default Navigator
