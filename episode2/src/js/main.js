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
    // 200은 x, y의 공간을 위해 곱하는 길이
    let x = angle * 200;
    let y = Math.sin(angle) * 200;

    ctx.fillRect(x, y, 5, 5);
  }
}

window.addEventListener("load", drawCanvas);
