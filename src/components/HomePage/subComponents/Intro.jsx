import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldCat } from '@fortawesome/free-solid-svg-icons';
import styles from '../HomePage.module.css';

export default function Intro() {
  return (
    <>
      <div id='intro' className={styles.intro}>
        <FontAwesomeIcon icon={faShieldCat} style={{ height: "50px", width: "auto", margin: '25px' }} className={styles.blink1} />
        <p>This game needs small screen size to work properly</p>
      </div>
    </>
  );
}