import React, { useState, useEffect } from "react";
import styles from "../HomePage.module.css";

export default function GifContainer() {
  const [gif, setGif] = useState(null);
  const urlCATAAS = "https://cataas.com/cat/gif";

  const handleImgLoadingError = (e) => {
    e.target.src = "https://http.cat/status/500.jpg";
  };

  useEffect(() => {
    async function getGif() {
      try {
        const response = await fetch(urlCATAAS);
        if (response.ok) {
          setGif(() => response.url);
        }
      } catch (error) {
        console.error(error);
      }
    }
    getGif();
  }, []);

  return (
    <div className={styles.gifContainer}>
      {gif ? (
        <img
          className={styles.michiGif}
          src={gif}
          alt="fun kitty gif"
          onError={(e) => handleImgLoadingError(e)}
        />
      ) : (
        <p>Loading Fun Kitty gif...</p>
      )}
    </div>
  );
}
