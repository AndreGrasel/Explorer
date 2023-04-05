const body = document.querySelector("body")
const buttonLightTheme = document.querySelector("header button.lightTheme")
const buttonDarkTheme = document.querySelector("header button.darkTheme")

const minutesDisplay = document.querySelector("main .timer .time .minutes")
const secondsDisplay = document.querySelector("main .timer .time .seconds")

const buttonPlay = document.querySelector("main .timer .controls .play")
const buttonPause = document.querySelector("main .timer .controls .pause")
const buttonSet = document.querySelector("main .timer .controls .set")
const buttonStop = document.querySelector("main .timer .controls .stop")
const buttonAdd = document.querySelector("main .timer .controls .add")
const buttonDecrease = document.querySelector("main .timer .controls .decrease")

const forestSoundButtonWrapper = document.querySelector(
  "main .soundButtons .wrapper.forest"
)
const rainSoundButtonWrapper = document.querySelector(
  "main .soundButtons .wrapper.rain"
)
const coffeShopSoundButtonWrapper = document.querySelector(
  "main .soundButtons .wrapper.coffeShop"
)
const fireplaceSoundButtonWrapper = document.querySelector(
  "main .soundButtons .wrapper.fireplace"
)

const forestSoundButton = document.querySelector(
  "main .soundButtons .wrapper.forest button"
)
const rainSoundButton = document.querySelector(
  "main .soundButtons .wrapper.rain button"
)
const coffeShopSoundButton = document.querySelector(
  "main .soundButtons .wrapper.coffeShop button"
)
const fireplaceSoundButton = document.querySelector(
  "main .soundButtons .wrapper.fireplace button"
)

const forestInputVolume = document.querySelector(
  "main .soundButtons .wrapper.forest input"
)
const rainInputVolume = document.querySelector(
  "main .soundButtons .wrapper.rain input"
)
const coffeShopInputVolume = document.querySelector(
  "main .soundButtons .wrapper.coffeShop input"
)
const fireplaceInputVolume = document.querySelector(
  "main .soundButtons .wrapper.fireplace input"
)

const soundButtonOn = document.querySelector("footer .sound-on")
const soundButtonOff = document.querySelector("footer .sound-off")

export {
  body,
  buttonLightTheme,
  buttonDarkTheme,
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonAdd,
  buttonDecrease,
  forestSoundButtonWrapper,
  rainSoundButtonWrapper,
  coffeShopSoundButtonWrapper,
  fireplaceSoundButtonWrapper,
  forestSoundButton,
  rainSoundButton,
  coffeShopSoundButton,
  fireplaceSoundButton,
  forestInputVolume,
  rainInputVolume,
  coffeShopInputVolume,
  fireplaceInputVolume,
  soundButtonOn,
  soundButtonOff,
}
