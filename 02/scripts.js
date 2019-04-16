const form = document.querySelector('form')
const switchTo25 = document.querySelector('.switch.is-left')
const switchTo5 = document.querySelector('.switch.is-right')
const switchToStats = document.querySelector('.stats')
const switchToTimer = document.querySelector('#timer')
const main = document.getElementById('timer-section')
const img = document.getElementById('timer-img')

let taskTime = 5000

switchTo25.onclick = function handleTimeSwitch() {
  if (switchTo25.classList.contains('is-active')) {
    return
  }
  switchTo25.classList.toggle('is-active')
  switchTo5.classList.toggle('is-active')
  taskTime = 5000
}

switchTo5.onclick = function handleTimeSwitch() {
  if (switchTo5.classList.contains('is-active')) {
    return
  }
  switchTo5.classList.toggle('is-active')
  switchTo25.classList.toggle('is-active')
  taskTime = 1000
}

form.onsubmit = function startTimer(e) {
  e.preventDefault()

  const input = e.target.querySelector('input[type=text]')

  setTimeout(function () {
    console.log(input.value)
  }, taskTime)
}

switchToStats.onclick = function mainPageSwitch() {

  main.style.display = "none"
  img.src = "img/stats-section.svg"
  switchToStats.style.borderBottom = "none"
  switchToTimer.style.borderBottom = "1px solid rgba(229, 100, 92, 0.5)"
}

switchToTimer.onclick = function statsPageSwitch() {
  main.style.display = "block"
  img.src = "img/timer-section.svg"
  switchToStats.style.borderBottom = "1px solid rgba(229, 100, 92, 0.5)"
  switchToTimer.style.borderBottom = "none"
}
