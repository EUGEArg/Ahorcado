const letters    = document.getElementById("letras");
let alphabet     = document.getElementById("abecedario");
const lives      = document.getElementById("vidas");
let images       = document.getElementById("imagenes");
let wrongLetters = document.getElementById("equivocadas");

let palabras = [
  "elefante",
  "perro",
  "tigre",
  "ballena",
  "jirafa",
  "caballo",
  "ardilla",
  "hipopotamo",
  "leopardo",
  "conejo",
  "delfin",
  "hipocampo",
  "lechuza",
  "mapache",
  "flamenco"
];

const abc = "abcdefghijklmnopqrstuvwxyz".split(""); // abecedario

let vidas = 9; // vidas del juego
lives.innerHTML = `<span> ${vidas}</span>`;

let historialArr = []; //historial de letras equivocadas

const palabraSeleccionada =
  palabras[Math.floor(Math.random() * palabras.length)]; //selección de palabras al azar
let pSeleccArr = palabraSeleccionada.split("");

const palabraGuiones = palabraSeleccionada.replace(/./g, "_");
let guionesArr = palabraGuiones.split(""); //reemplazo array de letras por guiones
letters.innerHTML = guionesArr.join(" ");

abc.forEach((element) => {  // creo abecedario con botones
 const button = document.createElement("button");
  button.innerHTML = element.toUpperCase();
  alphabet.appendChild(button).id = element;

  button.addEventListener("click", (e) => { // click para seleccionar la letra
    let letraClickeada = e.target.id;
    let letraIndex = pSeleccArr.indexOf(letraClickeada);

    for (let i = 0; i < pSeleccArr.length; i++) {
      if (pSeleccArr[i] === letraClickeada) { // comparo letraClickeada con indice en palabra
        guionesArr[i] = letraClickeada;
        letters.innerHTML = guionesArr.join(" ").toUpperCase();
      }
    }

    if (letraIndex === -1) { // letra cliqueada no coincide
      vidas--;
      lives.innerHTML = `<span> ${vidas}</span>`;

      historialArr.push(letraClickeada); // agrago letra equivocada en historial
      wrongLetters.innerHTML = historialArr.join(' - ').toUpperCase(); 
      button.disabled = true; // deshabilito letra equivocada
      button.style.cssText = "color:red";
    } 

    if (vidas === 0) { // perdió el juego
      alphabet.innerHTML = "FIN DEL JUEGO";
      document.getElementById('btn-new-game').style.visibility= "visible";
    }

    if (guionesArr.join("") === palabraSeleccionada) { // ganó el juego
      alphabet.innerHTML = "FELICIDADES, GANASTE!!!";
      document.getElementById('btn-new-game').style.visibility= "visible";
    }

    if (vidas === 8) {  // resto vidas, aparece imágen
       images.innerHTML = `<img src="./images/8_vidas.webp" />`;
    } else if (vidas === 7) {
      images.innerHTML = `<img src="./images/7_vidas.webp" />`;
    } else if (vidas === 6) {
      images.innerHTML = `<img src="./images/6_vidas.webp" />`;
    } else if (vidas === 5) {
      images.innerHTML = `<img src="./images/5_vidas.webp" />`;
    } else if (vidas === 4) {
      images.innerHTML = `<img src="./images/4_vidas.webp" />`;
    } else if (vidas === 3) {
      images.innerHTML = `<img src="./images/3_vidas.webp" />`;
    } else if (vidas === 2) {
      images.innerHTML = `<img src="./images/2_vidas.webp" />`;
    } else if (vidas === 1) {
      images.innerHTML = `<img src="./images/1_vidas.webp" />`;
    } else if (vidas === 0) {
      images.innerHTML = `<img src="./images/0_vidas.webp" />`;
    }
  });
});

