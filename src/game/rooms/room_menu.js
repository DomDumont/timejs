import timejs from '../../engine/timejs'
import { Room } from '../../engine/room'
import utils from '../../engine/utils'
const PIXI = require('pixi.js')

export default class RoomMenu extends Room {
  Init () {
    // scenes creation

    let msgPlay = new PIXI.Text('Play', utils.style1)
    msgPlay.position.set(350, 200)
    msgPlay.interactive = true
    msgPlay.buttonMode = true

    // Pointers normalize touch and mouse
    msgPlay.on('pointerdown', () => {
      timejs.RoomGoto('GameRoom')
    })

    this.addChild(msgPlay)
  }

  Update (delta) {}
}
