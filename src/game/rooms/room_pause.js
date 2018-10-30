import timejs from '../../engine/timejs'
import { Room } from '../../engine/room'
import inputManager from '../../engine/input'
import utils from '../../engine/utils'
const PIXI = require('pixi.js')
export default class RoomPause extends Room {
  Init () {
    let msgResume = new PIXI.Text('Resume', utils.style1)

    msgResume.position.set(350, 200)
    msgResume.interactive = true
    msgResume.buttonMode = true

    // Pointers normalize touch and mouse
    msgResume.on('pointerdown', () => {
      timejs.RoomGoto('GameRoom')
      // pauseScene.visible = false
      // gameScene.visible = true
    })

    let msgQuit = new PIXI.Text('Quit', utils.style1)
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
  Update (delta) {
    if (inputManager.IsKeyPressed(inputManager.vk_escape)) {
      console.log('resume by esc key')
      timejs.RoomGoto('GameRoom')
      //    gameScene.visible = true
      //    pauseScene.visible = false
    }
  }
}
