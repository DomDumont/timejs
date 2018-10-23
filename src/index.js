import timejs from './engine/timejs'
import RoomGame from './game/room_game'
const PIXI = require('pixi.js')
const catImage = require('./assets/cat.png')

PIXI.loader.add(catImage)
timejs.AddRoom(new RoomGame())
timejs.Init()

//  app.stage.addChild(gameScene)
//   app.stage.addChild(menuScene)
//  app.stage.addChild(pauseScene)
