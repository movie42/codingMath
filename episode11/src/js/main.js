import vector from "./vector.js";
import particle from "./particle.js";

function draw() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const width = window.innerWidth;
  const height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  const sun = particle.create(width / 2, height / 2, 0, 0);
  const planet = particle.create(width / 2 + 200, height / 2, 10, -Math.PI / 2);

  sun.mass = 20000;

  update();

  function update() {
    ctx.clearRect(0, 0, width, height);

    planet.gravitateTo(sun);
    planet.update();

    ctx.beginPath();
    ctx.fillStyle = "#ffff00";
    ctx.arc(
      sun.position.getX(),
      sun.position.getY(),
      20,
      0,
      Math.PI * 2,
      false,
    );
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#0000ff";
    ctx.arc(
      planet.position.getX(),
      planet.position.getY(),
      5,
      0,
      Math.PI * 2,
      false,
    );
    ctx.fill();

    requestAnimationFrame(update);
  }
}

window.addEventListener("load", draw);
