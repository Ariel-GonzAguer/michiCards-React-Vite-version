import React, { useState, useEffect } from "react"
import styles from "./HomePage.module.css"

import Intro from "./subComponents/Intro"
import Header from "./subComponents/Header"
import GifContainer from "./subComponents/GifContainer"
import Menu from "./subComponents/Menu"
import Stats from "./subComponents/Stats"
import Footer from "./subComponents/Footer"

export default function HomePage() {
  const [intro, setIntro] = useState(false);

  function introAnimation() {
    setTimeout(() => {
      document.getElementById('intro').style.display = 'none';
      setIntro(true);
    }, 3000)
  }

  useEffect(() => {
    introAnimation()
  }, []);

  return (
    <>
      {
        !intro && <Intro />
      }

      <div className={styles.HomePage}>
        <Header className={styles.header} />
        <GifContainer className={styles.gifContainer} />
        <Menu className={styles.menu} />
        <Stats className={styles.stats} />
        <Footer />
      </div>
    </>
  )
}