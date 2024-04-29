import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { randomAtributtes, replaceMichiName } from './randomAtributtes'

import styles from './CardCreated.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldCat, faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons'

export default function CardCreated() {
  const { michiName, atributtes, image, stats } = useLocation().state;

  const { agility, softness, evilness, goodness, velocity } = stats;

  const [rarity, setRarity] = useState('');

  const navigate = useNavigate();

  const randomAtributte = randomAtributtes[Math.floor(Math.random() * randomAtributtes.length)];

  useEffect(() => {
    if ((Math.random() * 1000) > 976) {
      setRarity('half-star')
    } else if ((Math.random() * 1000) === 6) {
      setRarity('full-star')
    } else {
      setRarity('false')
    }
  }, []);

  function goHomePage() {
    navigate('/');
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
            {atributtes ? atributtes : replaceMichiName(randomAtributte, michiName)}
            {atributtes}
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
        rarity === 'half-star' &&
        <section className={styles.newCard_HalfStar} >

          <div className={styles.michiCardTop_HalfStar}>
            <h1 className={styles.michiName_HalfStar}>{michiName}</h1> <FontAwesomeIcon onClick={goHomePage} style={{ height: "50px", width: "auto" }} icon={faStarHalfStroke} />
          </div>

          <div className={styles.divCatImg_HalfStar}>
            <img src={image} alt="michi" className={styles.catImg_HalfStar} />
          </div>

          <p className={styles.atributtes_HalfStar}>
            {atributtes}
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
        rarity === 'full-star' &&
        <section className={styles.newCard_FullStar} >

          <div className={styles.michiCardTop_FullStar}>
            <h1 className={styles.michiName_FullStar}>{michiName}</h1> <FontAwesomeIcon onClick={goHomePage} style={{ height: "50px", width: "auto" }} icon={faStar} />
          </div>

          <div className={styles.divCatImg_FullStar}>
            <img src={image} alt="michi" className={styles.catImg_FullStar} />
          </div>

          <div className={styles.atributtes_FullStar}>
            <p>
              {atributtes}
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