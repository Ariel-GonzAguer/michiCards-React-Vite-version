import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../Modal/Modal";

import coolRedCat from "/img/coolRedCat.jpg";
import styles from "./CreateCard.module.css";

export default function CreateCard() {
  // states
  const [michiName, setMichiName] = useState("");
  const [atributtes, setAtributtes] = useState("");
  const [stats, setStats] = useState({
    agility: 1,
    softness: 1,
    evilness: 1,
    goodness: 1,
    velocity: 1,
  });

  const [preview, setPreview] = useState(null);
  const [image, setImage] = useState(null);

  const [characters, setCharacters] = useState(0);
  const [open, setOpen] = useState(false);

  // router
  const navigate = useNavigate();

  // handlers
  function handleSubmit(event) {
    event.preventDefault();

    if (!image) {
      setOpen(true);
      return;
    }

    navigate("/card-created", {
      state: {
        michiName: michiName,
        atributtes: atributtes,
        image: image,
        stats: stats,
      },
    });
  }

  function handleChange_getStats(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setStats({ ...stats, [name]: parseInt(value) });
    e.target.style.setProperty("--value", `${value}%`);
  }

  function onChange_getName(e) {
    e.preventDefault();
    setMichiName(e.target.value);
  }

  function OnChange_getAtributtes(event) {
    event.preventDefault();
    setAtributtes(event.target.value);
    setCharacters(event.target.value.length);
  }

  async function OnClick_getRandomImg(e) {
    e.preventDefault();
    try {
      let imageUrl = null;
      do {
        const response = await fetch(
          "https://api.thecatapi.com/v1/images/search"
        );
        if (!response.ok) {
          throw new Error("Error al obtener la imagen");
        }
        const jsonResponse = await response.json();
        const { width, height, url } = jsonResponse[0];
        if (width <= 500 && height <= 500) {
          imageUrl = url;
        }
      } while (!imageUrl);

      setImage(imageUrl);
      setPreview(imageUrl);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  function OnChange_getLocalImg(e) {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      // Verifica que el archivo sea una imagen
      if (!file.type.startsWith("image/")) {
        console.error("El archivo seleccionado no es una imagen");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setPreview(reader.result);
      };
      reader.onerror = (error) => {
        console.error("Error al leer el archivo:", error);
      };
      reader.readAsDataURL(file);
    }
  }

  const modalContent = {
    text: "Preview a random picture or load your own michi",
    close: { text: "X", class: "close" },
  };

  return (
    <>
      <section className={styles.createMichiCard}>
        <h1>Create your own Michi Card</h1>

        <img
          className={styles.coolCat}
          src={coolRedCat}
          alt="a red and white cool cat with sunglasses"
        />

        <form onSubmit={handleSubmit}>
          <label htmlFor="michiName">Name of the Michi</label>
          <br />
          <input
            type="text"
            name="michiName"
            id="michiName"
            className={styles.michiName}
            maxLength="11"
            required
            value={michiName}
            onChange={onChange_getName}
          />
          <br />
          <label htmlFor="atributtes">Describe the Michi</label>
          <br />
          <textarea
            name="atributtes"
            id="atributtes"
            placeholder="if this is empty, the atributtes will be selected by some Celestial Kitty or something."
            rows="8"
            cols="50"
            maxLength="125"
            onChange={OnChange_getAtributtes}
            value={atributtes}
          ></textarea>
          <p className={styles.charCount}>{characters}/125</p>
          <br />
          <h2>Set the Michi Stats</h2>
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className={styles.statsContainer}>
              <label
                htmlFor={key}
                className={key === "agility" ? styles.agilityLabel : ""}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                type="range"
                step="1"
                name={key}
                id={key}
                max="100"
                min="1"
                className={styles.michiStats}
                value={value}
                onChange={handleChange_getStats}
                style={{ "--value": `${value}%` }}
              />
              <p>{value}%</p>
              <br />
            </div>
          ))}

          <h2>Choose one option for the Picture</h2>

          <div className={styles.imgOptionsDiv}>
            <button className={styles.lookMichi} onClick={OnClick_getRandomImg}>
              Get random picture
            </button>
            <p>Or</p>
            <label htmlFor="photo" className={styles.lookMichi}>
              Take your own picture
            </label>

            <input
              type="file"
              name="photo"
              id="photo"
              className={styles.photoInput}
              accept="image/*"
              capture="environment"
              onChange={OnChange_getLocalImg}
            />
          </div>

          {preview && (
            <>
              <img
                className={styles.michiPreview}
                src={preview}
                alt="preview of the michi"
              />
              <br />
            </>
          )}

          {open && <Modal setOpen={setOpen} modalContent={modalContent} />}
          <label htmlFor="create"></label>
          <button
            type="submit"
            name="create"
            id="create"
            className={styles.create}
          >
            Create!
          </button>
        </form>

        <button onClick={() => navigate("/")} className={styles.backBtn}>
          Back
        </button>
      </section>
    </>
  );
}
