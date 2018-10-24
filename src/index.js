import timejs from './engine/timejs'
import RoomGame from './game/room_game'
import RoomMenu from './game/room_menu'
const PIXI = require('pixi.js')
const catImage = require('./assets/cat.png')

PIXI.loader.add(catImage)
timejs.AddRoom('GameRoom', new RoomGame())
timejs.AddRoom('MenuRoom', new RoomMenu())
timejs.Init()
timejs.RoomGoto('MenuRoom')

//  app.stage.addChild(gameScene)
//   app.stage.addChild(menuScene)
//  app.stage.addChild(pauseScene)
