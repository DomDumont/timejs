import { GameObject } from '../../engine/gameobject'
import inputManager from '../../engine/input'

import ObjectCollisions from './object_collisions'

const PIXI = require('pixi.js')
const femaleBody = require('../../assets/female-body.png')

export default class ObjectPlayer extends GameObject {
  Init () {
    let texture = PIXI.loader.resources[femaleBody].texture
    let textureArray = []

    for (let i = 0; i < 6; i++) {
      let tempTexture = new PIXI.Texture(
        texture,
        new PIXI.Rectangle(i * 64, 9 * 64, 64, 64)
      )
      textureArray.push(tempTexture)
    }

    this.femaleBody = new PIXI.extras.AnimatedSprite(textureArray)
    // this.femaleBody.anchor.set(0.5)
    this.femaleBody.animationSpeed = 0.1
    this.femaleBody.play()

    this.addChild(this.femaleBody)

    // this.graphics = new PIXI.Graphics()
    // this.graphics.beginFill(0xff7070, 1)
    // this.graphics.drawRect(0, 0, this.jsonObject.width, this.jsonObject.height)
    // this.graphics.endFill()

    // this.addChild(this.graphics)

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

    if (this.moveX) {
      if (this.PlaceMeeting(this.x + this.moveX, this.y, ObjectCollisions)) {
        console.log('!!!! YESSSS')
        for (let i = 0; i < Math.abs(this.moveX); i++) {
          if (
            this.PlaceMeeting(
              this.x + Math.sign(this.moveX),
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
      if (this.PlaceMeeting(this.x, this.y + this.moveY, ObjectCollisions)) {
        for (let i = 0; i < Math.abs(this.moveY); i++) {
          if (
            this.PlaceMeeting(
              this.x,
              this.y + Math.sign(this.moveY),
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
