import React from 'react'
import styles from '../HomePage.module.css';

export default function Stats() { 
  const stats = ['Agility', 'Softness', 'Evilness', 'Goodness', 'Velocity'];

  function randomStats() {
    return Math.floor(Math.random() * 100);
  }

  return ( 
    <ul className={styles.stats}>
    {
      stats.map((stat, index) => (
        <li className={styles.statLi} key={index}>{stat}<br /><br /> {randomStats()} </li>
      ))
    }
    </ul>
  )
}