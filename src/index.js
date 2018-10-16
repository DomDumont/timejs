const PIXI = require("pixi.js");
const catImage = require("./assets/cat.png");

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

//This `setup` function will run when the image has loaded
function setup() {
  //Create the cat sprite
  let cat = new PIXI.Sprite(PIXI.loader.resources[catImage].texture);

  //Add the cat to the stage
  app.stage.addChild(cat);
}
