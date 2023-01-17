let socket;
let wss = "https://api.saffiullahfahim.me:6443";
const room = "openai";

socket = io(wss, {
  reconnectionDelayMax: 5000,
  pongInterval: 5000, // how often to ping/pong.
  pongTimeout: 10000,
  auth: {
    room,
  },
  // autoConnect:true
});

socket.on("connect", () => {
  const engine = socket.io.engine;
  engine.on("close", (reason) => {
    console.log(reason);
  });
});


if(window.location.href.indexOf("https://chat.openai.com") >= 0){
  setInterval(() => {
    socket.emit("wow", new Date())
  }, 2000);
} else{
  socket.on("wow", (data) => {
    console.log(data)
  })
}