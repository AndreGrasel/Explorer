const closedCookieScreen = document.querySelector(".screen.closedCookie")
const openCookieScreen = document.querySelector(".screen.openedCookie")

const closedCookieImg = closedCookieScreen.querySelector("img")
const openOtherCookieBtn = document.querySelector(".screen.openedCookie button")

const cookiePhrase = document.querySelector(
  ".screen.openedCookie .cookiePhrase"
)
const phrases = [
  "Sorte é estar pronto quando a oportunidade vem.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos.",
  "Coragem não é a ausência do medo, é fazer apesar do medo.",
  "O aprendizado é contínuo e o próximo nível nunca será o último.",
  "Não compare seus bastidores com o palco dos outros.",
]

closedCookieImg.addEventListener("click", randomPhrase)
openOtherCookieBtn.addEventListener("click", toggleCookieScreen)

function randomPhrase() {
  cookiePhrase.innerText = phrases[Math.floor(Math.random() * phrases.length)]

  toggleCookieScreen()
}

function toggleCookieScreen() {
  closedCookieScreen.classList.toggle("hide")
  openCookieScreen.classList.toggle("hide")
}
