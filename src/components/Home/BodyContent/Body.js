import React, {useState} from 'react';
import { useTrail, animated } from 'react-spring'
//import aim from '../../../../public/Aim.mp4';
import styles from './Body.module.scss';


function Body() {
  const [open, setOpen] = useState(true)
  return (
    <div onClick={() => setOpen(state => !state)}>
      <video autoplay muted loop className={styles.video}>
        <source src="" type="video/mp4"/>
      </video>
      
    </div>
  )
}

export default Body
