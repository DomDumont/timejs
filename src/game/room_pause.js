import timejs from '../engine/timejs'
import { Room } from '../engine/room'
const PIXI = require('pixi.js')
const inputManager = require('../engine/input')

export default class RoomPause extends Room {
  Init () {
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

    let msgResume = new PIXI.Text('Resume', style)
    msgResume.position.set(350, 200)

    msgResume.interactive = true
    msgResume.buttonMode = true

    // Pointers normalize touch and mouse
    msgResume.on('pointerdown', () => {
      timejs.RoomGoto('GameRoom')
      // pauseScene.visible = false
      // gameScene.visible = true
    })

    let msgQuit = new PIXI.Text('Quit', style)
    msgQuit.position.set(350, 300)

    msgQuit.interactive = true
    msgQuit.buttonMode = true

    // Pointers normalize touch and mouse
    msgQuit.on('pointerdown', () => {
      timejs.RoomGoto('MenuRoom')
      // pauseScene.visible = false
      // menuScene.visible = true
    })

    this.addChild(msgResume)
    this.addChild(msgQuit)
  }
  Update (deltas) {
    if (inputManager.IsKeyPressed(inputManager.vk_escape)) {
      console.log('resume by esc key')
      timejs.RoomGoto('GameRoom')
      //    gameScene.visible = true
      //    pauseScene.visible = false
    }
  }
}
