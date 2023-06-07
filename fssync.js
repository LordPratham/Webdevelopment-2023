const { log } = require("console");
const fs = require("fs");
// fs.readFile("./hello.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// console.log("done");

try {
  const data = fs.readFileSync("./hello.txt", "utf-8");
  console.log(data);
} catch (e) {
  console.log(e);
}
console.log("sync done");
