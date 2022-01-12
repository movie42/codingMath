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
  let angle = 0;
  let speed = 0.01;

  let numObjects = 20;
  let slice = (Math.PI * 2) / numObjects;
  let x;
  let y;

  for (let i = 0; i < numObjects; i++) {
    angle = i * slice;

    x = centerX + Math.cos(angle) * radius;
    y = centerY + Math.sin(angle) * radius;

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, false);
    ctx.fill();
  }
}

window.addEventListener("load", drawCanvas);
