function drawCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // nomal sin way
  ctx.translate(0, height / 2);
  ctx.scale(1, -1);

  for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
    // if angle 30
    let x = angle * 100;
    let y = Math.sin(angle) * 200;

    ctx.fillRect(x, y, 5, 5);
  }
}

window.addEventListener("load", drawCanvas);
