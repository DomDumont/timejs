const inputManager = require('./input')
const PIXI = require('pixi.js')

// const map01 = require('./assets/map01.json')

class TimeJS {
  constructor () {
    this.rooms = new Map()
    if (!TimeJS.instance) {
      this.app = new PIXI.Application({
        width: 800, // default: 800
        height: 600, // default: 600
        antialias: true, // default: false
        transparent: false, // default: false
        resolution: 1 // default: 1
      })

      // Add the canvas that Pixi automatically created for you to the HTML document
      document.body.appendChild(this.app.view)

      TimeJS.instance = this
    }

    this.OnLoadedDone = this.OnLoadedDone.bind(this)
    return TimeJS.instance
  }

  Init () {
    // load an image and run the `setup` function when it's done
    PIXI.loader.load(this.OnLoadedDone)

    inputManager.Init()
  }
  getVersion () {
    return 'timejs version 0.01'
  }

  OnLoadedDone () {
    // Start the game loop
    console.log('OnLoadedDone')
    for (let [key, val] of this.rooms.entries()) {
      console.debug(key)
      val.Init()
    }

    this.app.ticker.add(delta => this.Loop(delta))
  }

  AddRoom (roomKey, roomToAdd) {
    this.app.stage.addChild(roomToAdd)
    this.rooms.set(roomKey, roomToAdd)
  }
  Loop (delta) {
    // message.setText(Math.round(app.ticker.FPS))
    inputManager.Update()
    for (let [key, val] of this.rooms.entries()) {
      console.debug(key)
      val.Loop(delta)
    }
  }
}

const instance = new TimeJS()
Object.freeze(instance)

export default instance
