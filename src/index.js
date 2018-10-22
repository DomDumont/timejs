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
let menuScene;
let pauseScene;
let gameScene;

//This `setup` function will run when the image has loaded
function setup() {
  gameScene = new PIXI.Container();
  app.stage.addChild(gameScene);
  gameScene.visible = false;

  //Create the cat sprite
  cat = new PIXI.Sprite(PIXI.loader.resources[catImage].texture);

  //Add the cat to the stage
  gameScene.addChild(cat);

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
  gameScene.addChild(message);

  var sound = new Howl({
    src: [testMusic]
  });

  // saoulant sound.play();

  inputManager.Init();

  // scenes creation
  menuScene = new PIXI.Container();
  let msgPlay = new PIXI.Text("Play", style);
  msgPlay.position.set(350, 200);
  msgPlay.interactive = true;
  msgPlay.buttonMode = true;

  // Pointers normalize touch and mouse
  msgPlay.on("pointerdown", () => {
    menuScene.visible = false;
    gameScene.visible = true;
  });

  // Alternatively, use the mouse & touch events:
  // msgPlay.on('click', onClick); // mouse-only
  // msgPlay.on('tap', onClick); // touch-only

  menuScene.addChild(msgPlay);
  app.stage.addChild(menuScene);

  pauseScene = new PIXI.Container();

  let msgResume = new PIXI.Text("Resume", style);
  msgResume.position.set(350, 200);

  msgResume.interactive = true;
  msgResume.buttonMode = true;

  // Pointers normalize touch and mouse
  msgResume.on("pointerdown", () => {
    pauseScene.visible = false;
    gameScene.visible = true;
  });

  let msgQuit = new PIXI.Text("Quit", style);
  msgQuit.position.set(350, 300);

  msgQuit.interactive = true;
  msgQuit.buttonMode = true;

  // Pointers normalize touch and mouse
  msgQuit.on("pointerdown", () => {
    pauseScene.visible = false;
    menuScene.visible = true;
  });

  pauseScene.addChild(msgResume);
  pauseScene.addChild(msgQuit);
  pauseScene.visible = false;

  app.stage.addChild(pauseScene);

  testTiled();

  //Start the game loop
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  message.setText(Math.round(app.ticker.FPS));
  inputManager.Update();

  if (gameScene.visible === true) {
    if (inputManager.IsKeyPressed(inputManager.vk_escape)) {
      console.log("pause by esc key");
      gameScene.visible = false;
      pauseScene.visible = true;
      return;
    }

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
  }

  if (pauseScene.visible === true) {
    if (inputManager.IsKeyPressed(inputManager.vk_escape)) {
      console.log("resume by esc key");
      gameScene.visible = true;
      pauseScene.visible = false;
    }
  }
}

function testTiled() {
  console.log(testTiled);
  console.dir(map01);
  map01.layers.forEach(renderLayer);
}

function renderLayer(layer) {
  console.log("renderLayer " + layer.name);
  layer.data.forEach(function(tile_idx, i) {
    if (!tile_idx) {
      return;
    }
    let size = map01.tilewidth;
    let img_x,
      img_y,
      s_x,
      s_y,
      tile = map01.tilesets[0];
    tile_idx--;
    img_x = (tile_idx % (tile.imagewidth / size)) * size;
    img_y = ~~(tile_idx / (tile.imagewidth / size)) * size;
    s_x = (i % layer.width) * size;
    s_y = ~~(i / layer.width) * size;
  });
}
