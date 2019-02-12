var Road = function () {
  this.gameObject = null // Game Object Up
}

Road.prototype = {
  create: function () {
    this.gameObject = new GameObject(ROAD_OBJ, "Assets/Textures/roadss.png")
    this.gameObject.scale = {x: 3, y: 1.4, z: 3}
    this.gameObject.position.y = -0.1

    this.gameObject.initBuffers()
  },
  draw: function () {
    this.gameObject.draw()
  }
}
