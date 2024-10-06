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

  const { agility, softness, evilness, goodness, velocity } = stats;

  const [rarity, setRarity] = useState(parseInt(Math.random() * 1000));

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

        <section className={styles.newCard} style={{ "--value": `${rarity}%` }}>
          <div className={styles.michiCardTop}>
            <h1>{michiName}</h1>{" "}
            <FontAwesomeIcon
              onClick={goHomePage}
              style={{ height: "50px", width: "auto" }}
              icon={faShieldCat}
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

          <div className={styles.footer}>
            <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
          </div>
        </section>

      {/* {rarity === "common" && (
        <section className={styles.newCard}>
          <div className={styles.michiCardTop}>
            <h1>{michiName}</h1>{" "}
            <FontAwesomeIcon
              onClick={goHomePage}
              style={{ height: "50px", width: "auto" }}
              icon={faShieldCat}
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

          <div className={styles.footer}>
            <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
          </div>
        </section>
      )}

      {rarity === "halfStar" && (
        <section className={styles.newCard_halfStar}>
          <div className={styles.michiCardTop_halfStar}>
            <h1 className={styles.michiName_halfStar}>{michiName}</h1>{" "}
            <FontAwesomeIcon
              onClick={goHomePage}
              style={{ height: "50px", width: "auto" }}
              icon={faStarHalfStroke}
            />
          </div>

          <div className={styles.divCatImg_halfStar}>
            <img src={image} alt="michi" className={styles.catImg_halfStar} />
          </div>

          <p className={styles.atributtes_halfStar}>{finalAtributtes}</p>

          <ul className={styles.stats_halfStar}>
            <li className={styles.statLi_halfStar}>
              Agility
              <br />
              {agility}
              <br /> <span id="agility"></span>
            </li>
            <li className={styles.statLi_halfStar}>
              Softness
              <br />
              {softness}
              <br /> <span id="softness"></span>
            </li>
            <li className={styles.statLi_halfStar}>
              Evilness
              <br />
              {evilness}
              <br /> <span id="evilness"></span>
            </li>
            <li className={styles.statLi_halfStar}>
              Goodness
              <br />
              {goodness}
              <br /> <span id="goodness"></span>
            </li>
            <li className={styles.statLi_halfStar}>
              Velocity
              <br />
              {velocity}
              <br /> <span id="velocity"></span>
            </li>
          </ul>

          <div className={styles.footer_halfStar}>
            <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
          </div>
        </section>
      )}

      {rarity === "fullStar" && (
        <section className={styles.newCard_fullStar}>
          <div className={styles.michiCardTop_fullStar}>
            <h1 className={styles.michiName_fullStar}>{michiName}</h1>{" "}
            <FontAwesomeIcon
              onClick={goHomePage}
              style={{ height: "50px", width: "auto" }}
              icon={faStar}
            />
          </div>

          <div className={styles.divCatImg_fullStar}>
            <img src={image} alt="michi" className={styles.catImg_fullStar} />
          </div>

          <div className={styles.atributtes_fullStar}>
            <p>{finalAtributtes}</p>
          </div>

          <ul className={styles.stats_fullStar}>
            <li className={styles.statLi_fullStar}>
              Agility
              <br />
              {agility}
              <br /> <span id="agility"></span>
            </li>
            <li className={styles.statLi_fullStar}>
              Softness
              <br />
              {softness}
              <br /> <span id="softness"></span>
            </li>
            <li className={styles.statLi_fullStar}>
              Evilness
              <br />
              {evilness}
              <br /> <span id="evilness"></span>
            </li>
            <li className={styles.statLi_fullStar}>
              Goodness
              <br />
              {goodness}
              <br /> <span id="goodness"></span>
            </li>
            <li className={styles.statLi_fullStar}>
              Velocity
              <br />
              {velocity}
              <br /> <span id="velocity"></span>
            </li>
          </ul>

          <div className={styles.footer_fullStar}>
            <p id="footerCard">Developed by Ariel Gonz-Agüer / diosDeNada</p>
          </div>
        </section>
      )} */}
    </>
  );
}
