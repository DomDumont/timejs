import utils from '../engine/utils'
const PIXI = require('pixi.js')
/** This is a description of the TileLayer
 */
export class TileLayer extends PIXI.Container {
  constructor (jsonObject, loadCallback) {
    super()
    this.jsonObject = jsonObject
    this.loadCallback = loadCallback
  }
  Init () {
    let message = new PIXI.Text(this.jsonObject.name, utils.style1)
    // message.position.set(200, 200)
    // this.addChild(message)

    if (this.jsonObject.objects !== undefined) {
      console.log('this is an object layer')
      this.jsonObject.objects.forEach(tempObject => {
        this.loadCallback(tempObject)
      })
    }
  }
}
