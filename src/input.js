export default class Inputhandler {
  constructor() {
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case 37:
          console.log("left");
          break;
        case 39:
          console.log("right");
          break;
        default:
          console.log("default case");
          break;
      }
    });
  }
}
