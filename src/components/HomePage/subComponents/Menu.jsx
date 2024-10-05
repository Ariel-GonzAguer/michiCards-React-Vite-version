import React from "react";
import styles from "../HomePage.module.css";
import arrow from "../../../resources/icons/arrow.png";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCat,
  faBook,
  faSeedling,
  faIdBadge,
  faSheetPlastic,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
  const optionsArray = {
    createMichiCard: {
      name: "Create Michi Card",
      link: "/create",
      icon: faCat,
      key: 1,
      target: "_self",
    },
    userGuide: {
      name: "User Guide",
      link: "/user-guide",
      icon: faBook,
      key: 0,
      target: "_self",
    },
    donate: {
      name: "Donate",
      link: "https://paypal.me/ariegonzaguer?country.x=CR&locale.x=es_XC",
      icon: faSeedling,
      key: 1,
      target: "_blank",
    },
    contact: {
      name: "Contact",
      link: "https://ariegonzaguer.netlify.app/",
      icon: faIdBadge,
      key: 2,
      target: "_blank",
    },
    localCollection: {
      name: "Local Collection",
      link: "/local-michi-cards",
      icon: faSheetPlastic,
      key: 3,
      target: "_self",
    },
  };

  const options = Object.entries(optionsArray);

  return (
    <ul className={styles.menu}>
      {options.map(([key, value]) => (
        <li key={key}>
          <img src={arrow} alt="arrow" />
          <Link
            className="menuButton"
            to={value.link}
            target={value.target}
            rel="noreferrer"
          >
            {value.name} <FontAwesomeIcon icon={value.icon} />
          </Link>
        </li>
      ))}
    </ul>
  );
}
