import { bouncing } from "./bouncing.js";
// import { fireWorks } from "./fireWorks.js";
// import vector from "./vector.js";
// import particle from "./particle.js";

// function draw() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//   const width = window.innerWidth;
//   const height = window.innerHeight;

//   canvas.width = width;
//   canvas.height = height;

//   const p = particle.create(
//     width / 2,
//     height / 2,
//     3,
//     Math.random() * Math.PI * 2,
//   );

//   p.radius = 50;

//   update();

//   function update() {
//     ctx.clearRect(0, 0, width, height);

//     p.update();

//     ctx.beginPath();
//     ctx.arc(
//       p.position.getX(),
//       p.position.getY(),
//       p.radius,
//       0,
//       Math.PI * 2,
//       false,
//     );
//     ctx.fill();

//     if (p.position.getX() - p.radius > width) {
//       p.position.setX(-p.radius);
//     }
//     if (p.position.getY() - p.radius > height) {
//       p.position.setY(-p.radius);
//     }
//     if (p.position.getX() + p.radius < 0) {
//       p.position.setY(width + p.radius);
//     }
//     if (p.position.getY() + p.radius < 0) {
//       p.position.setY(height + p.radius);
//     }

//     requestAnimationFrame(update);
//   }
// }

// window.addEventListener("load", draw);

// window.addEventListener("load", fireWorks);

window.addEventListener("load", bouncing);
