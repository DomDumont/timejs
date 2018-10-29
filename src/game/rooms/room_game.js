import timejs from '../../engine/timejs'
import { Room } from '../../engine/room'
import inputManager from '../../engine/input'
import { TileMap } from '../../engine/tilemap'
import ObjectCollisions from '../objects/object_collisions'
import ObjectPlayer from '../objects/object_player'
const PIXI = require('pixi.js')

const map01 = require('../../assets/map01.json')

export default class RoomGame extends Room {
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

    this.message = new PIXI.Text('Hello Pixi!', style)
    // message.position.set(54, 96);
    this.addChild(this.message)

    let tileMap = new TileMap(map01, obj => {
      console.dir(obj)
      switch (obj.type) {
        case 'COLLISIONS':
          this.gaos.push(new ObjectCollisions(this))
          break
        case 'PLAYER':
          this.gaos.push(new ObjectPlayer(this))
          break
      }
    })
    tileMap.Init()
    this.addChild(tileMap)
    super.Init()
  }

  Update (delta) {
    if (inputManager.IsKeyPressed(inputManager.vk_escape)) {
      console.log('pause by esc key')
      timejs.RoomGoto('PauseRoom')
    }
    super.Update(delta)
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
