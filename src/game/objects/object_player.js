import { GameObject } from '../../engine/gameobject'
import inputManager from '../../engine/input'

const PIXI = require('pixi.js')
const catImage = require('../../assets/cat.png')

export default class ObjectPlayer extends GameObject {
  Init () {
    this.cat = new PIXI.Sprite(PIXI.loader.resources[catImage].texture)
    this.addChild(this.cat)
  }

  Update (delta) {
    if (inputManager.IsKeyDown(inputManager.vk_left)) {
      this.cat.x -= 5
    }
    if (inputManager.IsKeyDown(inputManager.vk_right)) {
      this.cat.x += 5
    }
    if (inputManager.IsKeyDown(inputManager.vk_down)) {
      this.cat.y += 5
    }
    if (inputManager.IsKeyDown(inputManager.vk_up)) {
      this.cat.y -= 5
    }
  }
}
