import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal/Modal'

import coolRedCat from '../../resources/img/coolCat.jpg'
import styles from './CreateCard.module.css'

export default function CreateCard() {
  // states
  const [michiName, setMichiName] = useState('');
  const [atributtes, setAtributtes] = useState('');
  const [stats, setStats] = useState({ agility: 1, softness: 1, evilness: 1, goodness: 1, velocity: 1 });

  const [preview, setPreview] = useState(null);
  const [localImg, setlocalImg] = useState(null);
  const [image, setImage] = useState(null);

  const [characters, setCharacters] = useState(0);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  // handlers
  function handleSubmit(event) {
    event.preventDefault();

    if (!image) {
      setOpen(true);
      return;
    }

    navigate('/card-created', {
      state: {
        michiName: michiName,
        atributtes: atributtes,
        image: image,
        stats: stats
      }
    });
  }

  function handleChange_getStats(e) {
    e.preventDefault();
    setStats({ ...stats, [e.target.name]: parseInt(e.target.value) });

  }

  function OnClick_getName(e) {
    e.preventDefault();
    setMichiName(e.target.value);
  }


  async function OnClick_getRandomImg(e) {
    e.preventDefault();
    try {
      while (true) {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (response.ok) {
          const jsonResponse = await response.json();
          if (await jsonResponse[0]['width'] >= '800' && await jsonResponse[0]['height'] >= '500') {
            setPreview(() => jsonResponse[0]['url']);
            setImage(() => jsonResponse[0]['url']);
            break;
          }
        } else {
          throw new Error('Error al obtener la imagen');
        }
      }
    } catch (error) {
      console.error(Error);
    }
  }

  function OnChange_getLocalImg(e) {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setlocalImg(reader.result);
      }
      reader.readAsDataURL(file);
    }
  }

  function OnChange_getAtributtes(event) {
    event.preventDefault();
    const newAtributtes = event.target.value;
    setAtributtes(newAtributtes);
    setCharacters(event.target.value.length);
  }

  return (
    <>
      <section className={styles.createMichiCard}>
        <h1 className={styles.h1Create}>Create your own Michi Card</h1><br />

        <img className={styles.coolCat} src={coolRedCat} alt="a red and white cool cat with sunglasses" />

        <form onSubmit={handleSubmit}>

          <label htmlFor="michiName">Name of the Michi</label><br />
          <input type="text" name="michiName" id="michiName" className={styles.michiName} maxLength="9" required value={michiName} onChange={OnClick_getName} /><br />

          <label htmlFor="atributtes">How is the Michi</label><br />
          <textarea
            name="atributtes"
            id="atributtes"
            className={styles.atributtes}
            placeholder="if empty, the atributtes will be selected by some Celestial Kitty or something."
            rows="8"
            cols="50"
            maxLength="125"
            onChange={OnChange_getAtributtes}
            value={atributtes} >
          </textarea>
          <p className={styles.charCount}>{characters}/125</p><br />

          <h2 className={styles.h2Create}>Set the Michi Stats</h2>
          <label htmlFor="agility"><span className={styles.blankSpace}>_</span>Agility</label>
          <input
            type="range"
            step="1"
            name="agility"
            id="agility"
            max="100" min="1"
            className={styles.michiStats}
            value={stats.agility}
            onChange={handleChange_getStats} />
          <br />

          <label htmlFor="softness">Softness</label>
          <input
            type="range"
            step="1"
            name="softness"
            id="softness"
            max="100" min="1"
            className={styles.michiStats}
            value={stats.softness}
            onChange={handleChange_getStats} />
          <br />

          <label htmlFor="evilness">Evilness</label>
          <input
            type="range"
            step="1"
            name="evilness"
            id="evilness"
            max="100" min="1"
            className={styles.michiStats}
            value={stats.evilness}
            onChange={handleChange_getStats} />
          <br />

          <label htmlFor="goodness">Goodness</label>
          <input
            type="range"
            step="1"
            name="goodness"
            id="goodness"
            max="100" min="1"
            className={styles.michiStats}
            value={stats.goodness}
            onChange={handleChange_getStats} />
          <br />

          <label htmlFor="velocity">Velocity</label>
          <input
            type="range"
            step="1"
            name="velocity"
            id="velocity"
            max="100" min="1"
            className={styles.michiStats}
            value={stats.velocity}
            onChange={handleChange_getStats} />
          <br /><br />


          <h2 className={styles.h2Create}>Choose one option for the Picture</h2>
          <button className={styles.lookMichi} onClick={OnClick_getRandomImg}>Get random picture</button><br />
          {
            preview &&
            <>
              <img className={styles.michiPreview} src={preview} alt="preview of the michi" /> <br />
            </>
          }

          <p className={styles.or_Create}>Or</p>

          <label htmlFor="photo" className={styles.lookMichiLocal}>Take your own picture</label><br />
          <input
            type="file"
            name="photo"
            id="photo"
            className={styles.photo}
            accept="image/*"
            capture="environment"
            onChange={OnChange_getLocalImg} />
          <br />
          {
            localImg &&
            <>
              <img className={styles.michiPreview} src={image} alt="preview of the michi" /> <br />
            </>
          }


          <br />
          {open && (
            <Modal setOpen={setOpen} />
          )
          }

          <label htmlFor="create"></label>
          <button type="submit" name="create" id="create" className={styles.create}>Create!</button>
        </form>

        <button onClick={() => navigate('/')} className={styles.backBtn}>Back</button>
      </section>

    </>
  )
}