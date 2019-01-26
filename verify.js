const sign = require("./sign.json");

sign.forEach(val => {
  if (val.title === undefined) {
    console.error(val);
    process.exit(1);
  }
  if (val.level === undefined) {
    console.error(val);
    process.exit(1);
  }
  if (val.content === undefined) {
    console.error(val);
    process.exit(1);
  }
});
