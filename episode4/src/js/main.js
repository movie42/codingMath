function drawCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 좌표 평면 중심 이동
  let centerX = width / 2;
  let centerY = height / 2;

  //circle
  let radius = 200;

  // ellipses
  let xRadius = 200;
  let yRadius = 500;

  let angle = 0;
  let speed = 0.01;

  //Lissagjous Curves
  let xAngle = 0;
  let yAngle = 0;
  let xSpeed = 0.1;
  let ySpeed = 0.131;

  let x;
  let y;
  render();

  function render() {
    ctx.clearRect(0, 0, width, height);
    x = centerX + Math.cos(xAngle) * xRadius;
    y = centerY + Math.sin(yAngle) * yRadius;

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fill();

    xAngle += xSpeed;
    yAngle += ySpeed;

    requestAnimationFrame(render);
  }
}

window.addEventListener("load", drawCanvas);
