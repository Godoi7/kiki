const inicio = new Date("2023-08-06");

// CONTADOR
function atualizarContador() {
  const hoje = new Date();
  const diff = hoje - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
  const minutos = Math.floor(diff / (1000 * 60)) % 60;

  document.getElementById("contador").innerText =
    `Estamos juntos há ${dias} dias, ${horas}h e ${minutos}min ❤️`;
}

atualizarContador();
setInterval(atualizarContador, 1000);

// MUSICA
function tocarMusica() {
  const musica = document.getElementById("musica");
  musica.volume = 0.5;
  musica.play().catch(() => alert("Clique novamente ❤️"));
}

// MOMENTOS (ALBUM)
const momentos = {
  1: ["momento1.jpg", "momento1b.jpg"],
  2: ["momento2.jpg", "momento2b.jpg"],
};

let fotos = [];
let index = 0;

function abrirMomento(num) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("imagemModal");
  const video = document.getElementById("videoModal");

  modal.style.display = "flex";

  img.style.display = "block";
  video.style.display = "none";
  video.pause();

  if (num === 3) {
    img.style.display = "none";
    video.style.display = "block";
    video.play();
    return;
  }

  fotos = momentos[num];
  index = 0;
  img.src = fotos[index];
}

// FECHAR
function fecharModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("videoModal").pause();
}

// SWIPE
let startX = 0;

const img = document.getElementById("imagemModal");

img.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

img.addEventListener("touchend", e => {
  let endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) proxima();
  if (endX - startX > 50) anterior();
});

function proxima() {
  if (index < fotos.length - 1) index++;
  else index = 0;

  document.getElementById("imagemModal").src = fotos[index];
}

function anterior() {
  if (index > 0) index--;
  else index = fotos.length - 1;

  document.getElementById("imagemModal").src = fotos[index];
}

// CORAÇÕES
function criarCoracao() {
  const c = document.createElement("div");
  c.className = "coracao";
  c.innerText = "❤️";
  c.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(c);

  setTimeout(() => c.remove(), 4000);
}
setInterval(criarCoracao, 500);

// SERVICE WORKER
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}