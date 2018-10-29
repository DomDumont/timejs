import timejs from '../engine/timejs'
import { Room } from '../engine/room'
import inputManager from '../engine/input'
const PIXI = require('pixi.js')
const catImage = require('../assets/cat.png')

const map01 = require('../assets/map01.json')

export default class RoomGame extends Room {
  Init () {
    this.cat = new PIXI.Sprite(PIXI.loader.resources[catImage].texture)
    this.addChild(this.cat)

    let style = new PIXI.TextStyle({
      fontFamily: 'Arial',
      fontSize: 24,
      fill: 'white',
      stroke: '#ff3300',
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6
    })

    this.message = new PIXI.Text('Hello Pixi!', style)
    // message.position.set(54, 96);
    this.addChild(this.message)
  }

  Update (delta) {
    if (inputManager.IsKeyPressed(inputManager.vk_escape)) {
      console.log('pause by esc key')
      timejs.RoomGoto('PauseRoom')
      return
    }

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

// const { Howl, Howler } = require('howler')
// const testMusic = require('./assets/test.mp3')
/*
  var sound = new Howl({
    src: [testMusic]
  })

  // saoulant sound.play();
  */
