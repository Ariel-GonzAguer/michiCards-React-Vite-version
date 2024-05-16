import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { randomAtributtes, replaceMichiName } from './randomAtributtes'

import styles from './CardCreated.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldCat, faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons'

export default function CardCreated() {
  const { michiName, atributtes, image, stats } = useLocation().state;

  const { agility, softness, evilness, goodness, velocity } = stats;

  const [rarity, setRarity] = useState((Math.random() * 1000));

  const navigate = useNavigate();

  const randomAtributte = randomAtributtes[Math.floor(Math.random() * randomAtributtes.length)];

  let finalAtributtes = atributtes ? atributtes : replaceMichiName(randomAtributte, michiName);

  useEffect(() => {
    if (rarity > 976) {
      setRarity('halfStar')
    } else if (rarity === 6) {
      setRarity('fullStar')
    } else {
      setRarity('false')
    }

    const newCardObject = {
      michiName: michiName,
      atributtes: finalAtributtes,
      image: image,
      stats: stats,
      rarity: rarity,
      key: parseInt((rarity + (Math.random() * 1000)))
    }

    // Obtener el array actual del localStorage
    let storedCards = JSON.parse(window.localStorage.getItem('localMichiCards') || '[]');

    // Verificar si storedCards es un array
    if (!Array.isArray(storedCards)) {
      storedCards = [];
    }

    // Agregar el nuevo objeto al array
    storedCards.push(newCardObject);

    // Guardar el array actualizado en el localStorage
    window.localStorage.setItem('localMichiCards', JSON.stringify(storedCards));
  }, []);

  function goHomePage() {
    navigate(-1);
  }

  return (
    <>
      {
        rarity === 'false' &&
        <section className={styles.newCard} >

          <div className={styles.michiCardTop}>
            <h1 className={styles.michiName}>{michiName}</h1> <FontAwesomeIcon onClick={goHomePage} style={{ height: "50px", width: "auto" }} icon={faShieldCat} />
          </div>

          <div className={styles.divCatImg}>
            <img src={image} alt="michi" className={styles.catImg} />
          </div>

          <p className={styles.atributtes}>
            {finalAtributtes}
          </p>

          <ul className={styles.stats}>
            <li className={styles.statLi}>Agility<br />{agility}<br /> <span id="agility"></span></li>
            <li className={styles.statLi}>Softness<br />{softness}<br /> <span id="softness"></span></li>
            <li className={styles.statLi}>Evilness<br />{evilness}<br /> <span id="evilness"></span></li>
            <li className={styles.statLi}>Goodness<br />{goodness}<br /> <span id="goodness"></span></li>
            <li className={styles.statLi}>Velocity<br />{velocity}<br /> <span id="velocity"></span></li>
          </ul>

          <div className={styles.footer}>
            <p id="footerCard">Developed by Ariel Gonz Agüer / diosDeNada</p>
          </div>
        </section>
      }

      {
        rarity === 'halfStar' &&
        <section className={styles.newCard_HalfStar} >

          <div className={styles.michiCardTop_HalfStar}>
            <h1 className={styles.michiName_HalfStar}>{michiName}</h1> <FontAwesomeIcon onClick={goHomePage} style={{ height: "50px", width: "auto" }} icon={faStarHalfStroke} />
          </div>

          <div className={styles.divCatImg_HalfStar}>
            <img src={image} alt="michi" className={styles.catImg_HalfStar} />
          </div>

          <p className={styles.atributtes_HalfStar}>
            {finalAtributtes}
          </p>

          <ul className={styles.stats_HalfStar}>
            <li className={styles.statLi_HalfStar}>Agility<br />{agility}<br /> <span id="agility"></span></li>
            <li className={styles.statLi_HalfStar}>Softness<br />{softness}<br /> <span id="softness"></span></li>
            <li className={styles.statLi_HalfStar}>Evilness<br />{evilness}<br /> <span id="evilness"></span></li>
            <li className={styles.statLi_HalfStar}>Goodness<br />{goodness}<br /> <span id="goodness"></span></li>
            <li className={styles.statLi_HalfStar}>Velocity<br />{velocity}<br /> <span id="velocity"></span></li>
          </ul>

          <div className={styles.footer_HalfStar}>
            <p id="footerCard">Developed by Ariel Gonz Agüer / diosDeNada</p>
          </div>
        </section>
      }

      {
        rarity === 'fullStar' &&
        <section className={styles.newCard_FullStar} >

          <div className={styles.michiCardTop_FullStar}>
            <h1 className={styles.michiName_FullStar}>{michiName}</h1> <FontAwesomeIcon onClick={goHomePage} style={{ height: "50px", width: "auto" }} icon={faStar} />
          </div>

          <div className={styles.divCatImg_FullStar}>
            <img src={image} alt="michi" className={styles.catImg_FullStar} />
          </div>

          <div className={styles.atributtes_FullStar}>
            <p>
              {finalAtributtes}
            </p>
          </div>

          <ul className={styles.stats_FullStar}>
            <li className={styles.statLi_FullStar}>Agility<br />{agility}<br /> <span id="agility"></span></li>
            <li className={styles.statLi_FullStar}>Softness<br />{softness}<br /> <span id="softness"></span></li>
            <li className={styles.statLi_FullStar}>Evilness<br />{evilness}<br /> <span id="evilness"></span></li>
            <li className={styles.statLi_FullStar}>Goodness<br />{goodness}<br /> <span id="goodness"></span></li>
            <li className={styles.statLi_FullStar}>Velocity<br />{velocity}<br /> <span id="velocity"></span></li>
          </ul>

          <div className={styles.footer_FullStar}>
            <p id="footerCard">Developed by Ariel Gonz Agüer / diosDeNada</p>
          </div>
        </section>
      }
    </>
  )
}