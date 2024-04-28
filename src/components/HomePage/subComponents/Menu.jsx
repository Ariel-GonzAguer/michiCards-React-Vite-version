import React from 'react'
import styles from '../HomePage.module.css';

import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight, faCat, faBook, faSeedling, faIdBadge } from '@fortawesome/free-solid-svg-icons'

export default function Menu() {

  const optionsArray = {
    'createMichiCard': {
      name: 'Create Michi Card',
      link: '/create',
      icon: faCat,
      key: 1, 
      target: '_self'

    },
    'userGuide': {
      name: 'User Guide',
      link: '/user-guide',
      icon: faBook,
      key: 11, 
      target: '_self'
    },
    'donate': {
      name: 'Donate',
      link: 'https://paypal.me/ariegonzaguer?country.x=CR&locale.x=es_XC',
      icon: faSeedling,
      key: 111,
      target: '_blank'
    },
    'contact': {
      name: 'Contact',
      link: 'https://ariegonzaguer.netlify.app/' ,
      icon: faIdBadge,
      key: 1111,
      target: '_blank'
    }

  };

  const options = Object.entries(optionsArray);

  return (
    <ul className={styles.menu}>
      {
        options.map(([key, value]) => (
          <li key={key} className={styles.menuLi}> <FontAwesomeIcon icon={faCaretRight} />
            <Link className='menuButton' to={value.link} target={value.target} rel='noreferrer'>{value.name} <FontAwesomeIcon icon={value.icon} /></Link>
          </li>
        ))
      }
    </ul>
  )
}