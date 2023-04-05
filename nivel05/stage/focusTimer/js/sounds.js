export default function () {
  const buttonPressed = new Audio("./sounds/buttonPressed.wav")
  const kitchenTimer = new Audio("./sounds/kitchenTimer.mp3")
  const bgAudio = new Audio("./sounds/defaultBg.mp3")

  bgAudio.loop = true

  function pressButton() {
    buttonPressed.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    pressButton,
    timeEnd,
    bgAudio,
  }
}
