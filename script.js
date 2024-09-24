const text = 'Hello World!'
const helloWorld = document.getElementById('hello-world')
let index = 0

function typeText() {
  if (index < text.length) {
    helloWorld.innerHTML += text.charAt(index)
    index++
    setTimeout(typeText, 150)
  } else {
    // Wait for 2 seconds before clearing and restarting
    setTimeout(resetAndRestart, 2000)
  }
}

function resetAndRestart() {
  helloWorld.innerHTML = ''
  index = 0
  typeText()
}

window.onload = typeText
