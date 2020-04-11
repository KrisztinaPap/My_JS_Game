export default class Ball {
  constructor(GAME_WIDTH, GAME_HEIGHT) {
    this.radius = 12;
    this.position = {
      x: 0 + this.radius,
      y: 0 + this.radius
    };
  }
  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red";
    ctx.fill();
  }
  update() {}
}
