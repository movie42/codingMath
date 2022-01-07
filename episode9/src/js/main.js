import { fireWorks } from "./fireWorks.js";
// import vector from "./vector.js";
// import particle from "./particle.js";

// function draw() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//   const width = window.innerWidth;
//   const height = window.innerHeight;
//   const p = particle.create(100, height, 10, -Math.PI / 2);
//   const accel = vector.create(0.1, 0.1);

//   canvas.width = width;
//   canvas.height = height;

//   update();

//   function update() {
//     ctx.clearRect(0, 0, width, height);

//     p.accelerate(accel);

//     p.update();

//     ctx.beginPath();
//     ctx.arc(p.position.getX(), p.position.getY(), 10, 0, Math.PI * 2, false);
//     ctx.fill();

//     requestAnimationFrame(update);
//   }
// }

// window.addEventListener("load", draw);

window.addEventListener("load", fireWorks);
