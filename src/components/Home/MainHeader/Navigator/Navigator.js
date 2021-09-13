import React from 'react'
import styles from './Navigator.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navigator(props) {
  return (
    <nav className={styles.nav}>
      <FontAwesomeIcon icon="bars"/>
      
      <ul className={styles.nav__title}>
        <li className={styles.nav__items}><a href="/">About me</a></li> 
        <li className={styles.nav__items}><a href="/">Info</a></li>       
        <li className={styles.nav__items}><a href="/">MyCV</a></li>       
      </ul>

    </nav>
  )
}

export default Navigator
