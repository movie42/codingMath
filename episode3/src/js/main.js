class App {
  constructor({
    canvas,
    width,
    height,
    offset,
    speed,
    angle,
    baseAlpha,
    alphaOffset,
    baseRadius,
  }) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.centerY = this.width * 0.5;
    this.centerX = this.height * 0.5;
    this.offset = offset;
    this.speed = speed;
    this.angle = angle;
    this.baseAlpha = baseAlpha;
    this.alphaOffset = alphaOffset;
    this.baseRadius = baseRadius;
  }

  drawCanvas() {
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }
}

window.addEventListener("load", function () {
  const app = new App({
    canvas: document.getElementById("canvas"),
    width: window.innerWidth,
    height: window.innerHeight,
    offset: 0.6,
    speed: 500,
    angle: 0,
    baseAlpha: 100,
    alphaOffset: 50,
    baseRadius: 100,
  });

  app.drawCanvas();
});

// function drawCanvas() {
//   const canvas = document.getElementById("canvas");
//   const ctx = canvas.getContext("2d");
//   let width = window.innerWidth;
//   let height = window.innerHeight;
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;

//   // 이게 무슨 효용성이 있는지 모르겠다. 사실 지금은 하나 마나....
//   // this로 call(this, null)을 하면 maximum call error가 발생한다.
//   function Object({
//     centerY = 0,
//     centerX = 0,
//     offset = 0,
//     speed = 0,
//     angle = 0,
//     baseAlpha = 0,
//     alphaOffset = 0,
//     baseRadius = 0,
//   }) {
//     this.centerY = centerY;
//     this.centerX = centerX;
//     this.offset = offset;
//     this.speed = speed;
//     this.angle = angle;
//     this.baseAlpha = baseAlpha;
//     this.alphaOffset = alphaOffset;
//     this.baseRadius = baseRadius;

//     return this;
//   }

//   let object = new Object({
//     centerY: height * 0.5,
//     centerX: width * 0.5,
//     offset: height * 0.4,
//     speed: 0.05,
//     angle: 0,
//   });

//   let object2 = new Object({
//     centerY: height * 0.5,
//     centerX: width * 0.5,
//     baseAlpha: 0.5,
//     alphaOffset: 0.5,
//     baseRadius: 100,
//     offset: 50,
//     speed: 0.05,
//     angle: 0,
//   });

//   function upAndDownMovingBall() {
//     let y = this.centerY + Math.sin(this.angle) * this.offset;

//     ctx.clearRect(0, 0, width, height);
//     ctx.fillStyle = "black";
//     ctx.beginPath();
//     ctx.arc(this.centerX, y, 50, 0, Math.PI * 2, false);
//     ctx.fill();

//     this.angle += this.speed;

//     requestAnimationFrame(upAndDownMovingBall);
//   }

//   upAndDownMovingBall();

//   function sideBySideMovingBall() {
//     let x = object.centerX + Math.sin(object.angle) * object.offset;
//     let alpha =
//       object2.baseAlpha + Math.sin(object2.angle) * object2.alphaOffset * 3;
//     ctx.fillStyle = `rgba(255, 0,0,${alpha})`;
//     ctx.beginPath();
//     ctx.arc(x, object.centerY, 50, 0, Math.PI * 2, false);
//     ctx.fill();

//     object.angle += object.speed;

//     requestAnimationFrame(sideBySideMovingBall);
//   }

//   sideBySideMovingBall();

//   function sizeChangeMovingBall() {
//     let radius = object2.baseRadius + Math.sin(object2.angle) * object2.offset;
//     let alpha =
//       object2.baseAlpha + Math.sin(object2.angle) * object2.alphaOffset;

//     ctx.beginPath();
//     ctx.fillStyle = `rgba(0,0,0,${alpha})`;
//     ctx.arc(object2.centerX, object2.centerY, radius, 0, Math.PI * 2, false);
//     ctx.fill();

//     object2.angle += object2.speed;

//     requestAnimationFrame(sizeChangeMovingBall);
//   }

//   sizeChangeMovingBall();
// }

// window.addEventListener("load", drawCanvas);
