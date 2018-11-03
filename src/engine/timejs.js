import inputManager from './input'
// import utils from '../engine/utils'
const PIXI = require('pixi.js')
require('./pixi-layers')

/** Class representing TimeJS itself */
class TimeJS {
  constructor () {
    this.rooms = new Map()
    if (!TimeJS.instance) {
      this.app = new PIXI.Application({
        width: 800, // default: 800
        height: 600, // default: 600
        antialias: false, // default: false
        transparent: false, // default: false
        resolution: 1 // default: 1
      })

      PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST

      this.app.stage = new PIXI.display.Stage()
      this.app.stage.group.enableSort = true
      // this.app.stage.position.set(700,100)
      // this.app.stage.scale.set(2,2)
      this.group0 = new PIXI.display.Group(0, false)
      this.group1 = new PIXI.display.Group(1, false)
      this.app.stage.addChild(new PIXI.display.Layer(this.group0))
      this.app.stage.addChild(new PIXI.display.Layer(this.group1))

      // Add the canvas that Pixi automatically created for you to the HTML document
      document.body.appendChild(this.app.view)

      this.currentRoomKey = ''
      this.nextRoomKey = ''
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

    this.app.ticker.add(delta => this.Update(delta))
  }

  /**
   * Get the x value.
   * @param {string} roomKey - The Room name
   */
  AddRoom (roomKey, roomToAdd) {
    this.app.stage.addChild(roomToAdd)
    this.rooms.set(roomKey, roomToAdd)
    this.rooms.get(roomKey).visible = false
  }

  /**
   * Goto to a specific room
   * @param {string} roomKey - The Room name
   */
  RoomGoto (roomKey) {
    this.nextRoomKey = roomKey
  }

  CheckRoomTransition () {
    if (this.currentRoomKey !== this.nextRoomKey) {
      this.currentRoomKey = this.nextRoomKey
      for (let [, val] of this.rooms.entries()) {
        val.visible = false
      }
      this.rooms.get(this.currentRoomKey).visible = true
    }
  }
  Update (delta) {
    // message.setText(Math.round(app.ticker.FPS))
    inputManager.Update()
    this.CheckRoomTransition()
    for (let [key, val] of this.rooms.entries()) {
      // TODO change this
      if (key === this.currentRoomKey) {
        val.Update(delta)
      }
    }
  }

  GetCurrentRoom () {
    return this.rooms.get(this.currentRoomKey)
  }
}

const instance = new TimeJS()
// Object.freeze(instance)

export default instance
