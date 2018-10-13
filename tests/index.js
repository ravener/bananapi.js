/* eslint-disable no-console */
const BananAPI = require("..");
const readline = require("readline");
const fs = require("fs").promises;
const assert = require("assert");

function prompt(msg) {

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(msg, (answer) => {
      rl.close();
      if(["yes", "y", "1"].includes(answer.toLowerCase())) return resolve(true);
      return resolve(false);
    });
  });
}

const api = new BananAPI.Client({ token: process.env.TOKEN });

(async() => {

  console.log("Pinging API...");
  const time = await api.ping();
  console.log(`Pong! ${time} ms`);
  console.log();
  console.log("Testing Text endpoints with input: Hello, World!");

  const [jsify, reverse, hash, eball] = await Promise.all([
    api.jsify("Hello, World!"),
    api.reverse("Hello, World!"),
    api.hash("Hello, World!"),
    api.eightball("Hello, World!")
  ]);

  assert.equal(eball instanceof BananAPI.Eightball, true);

  console.log([
    `JSify: ${jsify}`,
    `Reverse: ${reverse}`,
    `Hash: ${hash}`,
    `8ball: ${eball.response}`
  ].join("\n"));

  console.log();

  const bool = await prompt("Do you want to Test the image endpoints? this will write out the results into an image file in current directory: [Y/N] > ");
  if(!bool) {
    console.log("Skipping image tests");
    console.log("Tests passed! exiting.");
    process.exit();
  }

  console.log("Testing image endpoints with input: hello");
  const buffers = await Promise.all([
    api.trumptweet("hello"),
    api.disabled("hello"),
    api.abandon("hello"),
    api.alert("hello"),
    api.legends("hello"),
    api.sleeptight("hello"),
    api.humansgood("hello")
  ]);
  let counter = 0;
  for(const buffer of buffers) {
    counter++;
    await fs.writeFile(`./test${counter}.png`, buffer);
    console.log(`Wrote ./test${counter}.png`);
  }
  console.log("All tests done, if no uncaught errors was thrown everything is fine");

})();

