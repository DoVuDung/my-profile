import React from 'react'
import styles from'./Home.module.scss';
import MainHeader from './MainHeader/MainHeader';
import BodyContent from './BodyContent/Body';
function Home() {
  return (
    <div className={styles.home}>
      <MainHeader/>
      <BodyContent/>
    </div>
  )
}

export default Home
