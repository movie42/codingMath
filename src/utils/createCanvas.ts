const createCanvas = (element: HTMLElement): CanvasRenderingContext2D => {
  const canvas = document.createElement("canvas");
  const context2D = canvas.getContext("2d")!;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  element.append(canvas);
  return context2D;
};

export default createCanvas;
