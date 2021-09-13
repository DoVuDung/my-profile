import React from 'react';

//import aim from '../../../../public/Aim.mp4';
import styles from './Body.module.scss';


function Body() {
  
  return (
    <div >
      <video autoPlay muted loop className={styles.video}>
        <source src="https://cdn.dribbble.com/users/427857/screenshots/16083559/media/586915718aaf36c3d2362c2380b04969.mp4" type="video/mp4"/>
      </video>
      
    </div>
  )
}

export default Body
