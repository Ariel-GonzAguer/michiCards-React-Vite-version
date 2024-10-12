import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./UserGuide.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsUpDown,
  faCat,
  faMobileScreen,
  faShieldCat,
  faStar,
  faStarHalfStroke,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export default function UserGuide() {
  // router
  const navigate = useNavigate();

  const detailsRef1 = useRef(null);
  const detailsRef2 = useRef(null);
  const detailsRef2_1 = useRef(null);
  const detailsRef2_2 = useRef(null);
  const detailsRef3 = useRef(null);
  const detailsRef4 = useRef(null);
  const detailsRef5 = useRef(null);
  const detailsRef6 = useRef(null);

  const closeDetails = (ref) => {
    if (ref.current) {
      ref.current.open = false;
    }
  };

  return (
    <section className={styles.guide}>
      <h1>Welcome to the User Guide!</h1>
      <p>
        Here you could find a complete guide to use the MichiCards web app.
        <br />
        <br />
        To navigate through the sections, click on the titles. If you want to
        close a section, click on the 'Close this section' button.
      </p>

      <details ref={detailsRef1}>
        <summary>
          <span className={styles.summaryTitle}>Device considerations</span>
        </summary>
        <ul>
          <li>
            <FontAwesomeIcon icon={faWifi} className={styles.icon} /> It is
            essential that the device have an internet connection to use the
            app. <br />
            PREFERABLY use a Wi-Fi connection, as the App can consume several
            megabytes.
          </li>
          <li>
            <FontAwesomeIcon icon={faMobileScreen} className={styles.icon} />{" "}
            The app is designed to be used on mobile devices with conventional
            size screens. On laptops, desktop computers and tablets{" "}
            <span className={styles.hey}>
              THE IMAGES COULD LOOK KINDA WEIRD, LIKE VERY SMALL.
            </span>
          </li>
          <li>
            <FontAwesomeIcon icon={faArrowsUpDown} className={styles.icon} /> To
            avoid image distortion, the device must be placed vertically (not
            panoramic) when taking the screenshot
          </li>
        </ul>
        <button
          onClick={() => closeDetails(detailsRef1)}
          className={styles.closeBtn}
        >
          Close this section
        </button>
      </details>

      <details ref={detailsRef2}>
        <summary>
          <span className={styles.summaryTitle}>Create Michi Cards!</span>
        </summary>
        <p className={styles.pDetails}>
          To create a New Michi Card, press the 'Create Michi Card' option.
          <br />
          You'll instantly see a Cool kitten wearing sunglasses, and the Form to
          create your own Michi Card!
        </p>
        <p className={styles.pDetails}>
          The only two essential requirement on the form to create the card are
          to write Michi's name and choose and option for the picture.
        </p>
        <p className={styles.pDetails}>
          The name must be a maximum of 11 characters. Choose the name that
          seems funniest or cutest to you.
        </p>
        <p className={styles.pDetails}>
          You can write a description about the feline in the 'Describe the
          Michi' section, in 125 characters (including spaces) or less. If you
          don't write anything, no problem, some feline deity will grant the
          Michi they divine personality.
          <br />
          The Michi Card's stats range from 1 to 100. The initial value of each
          stat is 1, and can be changed as desired.
        </p>
        <p className={styles.pDetails}>
          For the image of the card You have two options:
        </p>
        <details ref={detailsRef2_1}>
          <summary>Use your own picture</summary>
          <p className={styles.pDetails}>
            You can take a picture with your device pressing the 'Take your own
            picture' button. <br />
            Try to put the face of your Michi in the upper section of the
            picture to have better results.
          </p>
          <span className={styles.hey}>IMPORTANT!</span>
          <p className={styles.pDetails}>
            The picture you take with your device is NOT saved anywhere by
            default, neither in the server or client file system. Also, using
            this option the MichiCard Will NOT be saved in the Browser's Local
            Storage.
          </p>
          <button
            onClick={() => closeDetails(detailsRef2_1)}
            className={styles.closeBtn}
          >
            Close this section
          </button>
        </details>
        <p className={styles.pDetails}>or</p>
        <details ref={detailsRef2_2}>
          <summary>Use a random picture obtained by the app</summary>
          <p className={styles.pDetails}>
            Just press 'Get random picture' button to see the kitty cat that
            will be in the new Michi Card.
          </p>
          <p className={styles.pDetails}>
            You can press 'Get random picture' as many times as You want to see
            different pictures. Please, keep in mind that each picture fetched
            consume data.
          </p>
          Using this option the MichiCard Will be saved in the Browser's
          localStorage.
          <button
            onClick={() => closeDetails(detailsRef2_2)}
            className={styles.closeBtn}
          >
            Close this section
          </button>
        </details>
        <span className={styles.hey}>IMPORTANT!</span>
        <p className={styles.pDetails}>
          If you don't load a picture or preview an image, the new Michi Card
          will not be created.
        </p>
        <p className={styles.pDetails}>
          Once the above information is complete, press the 'Create!' button to
          see the new created Michi Card{" "}
        </p>
        <p className={styles.pDetails}>
          Now You can take a screenshot to save the new Michi Card on your
          device!
        </p>
        <span className={styles.hey}>Note:</span>
        <p className={styles.pDetails}>
          To create a New Michi Card, after created one, press the icon to the
          right of Michi's name to go back to the Create Michi Card section.
        </p>
        <button
          onClick={() => closeDetails(detailsRef2)}
          className={styles.closeBtn}
        >
          Close this section
        </button>
      </details>

      <details ref={detailsRef3}>
        <summary>
          <span className={styles.summaryTitle}>Feral cards</span>
        </summary>
        <p className={styles.pDetails}>What is a Feral Card?</p>
        <p className={styles.pDetails}>
          A Feral Card is one that is different from the 'common' card created
          with the app. The 'common' Michi Cards have a specific design: Pink
          background, Michi's name and double border of the card in black, and
          the icon on the card is{" "}
          <FontAwesomeIcon icon={faShieldCat} className={styles.icon} />
        </p>
        <p className={styles.pDetails}>
          When the Michi Card is created, a random number is generated between 0
          and 1000. If this number is less than or equal to 976, You will have a
          beautiful 'common' card, but...
        </p>
        <p className={styles.pDetails}>
          ...if it is greater than 976 you obtain a 'Half Star' type Feral Card.
          This type of card is very similar to the 'common', but its background
          is of a nice blue and a 'Half Star' icon in silver color appears next
          to the Michi's name
          <FontAwesomeIcon icon={faStarHalfStroke} className={styles.icon} />
          The probability of obtaining one of these cards is 2.39% each time a
          Michi Card is created.
        </p>
        <p className={styles.pDetails}>
          ...but if the number is{" "}
          <span style={{ color: "palevioletred" }}>exactly 6</span>
          You will get a 'Full Star' card, which has a black background, a white
          double border, golden decorations and a 'Full Star' icon{" "}
          <FontAwesomeIcon icon={faStar} className={styles.icon} /> next to
          Michi's name.
          <br />
          The probability of obtaining this type of card is 0.09% each time a
          Michi Card is created.
        </p>
        <button
          onClick={() => closeDetails(detailsRef3)}
          className={styles.closeBtn}
        >
          Close this section
        </button>
      </details>

      <details ref={detailsRef4}>
        <summary>
          <span className={styles.summaryTitle}>
            Where is the data to create the Michi Card obtained from?
          </span>
        </summary>
        <p className={styles.noFlex}>
          This web project is created around different sources.
          <br />
          <br />
          The gifs that load on the Home Page was downloaded through the{" "}
          <a href="https://cataas.com/" target="_blank">
            CATAAS API
          </a>{" "}and are stored in the project's file system.
          <br />
          Random pictures for the Card images are obtained using{" "}
          <a href="https://thecatapi.com/" target="_blank">
            The Cat API
          </a>
          .
          <br />
          The icons are part of the free{" "}
          <a href="https://fontawesome.com/" target="_blank">
            Font Awesome
          </a>{" "}
          collections.
          <br />I found the <strong>Cool kitten wearing sunglasses</strong> many
          years ago on Google doing another project with cats. Currently I can't
          find its source.
          <br />
          The initial loading animation was achieved thanks to{" "}
          <a href="https://animista.net/" target="_blank">
            animista.net
          </a>
          .
          <br />
          And the font comes from{" "}
          <a href="https://fonts.google.com/">Google Fonts</a>.
        </p>

        <button
          onClick={() => closeDetails(detailsRef4)}
          className={styles.closeBtn}
        >
          Close this section
        </button>
      </details>

      <details ref={detailsRef5}>
        <summary>
          <span className={styles.summaryTitle}>Local MichiCards</span>
        </summary>
        <p className={styles.pDetails}>
          With this version of the MichiCards web app, the cards that are
          created with the random pictures are saved in the browser's Local
          Storage. The cards will live there until You delete manually the Local
          Storage of your browser. Also, You can delete individually the cards
          You don't want more in your Local Storage. Once the card is deleted,
          is gone forever.
        </p>
        <button
          onClick={() => closeDetails(detailsRef5)}
          className={styles.closeBtn}
        >
          Close this section
        </button>
      </details>

      <details ref={detailsRef6}>
        <summary>
          <span className={styles.summaryTitle}>
            Terms of Use, Privacy Policy and Legal Notice
          </span>
        </summary>
        <p className={styles.noFlex}>Terms of use</p>
        <p className={styles.noFlex}>1. Introduction</p>
        <p className={styles.noFlex}>
          Welcome to our web app, where you can create your own Michi Cards! By
          accessing and using our web app, you agree to comply with these Terms
          of Use.
        </p>
        <p className={styles.noFlex}>2. Use of the Service</p>
        <p className={styles.noFlex}>
          Users can upload their own photos and obtain images from an external
          source to create cards. Users can interact with the web app through
          their browser, using buttons and text fields, and take photos with
          their camera. The created cards are only stored in the browser's local
          storage and are not visible to other users unless the user voluntarily
          shares them.
        </p>
        <p className={styles.noFlex}>3. Intellectual Property</p>
        <p className={styles.noFlex}>
          Users own the cards they create using the web app. Photos and letters
          are not stored on our servers; They are only stored in the local
          storage of the user's browser.
        </p>
        <p className={styles.noFlex}>4. User Content</p>
        <p className={styles.noFlex}>
          We do not manage or have access to content created by users, as it is
          not stored on our servers. Users are responsible for the content they
          create and must ensure that it does not violate any laws or
          third-party rights.
        </p>
        <p className={styles.noFlex}>5. Use of External Sources</p>
        <p className={styles.noFlex}>
          The web app uses images from two external sources:
          <br />
          a.
          <a href="https://cataas.com/" target="_blank">
            cataas
          </a>
          <br />
          b.
          <a href="https://thecatapi.com/" target="_blank">
            thecatapi
          </a>
          <br />
          Users must respect the terms of use of external sources when using the
          provided images. On the page of each external source you can find
          related information.
        </p>
        <p className={styles.noFlex}>6. Limitation of Liability</p>
        <p className={styles.noFlex}>
          We do not guarantee the availability or uninterrupted functionality of
          the web app. We are not responsible for any damage or loss resulting
          from the use of the web app.
        </p>
        <p className={styles.noFlex}>7. Modifications</p>
        <p className={styles.noFlex}>
          We reserve the right to modify these Terms of Use at any time. Changes
          will be posted on this page.
        </p>
        <p className={styles.noFlex}>8. Contact</p>
        <p className={styles.noFlex}>
          For any questions, you can contact us through{" "}
          <a href="https://ariegonzaguer.netlify.app/" target="_blank">
            {">"}Contact Page{"<"}
          </a>
        </p>
        <p className={styles.noFlex}>Privacy Policy</p>
        <p className={styles.noFlex}>1. Introduction</p>
        <p className={styles.noFlex}>
          This Privacy Policy describes how we handle and protect the
          information that is generated through our web app.
        </p>
        <p className={styles.noFlex}>2. Information Collected</p>
        <p className={styles.noFlex}>
          We do not collect personal information from users. The only
          information stored is the created menu, which includes a description
          and statistics, and is saved in the browser's local storage.
        </p>
        <p className={styles.noFlex}>3. Use of Information</p>
        <p className={styles.noFlex}>
          The information stored in local storage is used solely to allow users
          to access and modify their menus within their browser.
        </p>
        <p className={styles.noFlex}>4. Security</p>
        <p className={styles.noFlex}>
          The information in local storage is protected by the security measures
          of the user's browser. Browser security is the user's responsibility.
        </p>
        <p className={styles.noFlex}>5. Share Information</p>
        <p className={styles.noFlex}>
          We do not share information with third parties as we do not collect or
          store personal data on our servers.
        </p>
        <p className={styles.noFlex}>6. Changes to the Privacy Policy</p>
        <p className={styles.noFlex}>
          We reserve the right to modify this Privacy Policy at any time.
          Changes will be posted on this page.
        </p>
        <p className={styles.noFlex}>7. Contact</p>
        <p className={styles.noFlex}>
          For any questions, you can contact us through{" "}
          <a href="https://ariegonzaguer.netlify.app/" target="_blank">
            {">"}Contact Page{"<"}
          </a>
        </p>
        <p className={styles.noFlex}>Legal warning</p>
        <p className={styles.noFlex}>1. General</p>
        <p className={styles.noFlex}>
          This web app is provided "as is" and "as available", without
          warranties of any kind.
        </p>
        <p className={styles.noFlex}>2. Responsibility</p>
        <p className={styles.noFlex}>
          We are not responsible for any direct, indirect, incidental, special
          or consequential damages resulting from the use of this web app.
        </p>
        <p className={styles.noFlex}>3. Intellectual Property</p>
        <p className={styles.noFlex}>
          Users are responsible for ensuring that the photos and letters they
          create do not infringe the rights of third parties.
        </p>
        <p className={styles.noFlex}>4. Use of external sources</p>
        <p className={styles.noFlex}>
          Users must comply with the terms of use of external sources used in
          the web app:
          <br />
          a.
          <a href="https://cataas.com/" target="_blank">
            cataas
          </a>
          <br />
          b.
          <a href="https://thecatapi.com/" target="_blank">
            thecatapi
          </a>
        </p>
        <p className={styles.noFlex}>5. External Links</p>
        <p className={styles.noFlex}>
          We are not responsible for the content or privacy practices of
          third-party websites accessible through links in our web app.
        </p>
        <p className={styles.noFlex}>6. Contact</p>
        <p className={styles.noFlex}>
          For any questions, you can contact us through{" "}
          <a href="https://ariegonzaguer.netlify.app/" target="_blank">
            {">"}Contact Page{"<"}
          </a>
        </p>
        <button
          onClick={() => closeDetails(detailsRef6)}
          className={styles.closeBtn}
        >
          Close this section
        </button>
      </details>

      <button className={styles.backBtn} onClick={() => navigate("/")}>
        Back
      </button>
    </section>
  );
}
