import timejs from './engine/timejs'
import RoomGame from './game/Rooms/room_game'
import RoomMenu from './game/Rooms/room_menu'
import RoomPause from './game/Rooms/room_pause'
const PIXI = require('pixi.js')

const femaleBody = require('./assets/female-body.png')
const tileTerrain = require('./assets/spr_tile_terrain.png')

PIXI.loader.add(femaleBody)
PIXI.loader.add(tileTerrain)
timejs.AddRoom('GameRoom', new RoomGame())
timejs.AddRoom('MenuRoom', new RoomMenu())
timejs.AddRoom('PauseRoom', new RoomPause())
timejs.Init()
timejs.RoomGoto('GameRoom')
