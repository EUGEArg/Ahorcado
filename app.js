const letters = document.getElementById("letras");
let alphabet = document.getElementById("abecedario");
const lives = document.getElementById("vidas");
let images = document.getElementById("imagenes");
let wrongLetters = document.getElementById("equivocadas");

let palabras = [
  "elefante",
  "perro",
  "tigre",
  "ballena",
  "jirafa",
  "caballo",
  "paloma",
  "hipopotamo",
  "leopardo",
  "conejo",
];

const abc = "abcdefghijklmnopqrstuvwxyz".split(""); // ABECEDARIO

let vidas = 9; // VIDAS DEL JUEGO
lives.innerHTML = `<span class="text-4xl"> ${vidas}</span>`;

let historialArr = [];

const palabraSeleccionada =
  palabras[Math.floor(Math.random() * palabras.length)]; //SELECCIÓN DE PALABRA AL AZAR
let pSeleccArr = palabraSeleccionada.split("");
//console.log(pSeleccArr);

const palabraGuiones = palabraSeleccionada.replace(/./g, "_");
let guionesArr = palabraGuiones.split(""); //REEMPLAZO PALABRAS POR GUIONES
letters.innerHTML = guionesArr.join(" ");
console.log(guionesArr );

abc.forEach((element) => {
  // CREO ABECEDARIO CON BOTONES
  const button = document.createElement("button");
  button.innerHTML = element.toUpperCase();
  alphabet.appendChild(button).id = element;

  button.addEventListener("click", (e) => {
    let letraClickeada = e.target.id;
    let letraIndex = pSeleccArr.indexOf(letraClickeada);
    
    for (let i = 0; i < pSeleccArr.length; i++) {
      if (pSeleccArr[i] === letraClickeada) {
        guionesArr[i] = letraClickeada;
        letters.innerHTML = guionesArr.join(" ").toUpperCase();
      }
    }

    if (letraIndex === -1) { //LETRA CLICLEADA NO COINCIDE 
      vidas--;
      lives.innerHTML = `<span class="text-4xl"> ${vidas}</span>`;
      button.classList.add("text-red-600");
      historialArr.push(letraClickeada);
      console.log(historialArr);
      wrongLetters.innerHTML = historialArr.join(' - ').toUpperCase();
      console.log(historialArr.join(' - '))

      
    }

    if (vidas === 0) {
      //PERDIÓ
      //console.log("FIN DEL JUEGO");
      alphabet.innerHTML = "FIN DEL JUEGO";
    }

    if (guionesArr.join("") === palabraSeleccionada) {
      //GANÓ
      alphabet.innerHTML = "FELICIDADES, GANASTE!!!";
    }

    if (vidas === 8) {
      //Resto vidas, aparece imágen

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
