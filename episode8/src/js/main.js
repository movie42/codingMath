import vector from "./vector.js";
import particle from "./particle.js";

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const particles = [];
  const numParticles = 100;

  for (let i = 0; i < numParticles; i++) {
    particles.push(
      particle.create(
        width / 2,
        height / 2,
        Math.random() * 4 + 1,
        Math.random() * Math.PI * 2,
      ),
    );
  }

  canvas.width = width;
  canvas.height = height;

  const velocity = vector.create(0, 0);
  velocity.setLength(3);
  velocity.setAngle(Math.PI / 6);

  update();

  function update() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < numParticles; i++) {
      let p = particles[i];
      p.update();

      ctx.beginPath();
      ctx.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
      ctx.fill();
    }

    requestAnimationFrame(update);
  }
}

window.addEventListener("load", draw);
