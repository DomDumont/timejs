import timejs from '../../engine/timejs'
import { Room } from '../../engine/room'
const PIXI = require('pixi.js')
export default class RoomMenu extends Room {
  Init () {
    // scenes creation
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

    let msgPlay = new PIXI.Text('Play', style)
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
