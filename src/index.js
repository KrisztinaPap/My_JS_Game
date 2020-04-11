import Paddle from "./paddle";
import Ball from "./ball";
import InputHandler from "./input";

let canvas = document.getElementById("gameArea");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let lastTime = 0;

let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
let ball = new Ball(GAME_WIDTH, GAME_HEIGHT);

new InputHandler();

paddle.draw(ctx);
ball.draw(ctx);

function gameLoop(timestamp) {
  let dt = timestamp - lastTime;
  lastTime = timestamp;
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  paddle.update(dt);
  paddle.draw(ctx);
  ball.update();

  requestAnimationFrame(gameLoop);
}

gameLoop();
