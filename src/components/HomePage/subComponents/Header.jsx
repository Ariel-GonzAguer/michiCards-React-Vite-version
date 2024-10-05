import React from "react";
import styles from "../HomePage.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>Michi Cards</h1>{" "}
      <FontAwesomeIcon
        style={{ height: "55px", width: "auto" }}
        icon={faShieldCat}
      />
    </header>
  );
}
