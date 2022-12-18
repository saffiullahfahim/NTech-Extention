const { AwesomeQR } = require("awesome-qr");
const fs = require("fs");

// ...

const background = fs.readFileSync("./assets/images/icon128.png");
(async () => {
const buffer = await new AwesomeQR({
  text: "AwesomeQR by Makito - Awesome, right now.",
  size: 500,
  backgroundImage: background,
  // margin: number,
  // correctLevel: number,
  // maskPattern: 010,
  version: 10,
  // components: ComponentOptions,
  // colorDark: "#ff0000",
  // colorLight: "#000000",
  // autoColor: false,
  // backgroundDimming: string,
  // gifBackground: ArrayBuffer,
  // whiteMargin: boolean,
  // logoImage: background,
  // logoScale: 0.7,
  // logoMargin: 1,
  // logoCornerRadius: number,
  // dotScale: 0.4,// DEPRECATED!!
}).draw();

fs.writeFileSync("qrcode.png", buffer);

})()