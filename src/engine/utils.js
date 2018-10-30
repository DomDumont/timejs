const PIXI = require('pixi.js')
var utils = {}

utils.pointInRectangle = function (x, y, r1) {
  if (x >= r1.x && x <= r1.x + r1.width && y >= r1.y && y <= r1.y + r1.height) {
    return true
  } else {
    return false
  }
}
utils.hitTestRectangle = function (r1, r2) {
  // Define the variables we'll need to calculate
  let hit, combinedHalfWidths, combinedHalfHeights, vx, vy

  // hit will determine whether there's a collision
  hit = false

  // Find the center points of each sprite
  r1.centerX = r1.x + r1.width / 2
  r1.centerY = r1.y + r1.height / 2
  r2.centerX = r2.x + r2.width / 2
  r2.centerY = r2.y + r2.height / 2

  // Find the half-widths and half-heights of each sprite
  r1.halfWidth = r1.width / 2
  r1.halfHeight = r1.height / 2
  r2.halfWidth = r2.width / 2
  r2.halfHeight = r2.height / 2

  // Calculate the distance vector between the sprites
  vx = r1.centerX - r2.centerX
  vy = r1.centerY - r2.centerY

  // Figure out the combined half-widths and half-heights
  combinedHalfWidths = r1.halfWidth + r2.halfWidth
  combinedHalfHeights = r1.halfHeight + r2.halfHeight

  // Check for a collision on the x axis
  if (Math.abs(vx) < combinedHalfWidths) {
    // A collision might be occurring. Check for a collision on the y axis
    if (Math.abs(vy) < combinedHalfHeights) {
      // There's definitely a collision happening
      hit = true
    } else {
      // There's no collision on the y axis
      hit = false
    }
  } else {
    // There's no collision on the x axis
    hit = false
  }

  // `hit` will be either `true` or `false`
  return hit
}

utils.style1 = new PIXI.TextStyle({
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

module.exports = utils
