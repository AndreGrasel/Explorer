export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  sound,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let minutesOfCount = minutes
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function reset() {
    minutesOfCount = minutes
    seconds = 0
    updateDisplay(minutes, seconds)
    clearTimeout(timerTimeOut)
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
    minutesOfCount = minutes
  }

  function countdown() {
    timerTimeOut = setTimeout(() => {
      let isFinished = minutesOfCount <= 0 && seconds <= 0

      if (isFinished) {
        resetControls()
        updateDisplay(minutes, 0)
        sound.timeEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutesOfCount
      }

      updateDisplay(minutesOfCount, --seconds)

      countdown()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeOut)
  }

  function add() {
    minutes += 5
    resetControls()
    reset()
  }

  function decrease() {
    minutes >= 5 ? (minutes -= 5) : (minutes = 0)
    resetControls()
    reset()
  }

  return {
    updateDisplay,
    reset,
    updateMinutes,
    countdown,
    hold,
    add,
    decrease,
  }
}
