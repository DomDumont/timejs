const PIXI = require('pixi.js')

export class GameObject extends PIXI.Container {
  constructor (parent, jsonObject) {
    super()
    this.parent = parent
    this.jsonObject = jsonObject
  }
  /** This is a description of the Init function. */
  Init () {}
  /** This is a description of the Update function. */
  Update (delta) {}
}
