import React from 'react'
import styles from'./Home.module.scss';
import MainHeader from './MainHeader/MainHeader';
import BodyContent from './BodyContent/Body';
import Footer from './Footer/Footer';
function Home() {
  return (
    <div className={styles.home}>
      <MainHeader/>
      <BodyContent/>
      <Footer/>
    </div>
  )
}

export default Home
