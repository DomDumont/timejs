import timejs from './timejs'
import utils from './utils'
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

  PlaceMeeting (x, y, classNameToCheck) {
    let gaos = timejs.GetCurrentRoom().gaos

    let backupX = this.x
    let backupY = this.y

    this.x = x
    this.y = y

    let isThereSomethingUnder = false
    for (let i = 0; i < gaos.length; i++) {
      let element = gaos[i]
      if (classNameToCheck.name === element.constructor.name) {
        if (utils.hitTestRectangle(this, element) === true) {
          isThereSomethingUnder = true
        }
      }
    }

    this.x = backupX
    this.y = backupY

    return isThereSomethingUnder
  }
}
