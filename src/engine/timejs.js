const inputManager = require('./input')
const PIXI = require('pixi.js')

/** Class representing TimeJS itself */
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
}

const instance = new TimeJS()
// Object.freeze(instance)

export default instance
