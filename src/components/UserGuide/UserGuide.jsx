import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './UserGuide.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsUpDown, faCat, faMobileScreen, faShieldCat, faStar, faStarHalfStroke, faWifi } from '@fortawesome/free-solid-svg-icons'

export default function UserGuide() {
  // router
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
          <span className={styles.hey}>IMPORTANT!</span> The picture you take with your device is NOT saved anywhere by default, neither in the server or client file system. Also, using this option the MichiCard Will NOT be saved in the Browser's Local Storage.<br />
        </details>
        or<br />
        <details>
          <summary>Use a random picture obtained by the app</summary>
          Just press 'Get random picture' button to see the kitty cat that will be in the new Michi Card.<br />
          You can press 'Get random picture' as many times as You want to see different pictures. Please, keep in mind that each picture fetched consume data.<br />
          Using this option the MichiCard Will be saved in the Browser's localStorage.s
        </details>
        <br /> <span className={styles.hey}>IMPORTANT!</span><br />
        If you don't load a picture or preview an image, the new Michi Card will not be created.<br />
        The last option You choose for the picture, is the one that will display.<br /><br />
        Once the above information is complete, press the 'Create!' button to see the new created Michi Card <FontAwesomeIcon icon={faShieldCat} /><br />
        Now You can take a screenshot to save the new Michi Card on your device!<br /><br />
        <span className={styles.hey}>Note:</span> to create a New Michi Card, after created one, press the icon to the right of Michi's name to go back to the Create Michi Card section.
      </details>

      <details>
        <summary>Feral cards</summary>
        What is a Feral Card?<br />
        A Feral Card is one that is different from the 'regular' card created with the app.
        The 'regular' Michi Cards have a specific design: Pink background, Michi's name and double border of the card in black, and
        the icon on the card is <FontAwesomeIcon icon={faShieldCat} /><br />
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
        <summary>Local MichiCards</summary>
        With this new version of the MichiCards web app, the cards that are created with the random pictures are saved in the browser's Local Storage. The cards will live there until You delete manually the Local Storage of your browser. Also, You can delete individually the cards You don't want more in your Local Storage. Once the card is deleted, is gone forever.<br />
      </details>

      <details>
        <summary>Terms of Use, Privacy Policy and Legal Notice</summary>
        Terms of use<br />

        1. Introduction<br />
        Welcome to our web app, where you can create your own Michi Cards! By accessing and using our web app, you agree to comply with these Terms of Use.<br /><br />

        2. Use of the Service<br />
        Users can upload their own photos and obtain images from an external source to create cards.
        Users can interact with the web app through their browser, using buttons and text fields, and take photos with their camera.
        The created cards are only stored in the browser's local storage and are not visible to other users unless the user voluntarily shares them.<br /><br />

        3. Intellectual Property<br />
        Users own the cards they create using the web app.
        Photos and letters are not stored on our servers; They are only stored in the local storage of the user's browser.<br /><br />

        4. User Content<br />
        We do not manage or have access to content created by users, as it is not stored on our servers.
        Users are responsible for the content they create and must ensure that it does not violate any laws or third-party rights.<br /><br />

        5. Use of External Sources<br />
        The web app uses images from two external sources:<br />
        a.<a href='https://cataas.com/' target='_blank'>cataas</a><br />
        b.<a href='https://thecatapi.com/' target='_blank'>thecatapi</a><br />
        Users must respect the terms of use of external sources when using the provided images. On the page of each external source you can find related information.<br /><br />

        6. Limitation of Liability<br />
        We do not guarantee the availability or uninterrupted functionality of the web app.
        We are not responsible for any damage or loss resulting from the use of the web app.<br /><br />

        7. Modifications<br />
        We reserve the right to modify these Terms of Use at any time. Changes will be posted on this page.<br /><br />

        8. Contact<br />
        For any questions, you can contact us through <a style={{color: 'red'}} href='https://ariegonzaguer.netlify.app/' target='_blank'>{'>'}Contact Page{'<'}</a><br /><br />

        Privacy Policy<br />

        1. Introduction<br />
        This Privacy Policy describes how we handle and protect the information that is generated through our web app.<br /><br />

        2. Information Collected<br />
        We do not collect personal information from users.
        The only information stored is the created menu, which includes a description and statistics, and is saved in the browser's local storage.<br /><br />

        3. Use of Information<br />
        The information stored in local storage is used solely to allow users to access and modify their menus within their browser.<br /><br />

        4. Security<br />
        The information in local storage is protected by the security measures of the user's browser. Browser security is the user's responsibility.<br /><br />

        5. Share Information<br />
        We do not share information with third parties as we do not collect or store personal data on our servers.<br /><br />

        6. Changes to the Privacy Policy<br />
        We reserve the right to modify this Privacy Policy at any time. Changes will be posted on this page.<br /><br />

        7. Contact<br />
        For any questions, you can contact us through <a style={{color: 'red'}} href='https://ariegonzaguer.netlify.app/' target='_blank'>{'>'}Contact Page{'<'}</a><br /><br />

        Legal warning<br />

        1. General<br />
        This web app is provided "as is" and "as available", without warranties of any kind.<br /><br />

        2. Responsibility<br />
        We are not responsible for any direct, indirect, incidental, special or consequential damages resulting from the use of this web app.<br /><br />

        3. Intellectual Property<br />
        Users are responsible for ensuring that the photos and letters they create do not infringe the rights of third parties.<br /><br />

        4. Use of external sources<br />
        Users must comply with the terms of use of external sources used in the web app:<br />
        a.<a href='https://cataas.com/' target='_blank'>cataas</a><br />
        b.<a href='https://thecatapi.com/' target='_blank'>thecatapi</a><br />

        5. External Links<br />
        We are not responsible for the content or privacy practices of third-party websites accessible through links in our web app.<br />

        6. Contact<br />
        For any questions, you can contact us through <a style={{color: 'red'}} href='https://ariegonzaguer.netlify.app/' target='_blank'>{'>'}Contact Page{'<'}</a><br />
      </details>

      <button className={styles.backBtn} onClick={() => navigate('/')}>Back</button>
    </section>
  )
}