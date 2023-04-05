export default function ({
  forestSoundButtonWrapper,
  rainSoundButtonWrapper,
  coffeShopSoundButtonWrapper,
  fireplaceSoundButtonWrapper,
  forestInputVolume,
  rainInputVolume,
  coffeShopInputVolume,
  fireplaceInputVolume,
}) {
  const buttonPressed = new Audio("./sounds/buttonPressed.wav")
  const kitchenTimer = new Audio("./sounds/kitchenTimer.mp3")
  const forestBg = new Audio("./sounds/forest.wav")
  const rainBg = new Audio("./sounds/rain.wav")
  const coffeShopBg = new Audio("./sounds/coffeShop.wav")
  const fireplaceBg = new Audio("./sounds/fireplace.wav")

  forestBg.loop = true
  rainBg.loop = true
  coffeShopBg.loop = true
  fireplaceBg.loop = true

  // forestBg.pau

  function pressButton() {
    buttonPressed.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function forest() {
    forestSoundButtonWrapper.classList.contains("active")
      ? forestBg.play()
      : forestBg.pause()
  }

  function rain() {
    rainSoundButtonWrapper.classList.contains("active")
      ? rainBg.play()
      : rainBg.pause()
  }

  function coffeShop() {
    coffeShopSoundButtonWrapper.classList.contains("active")
      ? coffeShopBg.play()
      : coffeShopBg.pause()
  }

  function fireplace() {
    fireplaceSoundButtonWrapper.classList.contains("active")
      ? fireplaceBg.play()
      : fireplaceBg.pause()
  }

  function setVolume() {
    forestBg.volume = forestInputVolume.value
    rainBg.volume = rainInputVolume.value
    coffeShopBg.volume = coffeShopInputVolume.value
    fireplaceBg.volume = fireplaceInputVolume.value
  }

  function resetVolume(card) {
    switch (card) {
      case "forest":
        forestInputVolume.value = 0.5
        setVolume()
        break
      case "rain":
        rainInputVolume.value = 0.5
        setVolume()
        break
      case "coffeShop":
        coffeShopInputVolume.value = 0.5
        setVolume()
        break
      case "fireplace":
        fireplaceInputVolume.value = 0.5
        setVolume()
        break
      default:
        break
    }
  }

  function muteVolumeOn() {
    forestBg.muted = true
    rainBg.muted = true
    coffeShopBg.muted = true
    fireplaceBg.muted = true
  }

  function muteVolumeOff() {
    forestBg.muted = false
    rainBg.muted = false
    coffeShopBg.muted = false
    fireplaceBg.muted = false
  }

  return {
    pressButton,
    timeEnd,
    forest,
    rain,
    coffeShop,
    fireplace,
    setVolume,
    resetVolume,
    muteVolumeOn,
    muteVolumeOff,
  }
}
