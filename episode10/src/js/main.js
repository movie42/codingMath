import vector from "./vector.js";
import particle from "./particle.js";

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const ship = particle.create(width / 2, height / 2, 0, 0);
  const thrust = vector.create(0, 0);

  let angle = 0;
  let turningLeft = false;
  let turningRight = false;
  let thrusting = false;

  canvas.width = width;
  canvas.height = height;

  update();

  document.body.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowUp":
        thrusting = true;
        break;
      case "ArrowLeft":
        turningLeft = true;
        break;
      case "ArrowRight":
        turningRight = true;
        break;
      default:
        break;
    }
  });

  document.body.addEventListener("keyup", function (event) {
    switch (event.key) {
      case "ArrowUp":
        thrusting = false;
        break;
      case "ArrowLeft":
        turningLeft = false;
        break;
      case "ArrowRight":
        turningRight = false;
        break;
      default:
        break;
    }
  });

  function update() {
    ctx.clearRect(0, 0, width, height);

    if (turningLeft) {
      angle -= 0.05;
    }

    if (turningRight) {
      angle += 0.05;
    }

    thrust.setAngle(angle);
    if (thrusting) {
      thrust.setLength(0.1);
    } else {
      thrust.setLength(0);
    }

    ship.accelerate(thrust);
    ship.update();
    ctx.save();
    ctx.translate(ship.position.getX(), ship.position.getY());
    ctx.rotate(angle);

    ctx.beginPath();
    ctx.moveTo(10, 0);
    ctx.lineTo(-10, -7);
    ctx.lineTo(-10, 7);
    ctx.lineTo(10, 0);
    if (thrusting) {
      ctx.moveTo(-10, 0);
      ctx.lineTo(-18, 0);
    }
    ctx.stroke();

    ctx.restore();

    if (ship.position.getX() > width) {
      ship.position.setX(0);
    }
    if (ship.position.getY() > height) {
      ship.position.setY(0);
    }
    if (ship.position.getX() < 0) {
      ship.position.setX(width);
    }
    if (ship.position.getY() < 0) {
      ship.position.setY(height);
    }

    requestAnimationFrame(update);
  }
}

window.addEventListener("load", draw);
