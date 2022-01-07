import vector from "./vector.js";
import particle from "./particle.js";

export function fireWorks() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const particles = [];

  canvas.width = width;
  canvas.height = height;

  for (let i = 0; i < 100; i++) {
    let p = particle.create(
      width / 2,
      height,
      Math.random() * 8 + 5,
      -Math.PI / 2 + (Math.random() * 0.2 - 0.1),
      0.1,
    );
    p.radius = Math.random() * 10 + 2;
    particles.push(p);
  }

  update();

  function update() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      let p = particles[i];

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

      if (p.position.getY() - p.radius > height) {
        p.position.setX(width / 2);
        p.position.setY(height);
        p.velocity.setLength(Math.random() * 8 + 5);
        p.velocity.setAngle(-Math.PI / 2 + (Math.random() * 0.2 - 0.1));
      }
    }

    requestAnimationFrame(update);
  }

  // function removeDeadParticles() {
  //   for (let i = particles.length - 1; i >= 0; i--) {
  //     let p = particles[i];
  //     if (
  //       p.position.getX() - p.radius > width ||
  //       p.position.getY() - p.radius > height ||
  //       p.position.getX() + p.radius < 0 ||
  //       p.position.getY() + p.radius < 0
  //     ) {
  //       particles.splice(i, 1);
  //     }
  //   }
  // }
}
