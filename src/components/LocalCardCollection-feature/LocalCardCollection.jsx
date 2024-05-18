import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { deleteCard } from '../../redux/localCardsSlice'

import styles from '../CardCreated/CardCreated.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldCat, faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons'


export default function LocalCardCollection() {
  const localCardsObject = useSelector(state => state.localCards)
  const dispatch = useDispatch()
  const [filteredCards, setFilteredCards] = useState(localCardsObject)

  function handleDelete(key) {
    setFilteredCards(filteredCards.filter(card => card.key !== key));
    dispatch(deleteCard(key));
  }

  return (
    <section className={styles.LocalCardCollection}>

      {/* falta hacer que se eliminen las cartas */}
      {
        filteredCards.map(card => {
          if (card.rarity === 6) {
            return (
              <div key={card.key} >
                <section className={`${styles.newCard_FullStar} ${styles.collection}`}>

                  <div className={styles.michiCardTop_FullStar}>
                    <h1 className={styles.michiName_FullStar}>{card.michiName}</h1> <FontAwesomeIcon style={{ height: "50px", width: "auto" }} icon={faStar} />
                  </div>

                  <div className={styles.divCatImg_FullStar}>
                    <img src={card.image} alt="michi" className={styles.catImg_FullStar} />
                  </div>

                  <div className={styles.atributtes_FullStar}>
                    <p>
                      {card.atributtes}
                    </p>
                  </div>

                  <ul className={styles.stats_FullStar}>
                    <li className={styles.statLi_FullStar}>Agility<br />{card.stats.agility}<br /> <span id="agility"></span></li>
                    <li className={styles.statLi_FullStar}>Softness<br />{card.stats.softness}<br /> <span id="softness"></span></li>
                    <li className={styles.statLi_FullStar}>Evilness<br />{card.stats.evilness}<br /> <span id="evilness"></span></li>
                    <li className={styles.statLi_FullStar}>Goodness<br />{card.stats.goodness}<br /> <span id="goodness"></span></li>
                    <li className={styles.statLi_FullStar}>Velocity<br />{card.stats.velocity}<br /> <span id="velocity"></span></li>
                  </ul>

                  <div className={styles.footer_FullStar}>
                    <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
                  </div>
                </section>
                <button className={styles.deleteButton} onClick={() => handleDelete(card.key)}>Delete?</button>
              </div>
            )

          } else if (card.rarity > 976) {
            return (
              <div key={card.key}>
                <section className={`${styles.newCard_HalfStar} ${styles.collection}`}>

                  <div className={styles.michiCardTop_HalfStar}>
                    <h1 className={styles.michiName_HalfStar}>{card.michiName}</h1> <FontAwesomeIcon style={{ height: "50px", width: "auto" }} icon={faStarHalfStroke} />
                  </div>

                  <div className={styles.divCatImg_HalfStar}>
                    <img src={card.image} alt="michi" className={styles.catImg_HalfStar} />
                  </div>

                  <div className={styles.atributtes_HalfStar}>
                    <p>
                      {card.atributtes}
                    </p>
                  </div>

                  <ul className={styles.stats_HalfStar}>
                    <li className={styles.statLi_HalfStar}>Agility<br />{card.stats.agility}<br /> <span id="agility"></span></li>
                    <li className={styles.statLi_HalfStar}>Softness<br />{card.stats.softness}<br /> <span id="softness"></span></li>
                    <li className={styles.statLi_HalfStar}>Evilness<br />{card.stats.evilness}<br /> <span id="evilness"></span></li>
                    <li className={styles.statLi_HalfStar}>Goodness<br />{card.stats.goodness}<br /> <span id="goodness"></span></li>
                    <li className={styles.statLi_HalfStar}>Velocity<br />{card.stats.velocity}<br /> <span id="velocity"></span></li>
                  </ul>

                  <div className={styles.footer_HalfStar}>
                    <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
                  </div>
                </section>
                <button className={styles.deleteButton} onClick={() => handleDelete(card.key)}>Delete?</button>
              </div>
            )

          } else {
            return (
              <div key={card.key} >
                <section className={`${styles.newCard} ${styles.collection}`}>

                  <div className={styles.michiCardTop}>
                    <h1 className={styles.michiName}>{card.michiName}</h1> <FontAwesomeIcon style={{ height: "50px", width: "auto" }} icon={faShieldCat} />
                  </div>

                  <div className={styles.divCatImg}>
                    <img src={card.image} alt="michi" className={styles.catImg} />
                  </div>

                  <p className={styles.atributtes}>
                    {card.atributtes}
                  </p>

                  <ul className={styles.stats}>
                    <li className={styles.statLi}>Agility<br />{card.stats.agility}<br /> <span id="agility"></span></li>
                    <li className={styles.statLi}>Softness<br />{card.stats.softness}<br /> <span id="softness"></span></li>
                    <li className={styles.statLi}>Evilness<br />{card.stats.evilness}<br /> <span id="evilness"></span></li>
                    <li className={styles.statLi}>Goodness<br />{card.stats.goodness}<br /> <span id="goodness"></span></li>
                    <li className={styles.statLi}>Velocity<br />{card.stats.velocity}<br /> <span id="velocity"></span></li>
                  </ul>

                  <div className={styles.footer}>
                    <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
                  </div>
                </section>
                <button className={styles.deleteButton} onClick={() => handleDelete(card.key)}>Delete?</button>
              </div>
            )


          }

        })
      }
    </section>
  )
}