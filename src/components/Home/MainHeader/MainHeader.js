import React from 'react'
import styles from './MainHeader.module.scss'
import Navigator from './Navigator/Navigator'
function MainHeader(props) {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}><a href="/">AndyDo.05</a></h1>
      <Navigator/>
    </header>
  )
}

export default MainHeader
