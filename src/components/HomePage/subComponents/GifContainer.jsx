import React, { useState } from "react";
import styles from "../HomePage.module.css";

import getGif from "./gifOptions.js";

export default function GifContainer() {
  const [gif, setGif] = useState(() => getGif());

  return (
    <div className={styles.gifContainer} data-testid="gif-container">
      {gif ? (
        <img
          loading="lazy"
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
