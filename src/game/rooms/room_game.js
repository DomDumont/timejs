import timejs from '../../engine/timejs'
import { Room } from '../../engine/room'
import inputManager from '../../engine/input'
import { TileMap } from '../../engine/tilemap'
import ObjectCollisions from '../objects/object_collisions'
import ObjectPlayer from '../objects/object_player'
import utils from '../../engine/utils'
const PIXI = require('pixi.js')

const map01 = require('../../assets/map01.json')

export default class RoomGame extends Room {
  Init () {
    this.message = new PIXI.Text('Hello Pixi!', utils.style1)
    // message.position.set(54, 96);
    this.addChild(this.message)

    let tileMap = new TileMap(map01, obj => {
      console.dir(obj)
      switch (obj.type) {
        case 'COLLISIONS':
          this.AddGAO(new ObjectCollisions(this, obj))
          break
        case 'PLAYER':
          this.AddGAO(new ObjectPlayer(this, obj))
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
