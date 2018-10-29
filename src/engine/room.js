const PIXI = require('pixi.js')
/** This is a description of the Room
 * @tutorial room-tutorial
 */
export class Room extends PIXI.Container {
  constructor () {
    super()
    this.gaos = []
  }
  /** This is a description of the Init function. */
  Init () {
    this.gaos.forEach(element => {
      element.Init()
    })
  }
  /** This is a description of the Update function. */
  Update (delta) {
    this.gaos.forEach(element => {
      element.Update(delta)
    })
  }
}
