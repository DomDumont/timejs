const { Howl, Howler } = require("howler");
const PIXI = require("pixi.js");
const catImage = require("./assets/cat.png");
const testMusic = require("./assets/test.mp3");

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
//This `setup` function will run when the image has loaded
function setup() {
  //Create the cat sprite
  cat = new PIXI.Sprite(PIXI.loader.resources[catImage].texture);

  //Add the cat to the stage
  app.stage.addChild(cat);

  var sound = new Howl({
    src: [testMusic]
  });

  sound.play();

  //Start the game loop
  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta) {
  //Move the cat 1 pixel
  if (cat.x < 600) cat.x += 1;

  //Optionally use the `delta` value
  //cat.x += 1 + delta;
}
