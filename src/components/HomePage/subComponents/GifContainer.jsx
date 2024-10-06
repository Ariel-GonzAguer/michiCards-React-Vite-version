import React, { useState, useEffect } from "react";
import styles from "../HomePage.module.css";

import errorGifCat from "../../../resources/img/errorGifCat.webp";

export default function GifContainer() {
  const [gif, setGif] = useState(
    () => sessionStorage.getItem("catGif") || null
  );
  const urlCATAAS =
    "https://cataas.com/cat/gif?type=square&position=center&width=100&height=100";

  async function getGif() {
    try {
      if (!gif) {
        const response = await fetch(urlCATAAS);
        if (response.ok) {
          const gifUrl = response.url;
          setGif(gifUrl);
          sessionStorage.setItem("catGif", gifUrl); // Almacenar el GIF en sessionStorage
        } else {
          throw new Error("Failed to fetch GIF");
        }
      }
    } catch (error) {
      console.error(error);
      setGif(errorGifCat); // Establecer un GIF de error en caso de fallo
    }
  }

  useEffect(() => {
    getGif();
  }, [gif]);

  return (
    <div className={styles.gifContainer}>
      {gif ? (
        <img
          className={styles.michiGif}
          src={gif}
          alt="fun kitty gif"
          onError={() => setGif(errorGifCat)}
        />
      ) : (
        <p>Loading Fun Kitty gif...</p>
      )}
    </div>
  );
}
