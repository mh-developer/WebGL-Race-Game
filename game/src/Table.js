var Table = function () {
  this.position = {x: 0, y: 0, z: 0}
  this.scale = {x: 1, y: 1, z: 1}
  this.rotation = {x: 0, y: 0, z: 0}
  this.gameObject = null
}

Table.prototype = {
  create: function () {
    this.gameObject = new GameObject(QUAD_OBJ, 'Assets/Textures/grass.jpg')
    this.gameObject.scale = {x: 19.0, y: -1, z: 19.0}
    this.gameObject.rotation.x = 90
    this.initBuffers()
  },
  draw: function () {
    this.gameObject.draw()
  },
  initBuffers: function () {
    this.gameObject.initBuffers()
  }
}
