import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { deleteCard } from '../../redux/localCardsSlice'

import styles from '../CardCreated/CardCreated.module.css'
import stylesModal from '../Modal/Modal.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldCat, faStarHalfStroke, faStar } from '@fortawesome/free-solid-svg-icons'
import Modal from '../Modal/Modal'

export default function LocalCardCollection() {
  const localCardsObject = useSelector(state => state.localCards)
  const dispatch = useDispatch()
  const [filteredCards, setFilteredCards] = useState(localCardsObject)

  const [open, setOpen] = useState(false);
  const [cardKeyToDelete, setCardKeyToDelete] = useState(null);

  // router
  const navigate = useNavigate();
  function goHomePage() {
    navigate(-1);
  }

  function goCreateCard() {
    navigate('/create');
  }

  function handleDelete(key) {
    setFilteredCards(filteredCards.filter(card => card.key !== key));
    dispatch(deleteCard(key));
  }

  function openModalToDelete(key) {
    setCardKeyToDelete(key);
    setOpen(true);
  }

  // modal
  const modalContent = {
    text: 'Delete this card forever?',
    close: { text: 'Cancel', class: 'cancel' },
    button_Two: <button className={stylesModal.button_Two} onClick={() => { handleDelete(cardKeyToDelete); setOpen(false) }}>Delete</button>
  }

  return (
    <>
      {
        !filteredCards.length &&
        <>
          <h1>Your Local Storage is empty of Michis</h1><br />
          <button onClick={goCreateCard} className={styles.goCreateButton}>Create New Michi Card!</button>
        </>
      }

      <section className={styles.LocalCardCollection}>
        {
          filteredCards.map(card => {
            if (card.rarity === 6) {
              return (
                <div key={card.key} >
                  <section className={`${styles.newCard_fullStar} ${styles.collection}`}>

                    <div className={styles.michiCardTop_fullStar}>
                      <h1 className={styles.michiName_fullStar}>{card.michiName}</h1> <FontAwesomeIcon style={{ height: "50px", width: "auto" }} icon={faStar} onClick={goHomePage} />
                    </div>

                    <div className={styles.divCatImg_fullStar}>
                      <img src={card.image} alt="michi" className={styles.catImg_fullStar} />
                    </div>

                    <div className={styles.atributtes_fullStar}>
                      <p>
                        {card.atributtes}
                      </p>
                    </div>

                    <ul className={styles.stats_fullStar}>
                      <li className={styles.statLi_fullStar}>Agility<br />{card.stats.agility}<br /> <span id="agility"></span></li>
                      <li className={styles.statLi_fullStar}>Softness<br />{card.stats.softness}<br /> <span id="softness"></span></li>
                      <li className={styles.statLi_fullStar}>Evilness<br />{card.stats.evilness}<br /> <span id="evilness"></span></li>
                      <li className={styles.statLi_fullStar}>Goodness<br />{card.stats.goodness}<br /> <span id="goodness"></span></li>
                      <li className={styles.statLi_fullStar}>Velocity<br />{card.stats.velocity}<br /> <span id="velocity"></span></li>
                    </ul>

                    <div className={styles.footer_fullStar}>
                      <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
                    </div>
                    { /* abre el modal solo para la carta específica que se quiere eliminar */
                      open && cardKeyToDelete === card.key && (<Modal setOpen={setOpen} modalContent={modalContent} />)
                    }
                  </section>
                  <button className={styles.deleteButton} onClick={() => openModalToDelete(card.key)}>Delete?</button>
                </div>
              )

            } else if (card.rarity > 976) {
              return (
                <div key={card.key}>
                  <section className={`${styles.newCard_halfStar} ${styles.collection}`}>

                    <div className={styles.michiCardTop_halfStar}>
                      <h1 className={styles.michiName_halfStar}>{card.michiName}</h1> <FontAwesomeIcon style={{ height: "50px", width: "auto" }} icon={faStarHalfStroke} onClick={goHomePage} />
                    </div>

                    <div className={styles.divCatImg_halfStar}>
                      <img src={card.image} alt="michi" className={styles.catImg_halfStar} />
                    </div>

                    <div className={styles.atributtes_halfStar}>
                      <p>
                        {card.atributtes}
                      </p>
                    </div>

                    <ul className={styles.stats_halfStar}>
                      <li className={styles.statLi_halfStar}>Agility<br />{card.stats.agility}<br /> <span id="agility"></span></li>
                      <li className={styles.statLi_halfStar}>Softness<br />{card.stats.softness}<br /> <span id="softness"></span></li>
                      <li className={styles.statLi_halfStar}>Evilness<br />{card.stats.evilness}<br /> <span id="evilness"></span></li>
                      <li className={styles.statLi_halfStar}>Goodness<br />{card.stats.goodness}<br /> <span id="goodness"></span></li>
                      <li className={styles.statLi_halfStar}>Velocity<br />{card.stats.velocity}<br /> <span id="velocity"></span></li>
                    </ul>

                    <div className={styles.footer_halfStar}>
                      <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
                    </div>
                    {
                      open && cardKeyToDelete === card.key && (<Modal setOpen={setOpen} modalContent={modalContent} />)
                    }
                  </section>
                  <button className={styles.deleteButton} onClick={() => openModalToDelete(card.key)}>Delete?</button>
                </div>
              )

            } else {
              return (
                <div key={card.key} >
                  <section className={`${styles.newCard} ${styles.collection}`}>

                    <div className={styles.michiCardTop}>
                      <h1 className={styles.michiName}>{card.michiName}</h1> <FontAwesomeIcon style={{ height: "50px", width: "auto" }} icon={faShieldCat} onClick={goHomePage} />
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
                    {
                      open && cardKeyToDelete === card.key && (<Modal setOpen={setOpen} modalContent={modalContent} />)
                    }
                  </section>
                  <button className={styles.deleteButton} onClick={() => openModalToDelete(card.key)}>Delete?</button>
                </div>
              )
            }
          })
        }
      </section>
    </>
  )
}
