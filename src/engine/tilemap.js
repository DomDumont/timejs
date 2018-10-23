/*
function testTiled () {
  console.log(testTiled)
  console.dir(map01)
  map01.layers.forEach(renderLayer)
}

function renderLayer (layer) {
  console.log('renderLayer ' + layer.name)
  layer.data.forEach(function (tileIndex, i) {
    if (!tileIndex) {
      return
    }
    let size = map01.tilewidth
    let imageX

    let imageY

    let sourceX

    let sourceY

    let tile = map01.tilesets[0]
    tileIndex--
    imageX = (tileIndex % (tile.imagewidth / size)) * size
    imageY = ~~(tileIndex / (tile.imagewidth / size)) * size
    sourceX = (i % layer.width) * size
    sourceY = ~~(i / layer.width) * size
  })
}

 */
