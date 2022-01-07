import vector from "./vector.js";

const particle = {
  positoin: null,
  velocity: null,

  create: function (x, y, speed, direction) {
    const obj = Object.create(this);
    obj.position = vector.create(x, y);
    obj.velocity = vector.create(0, 0);
    obj.velocity.setLength(speed);
    obj.velocity.setAngle(direction);
    return obj;
  },

  update: function () {
    this.position.addTo(this.velocity);
  },
};

export default particle;
