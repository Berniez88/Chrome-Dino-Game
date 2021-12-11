import { updateGround, setupGround } from "./ground.js";
const WORLD_WIDTH = 100;
const WORLD_HEIGHT = 30;

const worldElement = document.querySelector("[data-world]");

setPixelToWorldScale();

// everytime our pixel size changes we want to reupdate our world accordingly
window.addEventListener("resize", setPixelToWorldScale);

setupGround();

let lastTime;
function update(time) {
  if (lastTime == null) {
    lastTime = time;
    window.requestAnimationFrame(update);
    return;
  }
  const delta = time - lastTime;

  updateGround(delta);
  lastTime = time;
  window.requestAnimationFrame(update);
}
// this will call our update function when the content on our screen changes
window.requestAnimationFrame(update);

function setPixelToWorldScale() {
  let worldToPixelScale;
  // if our window is wider than our world scale
  if (window.innerWidth / window.innerHeight < WORLD_WIDTH / WORLD_HEIGHT) {
    // Then we pixel scale based on our width
    worldToPixelScale = window.innerWidth / WORLD_WIDTH;
  } else {
    worldToPixelScale = window.innerHeight / WORLD_HEIGHT;
  }
  worldElement.style.width = `${WORLD_WIDTH * worldToPixelScale}px`;
  worldElement.style.height = `${WORLD_HEIGHT * worldToPixelScale}px`;
}
