function drawCanvas() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // 좌표 평면 중심 이동
  let centerY = height * 0.5;
  let centerX = width * 0.5;

  // 중심에서 얼마나 이동할지
  let offset = height * 0.4;

  // 속도
  let speed = 0.05;

  // 각
  let angle = 0;

  render();

  function render() {
    let y = centerY + Math.sin(angle) * offset;

    ctx.clearRect(0, 0, width, height);
    ctx.beginPath();
    ctx.arc(centerX, y, 50, 0, Math.PI * 2, false);
    ctx.fill();

    angle += speed;

    requestAnimationFrame(render);
  }

  // function Animation(centerX, centerY, offset, speed, angle) {
  //   function movingUpAndDown() {
  //     let y = centerY + Math.sin(angle) * offset;

  //     ctx.clearRect(0, 0, width, height);
  //     ctx.beginPath();
  //     ctx.arc(centerX, y, 50, 0, Math.PI * 2, false);
  //     ctx.fill();

  //     angle += speed;

  //     requestAnimationFrame(movingUpAndDown);
  //   }

  //   function movingSideBySide() {
  //     let x = centerX + Math.sin(angle) * offset;

  //     ctx.clearRect(0, 0, width, height);
  //     ctx.beginPath();
  //     ctx.arc(x, centerY, 50, 0, Math.PI * 2, false);
  //     ctx.fill();

  //     angle += speed;

  //     requestAnimationFrame(movingSideBySide);
  //   }

  //   return { movingUpAndDown, movingSideBySide };
  // }

  // const animation = new Animation(centerX, centerY, offset, speed, angle);
  // const animation2 = new Animation(centerX, centerY, offset, speed, angle);

  // animation.movingUpAndDown();

  // animation2.movingSideBySide();
}

window.addEventListener("load", drawCanvas);
