import createCanvas from "./utils/createCanvas";

const app = document.getElementById("app") as HTMLDivElement;
const context = createCanvas(app);
// const clientWidth = window.innerWidth;
const height = context.canvas.height;

context.translate(0, height / 2);
context.scale(1, -1);

for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
  let x = angle * 200;
  let y = Math.sin(angle) * 200;
  context.fillRect(x, y, 5, 5);
}
