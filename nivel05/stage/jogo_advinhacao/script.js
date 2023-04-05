const btnTry = document.querySelector(".btnTry")
const btnReset = document.querySelector(".btnReset")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener("keydown", handleResetEnter)

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = screen1.querySelector("input")

  if (
    inputNumber.value == "" ||
    !(Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10)
  ) {
    alert("[ERRO] Insera um número entre 0 e 10!")
  } else {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      screen2.querySelector(
        "h1"
      ).innerText = `Acertou em ${xAttempts} tentativas!`
    }

    inputNumber.value = ""
    xAttempts++
  }
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleResetEnter(e) {
  if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
