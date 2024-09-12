window.onload = main;

const palanca = document.querySelector("#palanca");
const tirar = document.querySelector("#tirar");
 
const btnsTirar = document.querySelectorAll(".boton");
const cajaImgFruta = document.querySelectorAll(".imagen");
const velo = document.querySelector("#velo");
const ventanaMsj = document.querySelector("#ventanaMsj");
const mensaje = document.querySelector("#mensaje");
const credito = document.querySelector("#credito");
const dinero = document.querySelector("#dinero"); 
const monedas = document.querySelector("#monedas");
const cruz = document.querySelector("#cruz");
const msj = document.querySelector("#msj");
const sonido = document.querySelector("#sonido");
const imgx = document.querySelector(".imgx");
 
let creditos = (Math.floor(Math.random()*4)+9);
let nombreImg = ["A1.gif","A2.gif","A3.gif","A4.gif","A5.gif","A6.gif"];
let premios=[3,4,2,3,6,5];
let currentNumbers= [];
let activar = false;
let tiempoGirando = null;

tirar.addEventListener("click", animationTirar);
function animationTirar () {
  if(creditos > 0 && tiempoGirando === null){
    palanca.animate([
        { transform: "rotate(0deg)" },
        { transform: "translateX(45px) rotate(12deg)" },
        { transform: "rotate(0deg)" },
      ], {
        duration: 500,
        easing: "ease-in-out",
      });
  }
}

function animationGirar() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .imgx {
      animation: girarInfinito 0.4s linear infinite;
    }
    @keyframes girarInfinito {
      0% { transform: translateY(-55%); opacity: 0; }
      50% { transform: translateY(0%); opacity: 1; }
      100% { transform: translateY(55%); opacity: 0; }
    }
  `;
  document.head.appendChild(styleElement);
}

function deleteGirar() {
  const styleElement = document.createElement('style');
  styleElement.textContent = `
    .imgx {
      animation: girarInfinito 0s linear infinite;
    }
    @keyframes girarInfinito {
      0% { transform: translateY(0); opacity: 1; }
      50% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(0); opacity: 0; }
    }
  `;
  document.head.appendChild(styleElement);
}

function main () {
  actualizar();
  tirar.onclick = lanzadaMain;
  cruz.onclick = cerrar;
  for(let i = 0; i < btnsTirar.length; i++){
    btnsTirar[i].onclick=btnLanzarUno;
  } 
}

function lanzadaMain () {
  activar = false;
  if (creditos > 0 && tiempoGirando === null){
    musica("tirar.mp3");
    currentNumbers= [];
    for (let i = 0; i < btnsTirar.length; i++) {
      currentNumbers.push(chooseNumber());
      frutaGirando(i,currentNumbers[i]);
    } 
    compare();
  }
}

function btnLanzarUno () {
  if(creditos > 0 && activar===true){
    musica("tirar2.mp3");
    let hijos = this.parentNode.parentNode.children;
    for(let i= 0; i < hijos.length; i++) {
      if(this.parentNode == hijos[i]) {
        currentNumbers[i] = chooseNumber(currentNumbers[i]);
        changeFruta(i, currentNumbers[i]);
        compare();
        break;
      }
    }
  }
}

function chooseNumber (NumberLanzado) {
  let azar;
  do{
    azar = Math.floor(Math.random()*nombreImg.length);
  } while (azar==NumberLanzado)
  return azar; 
}

function frutaGirando (numeroCaja, numeroImg) {
  cajaImgFruta[numeroCaja].querySelector("img").src=`./img/CINTA CACINO.png`;
  tiempoGirando = setTimeout( () => {changeFruta(numeroCaja ,numeroImg); tiempoGirando = null;}, 3200); 
  animationGirar();
}

function changeFruta (numeroCaja, numeroImg) {
  cajaImgFruta[numeroCaja].querySelector("img").src=`./img/${nombreImg[numeroImg]}`;
  deleteGirar();
  activar = true
}

function compare () {
  if(currentNumbers[0]===currentNumbers[1] && currentNumbers[1]===currentNumbers[2]){
    activar = false;
    let prize = premios[currentNumbers[0]];
    let WinMessage = `Ganaste $${prize} monedas <div>`;
    for(let i=0; i < prize; i++){
      WinMessage+=`<img id="monedaWin" src="./img/moneda2.png">`;
    }
    WinMessage+=`</div>`; 
    showMessage(WinMessage);
    musica("win.mp3");
    creditos+=premios[currentNumbers[0]];
    actualizar();
  } else {
    creditos--;
    actualizar();
  }
}

function actualizar () {
  dinero.innerHTML=creditos;
  monedas.innerHTML=``
  for(let i= 1; i <= creditos; i++){
    monedas.innerHTML+=`<img src="./img/moneda2.png">`;
  }
  /*
  if(creditos < 1){
    showMessage(`ALT + F4 y recargas la pagina No creare un boton solo por ti <img src="./img/gato.gif" alt="gato" id="gato">`);
    musica("perder.mp3");
  }
  */
  if(creditos < 1){
    sonido.pause();
    deleteGirar();
    showMessage(`Sin Monedas... <br> <button class="restart">recargar</button> `);
    const restart = document.querySelector(".restart");
    restart.onclick = recargarPagina; 
  }
}

function showMessage (message) {
  velo.style.display="flex";
  mensaje.innerHTML=message;
}

function cerrar () {
  velo.style.display="none";
  sonido.pause();
}

function musica (audio) {
  sonido.src=`./music/${audio}`;
  sonido.play();
}

function recargarPagina() {
  creditos = (Math.floor(Math.random()*4)+9);
  dinero.innerHTML=creditos;
  monedas.innerHTML=``
  for(let i= 1; i <= creditos; i++){
    monedas.innerHTML+=`<img src="./img/moneda2.png">`;}
    cerrar();
}

const backgroundMusic = document.querySelector("#music");
const play = document.querySelector(".play");
play.addEventListener("change", playAudio);

backgroundMusic.volume = 0.4;
sonido.volume = 0.6;

function playAudio() {
  if (backgroundMusic.paused) {
    backgroundMusic.play();
    creditos+=1;
    dinero.innerHTML=creditos;
  } else {
    backgroundMusic.pause();
  }
}
