const PIXI = require('pixi.js')

export class GameObject extends PIXI.Container {
  constructor (parent, jsonObject) {
    super()
    this.parent = parent
    this.jsonObject = jsonObject

    this.x = this.jsonObject.x
    this.y = this.jsonObject.y
    this.width = this.jsonObject.width
    this.height = this.jsonObject.height

    // this.pivot.x = this.width / 2
    // this.pivot.y = this.height / 2
  }
  /** This is a description of the Init function. */
  Init () {}
  /** This is a description of the Update function. */
  Update (delta) {}
}
