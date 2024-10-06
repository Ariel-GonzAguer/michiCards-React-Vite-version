import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addNewCard } from "../../redux/localCardsSlice";

import { randomAtributtes, replaceMichiName } from "./randomAtributtes";
import styles from "./CardCreated.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldCat,
  faStarHalfStroke,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

export default function CardCreated() {
  // card info
  const { michiName, atributtes, image, stats } = useLocation().state;

  // const [rarity, setRarity] = useState(parseInt(Math.random() * 1000));
  const [rarity, setRarity] = useState(parseInt(999));

  const randomAtributte =
    randomAtributtes[Math.floor(Math.random() * randomAtributtes.length)];

  let finalAtributtes = atributtes
    ? atributtes
    : replaceMichiName(randomAtributte, michiName);

  // redux
  const dispatch = useDispatch();

  // router
  const navigate = useNavigate();
  function goHomePage() {
    navigate(-1);
  }

  useEffect(() => {
    if (rarity === 6) {
      setRarity("fullStar");
    } else if (rarity > 976) {
      setRarity("halfStar");
    } else {
      setRarity("common");
    }

    const newCardObject = {
      michiName: michiName,
      atributtes: finalAtributtes,
      image: image,
      stats: stats,
      rarity: rarity,
      key: parseInt(rarity + Math.random() * 1000),
    };

    if (newCardObject.image.startsWith("https")) {
      dispatch(addNewCard(newCardObject));
    }
  }, []);

  return (
    <>
      <section className={`${styles.newCard} ${styles[rarity]}`}>
        <div className={styles.michiCardTop}>
          <h1>{michiName}</h1>
          <FontAwesomeIcon
            onClick={goHomePage}
            style={{ height: "50px", width: "auto" }}
            className={`${styles.icon} ${styles[rarity]}`}
            icon={
              rarity === "fullStar"
                ? faStar
                : rarity === "halfStar"
                ? faStarHalfStroke
                : faShieldCat
            }
          />
        </div>

        <div className={styles.divCatImg}>
          <img src={image} alt="michi" className={styles.catImg} />
        </div>

        <p className={styles.atributtes}>{finalAtributtes}</p>

        <ul className={styles.stats}>
          {Object.entries(stats).map(([key, value]) => (
            <li key={key}>
              <span className={styles.statName}>{key}</span>
              <span className={styles.statNumber}>{value}</span>
            </li>
          ))}
        </ul>

        <footer>
          <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
        </footer>
      </section>
    </>
  );
}
