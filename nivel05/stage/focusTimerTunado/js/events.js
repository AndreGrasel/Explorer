export default function ({
  controls,
  sound,
  timer,
  buttonLightTheme,
  buttonDarkTheme,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonAdd,
  buttonDecrease,
  forestSoundButton,
  rainSoundButton,
  coffeShopSoundButton,
  fireplaceSoundButton,
  forestInputVolume,
  rainInputVolume,
  coffeShopInputVolume,
  fireplaceInputVolume,
  soundButtonOff,
  soundButtonOn,
}) {
  buttonLightTheme.addEventListener("click", () => {
    controls.changeTheme()
    sound.pressButton()
  })

  buttonDarkTheme.addEventListener("click", () => {
    controls.changeTheme()
    sound.pressButton()
  })

  buttonPlay.addEventListener("click", () => {
    controls.play()
    timer.countdown()
    sound.pressButton()
  })

  buttonSet.addEventListener("click", () => {
    let newMinutes = controls.getMinutes()

    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  buttonPause.addEventListener("click", () => {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener("click", () => {
    controls.reset()
    timer.reset()
    sound.pressButton()
  })

  buttonAdd.addEventListener("click", () => {
    timer.add()
    sound.pressButton()
  })

  buttonDecrease.addEventListener("click", () => {
    timer.decrease()
    sound.pressButton()
  })

  forestSoundButton.addEventListener("click", () => {
    controls.activeForestSoundButton()
    sound.resetVolume("forest")
    sound.forest()
    sound.pressButton()
  })

  rainSoundButton.addEventListener("click", () => {
    controls.activeRainSoundButton()
    sound.resetVolume("rain")
    sound.rain()
    sound.pressButton()
  })

  coffeShopSoundButton.addEventListener("click", () => {
    controls.activeCoffeShopSoundButton()
    sound.resetVolume("coffeShop")
    sound.coffeShop()
    sound.pressButton()
  })

  fireplaceSoundButton.addEventListener("click", () => {
    controls.activeFireplaceSoundButton()
    sound.resetVolume("fireplace")
    sound.fireplace()
    sound.pressButton()
  })

  forestInputVolume.addEventListener("input", sound.setVolume)
  rainInputVolume.addEventListener("input", sound.setVolume)
  coffeShopInputVolume.addEventListener("input", sound.setVolume)
  fireplaceInputVolume.addEventListener("input", sound.setVolume)

  soundButtonOn.addEventListener("click", () => {
    soundButtonOff.classList.toggle("hide")
    soundButtonOn.classList.toggle("hide")
    sound.muteVolumeOn()
  })

  soundButtonOff.addEventListener("click", () => {
    soundButtonOff.classList.toggle("hide")
    soundButtonOn.classList.toggle("hide")
    sound.muteVolumeOff()
  })
}
