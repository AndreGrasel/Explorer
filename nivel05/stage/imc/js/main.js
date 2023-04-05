import { AlertError } from "./alert-error.js"
import { notNumber, calculateIMC } from "./utils.js"
import { Modal } from "./modal.js"

const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")
const form = document.querySelector("form")

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber =
    notNumber(weight) || notNumber(height) || weight < 0 || height < 0

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()

  const result = calculateIMC(weight, height)
  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()
}
