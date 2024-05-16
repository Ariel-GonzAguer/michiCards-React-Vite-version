import React, { useState } from 'react'
import styles from '../CardCreated/CardCreated.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldCat, faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons'

export default function LocalMichiCards() {
  const [localRarity, setLocalRarity] = useState('false');

  const localMichiCards = window.localStorage.getItem('localMichiCards');

  const localObject = JSON.parse(localMichiCards);

  return (
    <section className={styles.localCollection}>

      {localObject.map(card => {
        let rarity = card.rarity;
        rarity > 976 ?
          setLocalRarity('halfStar')
          : rarity === 6 ?
            setLocalRarity('fullStar')
            :
            setLocalRarity('false')

        return (
          <div className={localRarity === 'halfStar' ? styles.newCard_HalfStar
            : localRarity === 'fullStar' ? styles.newCard_FullStar
              : styles.newCard}
            key={card.key}>

            <div className={localRarity === 'halfStar' ? styles.newCard_HalfStar
              : localRarity === 'fullStar' ? styles.newCard_FullStar
                : styles.michiCardTop}>
              <h1 className={localRarity === 'halfStar' ? styles.newCard_HalfStar
                : localRarity === 'fullStar' ? styles.newCard_FullStar
                  : styles.michiName}>{card.michiName}</h1> <FontAwesomeIcon style={{ height: "50px", width: "auto" }} icon={localRarity === 'halfStar' ? styles.newCard_HalfStar
                    : localRarity === 'fullStar' ? styles.newCard_FullStar
                      : faShieldCat} />
            </div>

            <div className={localRarity === 'halfStar' ? styles.newCard_HalfStar
              : localRarity === 'fullStar' ? styles.newCard_FullStar
                : styles.divCatImg}>
              <img src={card.image} alt="michi" className={localRarity === 'halfStar' ? styles.newCard_HalfStar
                : localRarity === 'fullStar' ? styles.newCard_FullStar
                  : styles.catImg} />
            </div>

            <p className={localRarity === 'halfStar' ? styles.newCard_HalfStar
              : localRarity === 'fullStar' ? styles.newCard_FullStar
                : styles.atributtes}>
              {card.atributtes}
            </p>

            <ul className={localRarity === 'halfStar' ? styles.newCard_HalfStar
              : localRarity === 'fullStar' ? styles.newCard_FullStar
                : styles.stats}>
              <li className={localRarity === 'halfStar' ? styles.newCard_HalfStar
                : localRarity === 'fullStar' ? styles.newCard_FullStar
                  : styles.statLi}>Agility<br />{card.stats['agility']}<br /> <span id="agility"></span></li>
              <li className={localRarity === 'halfStar' ? styles.newCard_HalfStar
                : localRarity === 'fullStar' ? styles.newCard_FullStar
                  : styles.statLi}>Softness<br />{card.stats['softness']}<br /> <span id="softness"></span></li>
              <li className={localRarity === 'halfStar' ? styles.newCard_HalfStar
                : localRarity === 'fullStar' ? styles.newCard_FullStar
                  : styles.statLi}>Evilness<br />{card.stats['evilness']}<br /> <span id="evilness"></span></li>
              <li className={localRarity === 'halfStar' ? styles.newCard_HalfStar
                : localRarity === 'fullStar' ? styles.newCard_FullStar
                  : styles.statLi}>Goodness<br />{card.stats['goodness']}<br /> <span id="goodness"></span></li>
              <li className={localRarity === 'halfStar' ? styles.newCard_HalfStar
                : localRarity === 'fullStar' ? styles.newCard_FullStar
                  : styles.statLi}>Velocity<br />{card.stats['velocity']}<br /> <span id="velocity"></span></li>
            </ul>

            <div className={localRarity === 'halfStar' ? styles.newCard_HalfStar
              : localRarity === 'fullStar' ? styles.newCard_FullStar
                : styles.footer}>
              <p id="footerCard">Developed by Ariel Gonz Agüer / diosDeNada</p>
            </div>
          </div>
        )
      })
      }

    </section >
  )
}

// recibo este error: chunk-4JVUYMCH.js?v=c3e8e4b6:11575 Uncaught Error: Too many re-renders. React limits the number of renders to prevent an infinite loop.

// tal vez probar haciendo una sección que sea una ul, y cada tarjeta un li, cada li sería un div respectivo para cada carta