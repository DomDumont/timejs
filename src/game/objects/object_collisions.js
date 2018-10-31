import timejs from '../../engine/timejs'
import { GameObject } from '../../engine/gameobject'
const PIXI = require('pixi.js')

export default class ObjectCollisions extends GameObject {
  Init () {
    this.graphics = new PIXI.Graphics()
    this.graphics.beginFill(0xff700b, 1)
    this.graphics.drawRect(0, 0, this.jsonObject.width, this.jsonObject.height)
    this.graphics.endFill()
    this.graphics.parentGroup = timejs.group1
    this.addChild(this.graphics)
  }
}
