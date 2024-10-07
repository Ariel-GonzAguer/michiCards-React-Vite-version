import React from "react";
import styles from "./Modal.module.css";

export default function Modal({ setOpen, modalContent }) {
  /* este modal recibe dos props, setOpen y modalContent.
 modalContent debe ser un objeto con la siguiente estructura:
     
    const modalContent = {
    text: 'Delete this card forever?',
    close: {text: 'Cancel', class: 'cancel'},
    button_Two: <button className={stylesModal.button_Two} onClick={() => { handleDelete(cardKeyToDelete); setOpen(false) }}>Delete</button>
  }

  y setOpen debe estar en el componente padre para abrir o cerrar el modal:
   const [open, setOpen] = useState(false);
  */

  return (
    <>
      <dialog className={styles.modal} open>
        <p>{modalContent.text}</p>
        <button
          onClick={() => setOpen(false)}
          className={`${styles[modalContent.close.class]}`}
        >
          {modalContent.close.text}
        </button>
        {modalContent.button_Two}
      </dialog>
    </>
  );
}
