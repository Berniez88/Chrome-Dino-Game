import {
  getCustomProperty,
  incrementCustomProperty,
  setCustomProperty,
} from "./updateCustomProperty.js";

const SPEED = 0.05;
const groundElems = document.querySelectorAll("[data-ground]");

export function setupGround() {
  setCustomProperty(groundElems[0], "--left", 0);
  setCustomProperty(groundElems[1], "--left", 300);
}

export function updateGround(delta, speedScale) {
  groundElems.forEach((ground) => {
    // Increment our ground position and move it to the left everytime we call update
    incrementCustomProperty(ground, "--left", delta * speedScale * SPEED * -1);

    // is our ground off the screen since our -300 is indicating our right side of the ground moved off the screen so we reloop it
    if (getCustomProperty(ground, "--left") <= -300) {
      incrementCustomProperty(ground, "--left", 600);
    }
  });
}
