let svgpath = require("svgpath");

let path = svgpath(
  "M 610.185 790.184 L 551.565 790.184 L 551.565 745.728 L 610.185 745.728 Z"
)
  .matrix([1, 0, 0, -1, 0, 792])
  .toString();

console.log(path);

let obj = {
  altKey: false,
  bubbles: true,
  charCode: 0,
  code: "Space",
  composed: true,
  ctrlKey: false,
  isTrusted: true,
  key: " ",
  keyCode: 32,
  shiftKey: false,
  type: "keyup",
  which: 32,
};

let event = new Event("keydown", obj);
document.dispatchEvent(event)
 