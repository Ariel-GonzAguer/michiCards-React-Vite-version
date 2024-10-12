import uno from "/gifs/uno.gif";
import dos from "/gifs/dos.gif";
import cuatro from "/gifs/cuatro.gif";
import cinco from "/gifs/cinco.gif";
import seis from "/gifs/seis.gif";
import siete from "/gifs/siete.gif";
import ocho from "/gifs/ocho.gif";
import nueve from "/gifs/nueve.gif";
import diez from "/gifs/diez.gif";

import errorGifCat from "/gifs/errorGifCat.webp";

const gifArray = [uno, dos, cuatro, cinco, seis, siete, ocho, nueve, diez];

export default function getGif() {
  try {
    const randomIndex = Math.floor(Math.random() * gifArray.length);
    const selectedGif = gifArray[randomIndex];
    return selectedGif;
  } catch (error) {
    console.error(error);
    return errorGifCat;
  }
}
