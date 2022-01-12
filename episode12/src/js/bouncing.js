import particle from "./particle.js";

export function bouncing() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const p = particle.create(
    width / 2,
    height / 2,
    5,
    Math.random() * Math.PI * 2,
    0.1,
  );

  p.radius = 40;
  p.bounce = -0.9;

  update();

  function update() {
    ctx.clearRect(0, 0, width, height);

    p.update();

    ctx.beginPath();
    ctx.arc(
      p.position.getX(),
      p.position.getY(),
      p.radius,
      0,
      Math.PI * 2,
      false,
    ); 
    ctx.fill();

    if (p.position.getX() + p.radius > width) {
      p.position.setX(width - p.radius);
      p.velocity.setX(p.velocity.getX() * p.bounce);
    }
    if (p.position.getX() - p.radius < 0) {
      p.position.setX(p.radius);
      p.velocity.setX(p.velocity.getX() * p.bounce);
    }
    if (p.position.getY() + p.radius > height) {
      p.position.setY(height - p.radius);
      p.velocity.setY(p.velocity.getY() * p.bounce);
    }
    if (p.position.getY() - p.radius < 0) {
      p.position.setY(p.radius);
      p.velocity.setY(p.velocity.getY() * p.bounce);
    }
    requestAnimationFrame(update);
  }
}
