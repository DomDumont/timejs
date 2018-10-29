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
    this.graphics = new PIXI.Graphics()

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

    let message = new PIXI.Text(this.jsonObject.name, style)
    message.position.set(200, 200)
    this.addChild(message)

    if (this.jsonObject.objects !== undefined) {
      console.log('this is an object layer')
      this.jsonObject.objects.forEach(tempObject => {
        this.loadCallback(tempObject)
        this.graphics.beginFill(0xff700b, 1)
        this.graphics.drawRect(
          tempObject.x,
          tempObject.y,
          tempObject.width,
          tempObject.height
        )
        this.addChild(this.graphics)
        this.graphics.endFill()
      })
    }

    this.addChild(this.graphics)
  }
}
