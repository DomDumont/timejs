import timejs from './engine/timejs'
import RoomGame from './game/room_game'
import RoomMenu from './game/room_menu'
import RoomPause from './game/room_pause'
const PIXI = require('pixi.js')
const catImage = require('./assets/cat.png')

PIXI.loader.add(catImage)
timejs.AddRoom('GameRoom', new RoomGame())
timejs.AddRoom('MenuRoom', new RoomMenu())
timejs.AddRoom('PauseRoom', new RoomPause())
timejs.Init()
timejs.RoomGoto('MenuRoom')

//  app.stage.addChild(gameScene)
//   app.stage.addChild(menuScene)
//  app.stage.addChild(pauseScene)
