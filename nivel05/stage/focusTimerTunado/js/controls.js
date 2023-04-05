export default function Controls({
  body,
  buttonLightTheme,
  buttonDarkTheme,
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  forestSoundButtonWrapper,
  rainSoundButtonWrapper,
  coffeShopSoundButtonWrapper,
  fireplaceSoundButtonWrapper,
}) {
  function changeTheme() {
    buttonLightTheme.classList.toggle("hide")
    buttonDarkTheme.classList.toggle("hide")
    body.classList.toggle("lightMode")
  }

  function play() {
    buttonPlay.classList.add("hide")
    buttonPause.classList.remove("hide")
    buttonSet.classList.add("hide")
    buttonStop.classList.remove("hide")
  }

  function pause() {
    buttonPause.classList.add("hide")
    buttonPlay.classList.remove("hide")
  }

  function reset() {
    buttonPlay.classList.remove("hide")
    buttonPause.classList.add("hide")
    buttonSet.classList.remove("hide")
    buttonStop.classList.add("hide")
  }

  function getMinutes() {
    let newMinutes = Number(prompt("Quantos minutos?"))

    if (!newMinutes) {
      return false
    }

    return newMinutes
  }

  function activeForestSoundButton() {
    forestSoundButtonWrapper.classList.toggle("active")
  }

  function activeRainSoundButton() {
    rainSoundButtonWrapper.classList.toggle("active")
  }

  function activeCoffeShopSoundButton() {
    coffeShopSoundButtonWrapper.classList.toggle("active")
  }

  function activeFireplaceSoundButton() {
    fireplaceSoundButtonWrapper.classList.toggle("active")
  }

  return {
    changeTheme,
    play,
    pause,
    reset,
    getMinutes,
    activeForestSoundButton,
    activeRainSoundButton,
    activeCoffeShopSoundButton,
    activeFireplaceSoundButton,
  }
}
