class Circle {
  constructor(radius) {
    this.radius = radius
    this._pi = Math.PI
  }

  get pi() {
    return this._pi
  }

  get diameter() {
    return this.radius * 2
  }

  get circumference() {
    return this.pi * this.diameter
  }

  get area() {
    return this.pi * this.radius ** 2
  }

  set diameter(diam) {
    this.radius = diam / 2
  }

  set circumference(circ) {
    this.radius = circ / (this.pi * 2)
  }

  set area(area) {
    this.radius = Math.sqrt(area / this.pi)
  }
}
