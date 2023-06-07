const events = require("events");
const event = new events.EventEmitter();

event.on("click", () => {
  console.log("click1");
  event.emit("click2");
});
event.on("click2", () => {
  console.log("click2");
  event.emit("click3");
});
event.on("click3", () => {
  console.log("click3");
});
event.emit("click");
