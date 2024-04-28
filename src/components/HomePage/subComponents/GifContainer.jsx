import React, { useState, useEffect } from 'react';
import styles from '../HomePage.module.css';

export default function GifContainer() {
  const [gif, setGif] = useState(null);
  const urlCATAAS = 'https://cataas.com/cat/gif';

  useEffect(() => {
    async function getGif() {
      try {
        const response = await fetch(urlCATAAS);
        if (response.ok) {
          setGif(() => response.url);
        }
      } catch (error) {
        console.error(error)
      }
    }
    getGif();
  }, []);


  return (
    <div className={styles.gifContainer}>
      {gif
        ? <img className={styles.michiGif} src={gif} alt='fun kitty gif' />
        : <p>Loading Fun Kitty gif...</p>
      }
    </div>
  );
}