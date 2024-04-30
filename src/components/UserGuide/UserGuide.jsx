import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './UserGuide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDown, faCat, faMobileScreen, faShieldCat, faStar, faStarHalfStroke, faWifi } from '@fortawesome/free-solid-svg-icons'

export default function UserGuide() {

  const navigate = useNavigate();

  return (
    <section className={styles.guide} >

      <h1>Welcome to the User Guide!</h1>
      <p className={styles.p_Guide}>Here you could find the answer of all of your questions in life... if the questions are related with Michi Cards
      </p>

      <details>
        <summary>Device considerations</summary>
        <ul>
          <li><FontAwesomeIcon icon={faWifi} /> It is essential that the device have an internet connection to use the app.</li>
          <li><FontAwesomeIcon icon={faMobileScreen} /> The app is designed to be used on mobile devices with conventional size screens. On laptops, desktop computers and tablets <span className={styles.hey}>THE IMAGES COULD LOOK KINDA WEIRD, LIKE VERY SMALL.</span></li>
          <li><FontAwesomeIcon icon={faArrowsUpDown} /> To avoid image distortion, the device must be placed vertically (not panoramic) when taking the screenshot</li>
        </ul>
      </details>

      <details>
        <summary>Create Michi Cards!</summary>
        This section will guide you through easy use of the app.<br />
        To create a New Michi Card, press the 'Create Michi Card <FontAwesomeIcon icon={faCat} /> ' option.<br /><br />
        You'll instantly see a Cool kitten wearing sunglasses, and the Form to create your own Michi Card!<br />
        <span className={styles.hey}> The only two essential requirement on the form to create the card are to write Michi's
          name and choose and option for the picture.</span><br /><br />
        The name must be a maximum of 11 characters. Choose the name that seems funniest or cutest to you.<br />
        You can write a description about the feline in the 'How is the Michi' section, in 125 characters (including
        spaces) or less. If you don't write anything, no problem, some feline deity will grant the Michi they divine
        personality.<br />
        The Michi Card's stats range from 1 to 100. The initial value of each stat is 1, and can be changed as desired.
        <br /><br />
        For the image of the card You have two options:<br />
        <details>
          <summary>Use your own picture</summary>
          You can take a picture with your device pressing the 'Take your own picture' button.<br />
          Try to put the face of your Michi in the upper section of the picture to have better results.<br />
          <span className={styles.hey}>IMPORTANT!</span> The picture you take with your device is NOT saved anywhere by default, neither in the server or client file system.<br />
        </details>
        or<br />
        <details>
          <summary>Use a random picture obtained by the app</summary>
          Just press 'Get random picture' button to see the kitty cat that will be in the new Michi Card.
        </details>
        <span className={styles.hey2}> If you dont load a picture or preview an image, the new Michi Card will not be created.<br /> <span className={styles.hey}>IMPORTANT!</span>The last option You choose for the picture, is the one that will display.</span><br /><br />
        Once the above information is complete, press the 'Create!' button to see the new created Michi Card <FontAwesomeIcon icon={faShieldCat} /><br />
        Now You can take a screenshot to save the new Michi Card on your device!<br /><br />
        <span className={styles.hey}>Note:</span> to create a New Michi Card, after created one, press the icon to the right of Michi's name to go back to Home Create Michi Card section.
      </details>

      <details>
        <summary>Feral cards</summary>
        What is a Feral Card?<br />
        A Feral Card is one that is different from the 'regular' card created with the app.
        The 'regular' Michi Cards have a specific design: Pink background, Michi's name and double border of the card in black, and
        the only icon on the card is <FontAwesomeIcon icon={faShieldCat} /><br />
        When the Michi Card is created, a random number is generated between 0 and 1000. If this number is less than or
        equal to 976, You will have a beautiful 'regular' card, but...<br />
        ...if it is greater than 976 you obtain a 'Half Star' type Feral Card. This type of card is very similar to the
        'regulars', but its background is of a nice blue and a 'Half Star' icon appears next to the Michi's name <FontAwesomeIcon icon={faStarHalfStroke} /><br />
        The probability of obtaining one of these cards is 2.39% each time a Michi Card is created.<br /><br />
        ...but if the number is <span className={styles.hey}>exactly 6</span> You will get a 'Full Star' card, which has a black
        background, a white border
        and a 'Full Star' icon <FontAwesomeIcon icon={faStar} /> next to Michi's name.<br />
        The probability of obtaining this type of card is 0.09% each time a Michi Card is created.
      </details>

      <details>
        <summary>Where is the data to create the Michi Card obtained from?</summary>
        This web project is created around different sources.<br />
        The gifs that load on the Home Page are obtained through the <a href="https://cataas.com/" target="_blank">CATAAS</a> API.<br />
        Random pictures for the Card images are obtained using <a href="https://thecatapi.com/" target="_blank">The Cat API</a>.<br />
        The icons are part of the free <a href="https://fontawesome.com/" target="_blank">Font Awesome</a>
        collections.<br />
        I found the <span className={styles.hey}>Cool kitten wearing sunglasses</span> many years ago on Google doing another project with cats. Currently I can't
        find its source.
        The initial loading animation was achieved thanks to <a href="https://animista.net/"
          target="_blank">animista.net</a>.
        And the font comes from <a href="https://fonts.google.com/">Google Fonts</a>
      </details>



      <details>
        <summary>Next improvements</summary>
        <ul>
          <li> *Collection of cards within the app.</li>
          <li> *New feral cards added.</li>
        </ul>

      </details>

      <button className={styles.backBtn} onClick={() => navigate('/')}>Back</button>

    </section>
  )
}