import { GameObject } from '../../engine/gameobject'
import inputManager from '../../engine/input'

const PIXI = require('pixi.js')
const catImage = require('../../assets/cat.png')

export default class ObjectPlayer extends GameObject {
  Init () {
    // this.cat = new PIXI.Sprite(PIXI.loader.resources[catImage].texture)
    // this.addChild(this.cat)
    this.graphics = new PIXI.Graphics()
    this.graphics.beginFill(0xff7070, 1)
    this.graphics.drawRect(
      this.jsonObject.x,
      this.jsonObject.y,
      this.jsonObject.width,
      this.jsonObject.height
    )
    this.graphics.endFill()

    this.addChild(this.graphics)
  }

  Update (delta) {
    if (inputManager.IsKeyDown(inputManager.vk_left)) {
      this.graphics.x -= 5
    }
    if (inputManager.IsKeyDown(inputManager.vk_right)) {
      this.graphics.x += 5
    }
    if (inputManager.IsKeyDown(inputManager.vk_down)) {
      this.graphics.y += 5
    }
    if (inputManager.IsKeyDown(inputManager.vk_up)) {
      this.graphics.y -= 5
    }
  }
}
