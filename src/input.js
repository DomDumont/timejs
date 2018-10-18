var inputManager = {
  vk_left: 37,
  vk_up: 38,
  vk_right: 39,
  vk_down: 40
};

inputManager.Init = function() {
  inputManager.keyStates = new Array(256);
  inputManager.previousKeyStates = new Array(256);
  inputManager.realStates = new Array(256);
};

inputManager.Update = function() {
  inputManager.previousKeyStates = inputManager.keyStates.slice(0);
  inputManager.keyStates = inputManager.realStates.slice(0);
};

inputManager.IsKeyDown = function(keyCode) {
  return inputManager.keyStates[keyCode];
};

inputManager.downHandler = function(event) {
  var key = window.event ? event.keyCode : event.which;

  if (key == 18) event.preventDefault();
  inputManager.realStates[key] = true;
};

inputManager.upHandler = function(event) {
  var key = window.event ? event.keyCode : event.which;

  if (key == 18) event.preventDefault();
  inputManager.realStates[key] = false;
};

window.addEventListener(
  "keydown",
  inputManager.downHandler.bind(inputManager),
  false
);
window.addEventListener(
  "keyup",
  inputManager.upHandler.bind(inputManager),
  false
);

module.exports = inputManager;
