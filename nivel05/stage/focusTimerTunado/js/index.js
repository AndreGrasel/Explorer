import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
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
} from "./elements.js"

const controls = Controls({
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
})

const sound = Sound({
  forestSoundButtonWrapper,
  rainSoundButtonWrapper,
  coffeShopSoundButtonWrapper,
  fireplaceSoundButtonWrapper,
  forestInputVolume,
  rainInputVolume,
  coffeShopInputVolume,
  fireplaceInputVolume,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
  sound,
  controls,
})

Events({
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
  soundButtonOn,
  soundButtonOff,
})
