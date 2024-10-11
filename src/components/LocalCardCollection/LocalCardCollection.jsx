import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteCard } from "../../redux/localCardsSlice";
import styles from "../CardCreated/CardCreated.module.css";
import stylesModal from "../Modal/Modal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldCat,
  faStarHalfStroke,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "../Modal/Modal";

export default function LocalCardCollection() {
  const localCardsObject = useSelector((state) => state.localCards);
  const dispatch = useDispatch();
  const [filteredCards, setFilteredCards] = useState(localCardsObject);

  const [open, setOpen] = useState(false);
  const [cardKeyToDelete, setCardKeyToDelete] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const cardRefs = useRef({});

  // router
  const navigate = useNavigate();
  function goHomePage() {
    navigate(-1);
  }

  function goCreateCard() {
    navigate("/create");
  }

  function handleDelete(key) {
    setFilteredCards(filteredCards.filter((card) => card.key !== key));
    dispatch(deleteCard(key));
  }

  function openModalToDelete(key, cardId) {
    setCardKeyToDelete(key);
    const cardElement = cardRefs.current[cardId];
    if (cardElement) {
      const rect = cardElement.getBoundingClientRect();
      setModalPosition({
        top: rect.top + window.scrollY,
        left: rect.left + window.scrollX,
      });
    }
    setOpen(true);
  }

  // modal
  const modalContent = {
    text: "You want to delete this card forever?",
    close: { text: "Cancel", class: "cancel" },
    button_Two: (
      <button
        className={stylesModal.button_Two}
        data-testid={`confirm-delete-button`}
        onClick={() => {
          handleDelete(cardKeyToDelete);
          setOpen(false);
        }}
      >
        Delete
      </button>
    ),
  };

  return (
    <>
      {!filteredCards.length && (
        <>
          <h1>Your Local Storage is empty of Michis</h1>
          <br />
          <button onClick={goCreateCard} className={styles.goCreateButton}>
            Create A New Michi Card!
          </button>
        </>
      )}

      {filteredCards.map((card, index) => {
        let rarity = "common";
        if (card.rarity === 6) {
          rarity = "fullStar";
        } else if (card.rarity > 976) {
          rarity = "halfStar";
        }

        return (
          <section key={card.key}>
            <div
              id={`card-${card.key}`}
              ref={(el) => (cardRefs.current[`card-${index}`] = el)}
              className={`${styles.newCard} ${styles[rarity]}`}
              style={{ marginBottom: "5px" }} // Añadir espacio entre las cartas
            >
              <div className={styles.michiCardTop}>
                <h1>{card.michiName}</h1>
                <FontAwesomeIcon
                  onClick={goHomePage}
                  style={{ height: "50px", width: "auto" }}
                  className={`${styles.icon} ${styles[card.rarity]}`}
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
                <img src={card.image} alt="michi" className={styles.catImg} />
              </div>

              <p className={styles.atributtes}>{card.atributtes}</p>

              <ul className={styles.stats}>
                {Object.entries(card.stats).map(([key, value]) => (
                  <li key={`${value}*${Math.random() * 1000}`}>
                    <span className={styles.statName}>{key}</span>
                    <span className={styles.statNumber}>{value}</span>
                  </li>
                ))}
              </ul>

              <footer className={styles.footer}>
                <p id="footerCard">Developed by Ariel Gonz-Agüer</p>
              </footer>
            </div>
            <button
              className={styles.deleteButton}
              data-testid={`delete-button-${card.key}`}
              onClick={() => openModalToDelete(card.key, `card-${index}`)}
            >
              Delete Card
            </button>
          </section>
        );
      })}
      {open && (
        <div
          className={styles.modalDelete}
          style={{
            top: modalPosition.top,
            left: modalPosition.left,
            transform: "translate(10%)", //pendiente de ajustar
          }}
        >
          <Modal setOpen={setOpen} modalContent={modalContent} />
        </div>
      )}
    </>
  );
}
