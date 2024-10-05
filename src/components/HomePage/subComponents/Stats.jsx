import React from "react";
import styles from "../HomePage.module.css";

export default function Stats() {
  const stats = ["Agility", "Softness", "Evilness", "Goodness", "Velocity"];

  function randomStats() {
    return Math.floor(Math.random() * 100);
  }

  return (
    <ul className={styles.stats}>
      {stats.map((stat, index) => (
        <li key={index}>
          <span className={styles.statName}>{stat}</span>
          <span className={styles.statNumber}>{randomStats()}</span>
        </li>
      ))}
    </ul>
  );
}
