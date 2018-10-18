const { Howl, Howler } = require("howler");
const PIXI = require("pixi.js");
const catImage = require("./assets/cat.png");
const testMusic = require("./assets/test.mp3");
const map01 = require("./assets/map01.json");
const inputManager = require("./input");

let app = new PIXI.Application({
  width: 800, // default: 800
  height: 600, // default: 600
  antialias: true, // default: false
  transparent: false, // default: false
  resolution: 1 // default: 1
});

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);

//load an image and run the `setup` function when it's done
PIXI.loader.add(catImage).load(setup);

let cat;
let message;

//This `setup` function will run when the image has loaded
function setup() {
  //Create the cat sprite
  cat = new PIXI.Sprite(PIXI.loader.resources[catImage].texture);

  //Add the cat to the stage
  app.stage.addChild(cat);

  let style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 24,
    fill: "white",
    stroke: "#ff3300",
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6
  });

  message = new PIXI.Text("Hello Pixi!", style);
  // message.position.set(54, 96);
  app.stage.addChild(message);

  var sound = new Howl({
    src: [testMusic]
  });

  sound.play();

  inputManager.Init();

  testTiled();

  //Start the game loop
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  message.setText(Math.round(app.ticker.FPS));
  inputManager.Update();

  if (inputManager.IsKeyDown(inputManager.vk_left)) {
    cat.x -= 5;
  }
  if (inputManager.IsKeyDown(inputManager.vk_right)) {
    cat.x += 5;
  }
  if (inputManager.IsKeyDown(inputManager.vk_down)) {
    cat.y += 5;
  }
  if (inputManager.IsKeyDown(inputManager.vk_up)) {
    cat.y -= 5;
  }

  //Optionally use the `delta` value
  //cat.x += 1 + delta;
}

function testTiled() {
  console.log(testTiled);
  console.dir(map01);
  map01.layers.forEach(renderLayer);
}

function renderLayer(layer) {
  console.log("renderLayer " + layer.name);
}
