import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  soundButtonOff,
  soundButtonOn,
} from "./elements.js"

export default function ({ controls, sound, timer }) {
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

  soundButtonOn.addEventListener("click", () => {
    soundButtonOn.classList.add("hide")
    soundButtonOff.classList.remove("hide")
    sound.bgAudio.pause()
  })

  soundButtonOff.addEventListener("click", () => {
    soundButtonOn.classList.remove("hide")
    soundButtonOff.classList.add("hide")
    sound.bgAudio.play()
  })
}
