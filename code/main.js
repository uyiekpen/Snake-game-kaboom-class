import kaboom from "kaboom"

// initialize context
kaboom()

// load assets
loadSprite("background", "sprites/background.png")
loadSprite("fence-top", "sprites/fence-top.png");
loadSprite("fence-bottom", "sprites/fence-bottom.png");
loadSprite("fence-left", "sprites/fence-left.png");
loadSprite("fence-right", "sprites/fence-right.png");
loadSprite("post-top-left", "sprites/post-top-left.png");
loadSprite("post-top-right", "sprites/post-top-right.png");
loadSprite("post-bottom-left", "sprites/post-bottom-left.png");
loadSprite("post-bottom-right", "sprites/post-bottom-right.png");


layers([
  "background",
  "game"
], "game");

add([
  sprite("background"),
  layer("background")
])
// add a character to screen


const block_size = 20;


const map = addLevel([
  "1tttttttttttt2",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "l            r ",
  "3bbbbbbbbbbbb4",
], {
  width: block_size,
  height: block_size,
  pos: vec2(0, 0),
  "t": () => [
    sprite("fence-top"),
    area(),
    "wall"
  ],
  "b": () => [
    sprite("fence-bottom"),
    area(),
    "wall"
  ],
  "l": () => [
    sprite("fence-left"),
    area(),
    "wall"
  ],
  "r": () => [
    sprite("fence-right"),
    area(),
    "wall"
  ],
  "1": () => [
    sprite("post-top-left"),
    area(),
    "wall"
  ],
  "2": () => [
    sprite("post-top-right"),
    area(),
    "wall"
  ],
  "3": () => [
    sprite("post-bottom-left"),
    area(),
    "wall"
  ],
  "4": () => [
    sprite("post-bottom-right"),
    area(),
    "wall"
  ],
});


// add a kaboom on mouse click
onClick(() => {
  addKaboom(mousePos())
})

// burp on "b"
onKeyPress("b", burp)