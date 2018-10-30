import { GameObject } from '../../engine/gameobject'
import inputManager from '../../engine/input'
import timejs from '../../engine/timejs'
import ObjectCollisions from './object_collisions'

const PIXI = require('pixi.js')
// const catImage = require('../../assets/cat.png')

export default class ObjectPlayer extends GameObject {
  Init () {
    // this.cat = new PIXI.Sprite(PIXI.loader.resources[catImage].texture)
    // this.addChild(this.cat)
    this.graphics = new PIXI.Graphics()
    this.graphics.beginFill(0xff7070, 1)
    this.graphics.drawRect(0, 0, this.jsonObject.width, this.jsonObject.height)
    this.graphics.endFill()

    this.addChild(this.graphics)

    this.moveX = 0
    this.moveY = 0
    this.speed = 4
  }

  Update (delta) {
    // console.log(this.x)
    // console.log(this.y)

    this.moveX = 0
    this.moveY = 0

    if (inputManager.IsKeyDown(inputManager.vk_left)) {
      this.moveX -= this.speed
    }
    if (inputManager.IsKeyDown(inputManager.vk_right)) {
      this.moveX += this.speed
    }
    if (inputManager.IsKeyDown(inputManager.vk_down)) {
      this.moveY += this.speed
    }
    if (inputManager.IsKeyDown(inputManager.vk_up)) {
      this.moveY -= this.speed
    }

    this.xx = this.x + this.width / 2
    this.yy = this.y + this.height / 2

    if (this.moveX) {
      if (timejs.PlaceMeeting(this.x + this.moveX, this.y, ObjectCollisions)) {
        console.log('!!!! YESSSS')
        for (let i = 0; i < Math.abs(this.moveX); i++) {
          if (
            timejs.PlaceMeeting(
              this.x + this.moveX,
              this.y,
              ObjectCollisions
            ) === false
          ) {
            this.x += Math.sign(this.moveX)
          }
        }
        this.moveX = 0
      }
    }

    if (this.moveY) {
      if (timejs.PlaceMeeting(this.x, this.y + this.moveY, ObjectCollisions)) {
        for (let i = 0; i < Math.abs(this.moveY); i++) {
          if (
            timejs.PlaceMeeting(
              this.x,
              this.y + this.moveY,
              ObjectCollisions
            ) === false
          ) {
            this.y += Math.sign(this.moveY)
          }
        }
        this.moveY = 0
      }
    }

    // Apply movement
    this.x += this.moveX
    this.y += this.moveY
  }
}
