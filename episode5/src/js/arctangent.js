function drawCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  let arrowX = width / 2;
  let arrowY = width / 2;
  let x;
  let y;
  let dx;
  let dy;
  let angle = 0;
  let radius = 200;

  let circleAngle = 0;
  let speed = 0.01;

  render();

  function render() {
    ctx.clearRect(0, 0, width, height);
    x = arrowX + Math.cos(circleAngle) * radius;
    y = arrowY + Math.sin(circleAngle) * radius;

    ctx.save();
    circleAngle += speed;
    ctx.translate(x, y);
    ctx.rotate(angle);

    ctx.beginPath();

    ctx.moveTo(20, 0);
    ctx.lineTo(-20, 0);
    ctx.moveTo(20, 0);
    ctx.lineTo(10, -10);
    ctx.moveTo(20, 0);
    ctx.lineTo(10, 10);
    ctx.stroke();

    ctx.restore();

    requestAnimationFrame(render);
  }

  window.addEventListener("mousemove", function (event) {
    dx = event.clientX - arrowX;
    dy = event.clientY - arrowY;

    angle = Math.atan2(dy, dx);
  });
}

window.addEventListener("load", drawCanvas);
