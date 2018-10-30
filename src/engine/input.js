var inputManager = {
  vk_escape: 27,
  vk_left: 37,
  vk_up: 38,
  vk_right: 39,
  vk_down: 40
}

inputManager.Init = function () {
  inputManager.keyStates = new Array(256)
  inputManager.previousKeyStates = new Array(256)
  inputManager.realStates = new Array(256)

  for (let i = 0; i < 256; i++) {
    inputManager.realStates[i] = false
    inputManager.keyStates[i] = false
    inputManager.previousKeyStates[i] = false
  }
}

inputManager.Update = function () {
  // console.log('key update ')
  inputManager.previousKeyStates = inputManager.keyStates.slice(0)
  inputManager.keyStates = inputManager.realStates.slice(0)
}

inputManager.IsKeyDown = function (keyCode) {
  return inputManager.keyStates[keyCode]
}

inputManager.IsKeyPressed = function (keyCode) {
  // console.log(
  //  inputManager.keyStates[keyCode] +
  //     ' ' +
  //     inputManager.previousKeyStates[keyCode]
  //  )
  let result =
    inputManager.keyStates[keyCode] === true &&
    inputManager.previousKeyStates[keyCode] === false
  return result
}

inputManager.downHandler = function (event) {
  var key = window.event ? event.keyCode : event.which
  // console.log('key = ' + key)
  event.preventDefault()
  inputManager.realStates[key] = true
}

inputManager.upHandler = function (event) {
  var key = window.event ? event.keyCode : event.which
  // console.log('key up = ' + key)
  event.preventDefault()
  inputManager.realStates[key] = false
}

window.addEventListener(
  'keydown',
  inputManager.downHandler.bind(inputManager),
  false
)
window.addEventListener(
  'keyup',
  inputManager.upHandler.bind(inputManager),
  false
)

module.exports = inputManager
