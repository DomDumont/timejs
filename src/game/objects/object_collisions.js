import { GameObject } from '../../engine/gameobject'

export default class ObjectCollisions extends GameObject {
  Init () {
    this.graphics = new PIXI.Graphics()
    this.graphics.beginFill(0xff700b, 1)
    this.graphics.drawRect(
      this.jsonObject.x,
      this.jsonObject.y,
      this.jsonObject.width,
      this.jsonObject.height
    )
    this.graphics.endFill()

    this.addChild(this.graphics)
  }
}
