# BananAPI.js
[![install size](https://packagephobia.now.sh/badge?p=bananapi)](https://packagephobia.now.sh/result?p=bananapi)
[![npm](https://img.shields.io/npm/v/bananapi.svg)](https://npmjs.com/package/bananapi)

A wrapper made for BananAPI ([https://bananapi.ml](https://bananapi.ml)), which is a fun API based on image manipulation.

## Install
```sh
npm install bananapi
```

## API Key
You need a key to use BananAPI. We use [Discord](https://discordapp.com) to manage API keys, so to apply, you need to join our Discord server by clicking the link: [https://discord.gg/3Nxb7yZ](https://discord.gg/3Nxb7yZ). Once you joined, run the command `b.apply` by sending it in chat. The bot will DM you and you will be instructed along the application process.

## Usage
```sh
const BananAPI = require("bananapi");
const fs = require("fs").promises;
const api = new BananAPI.Client({ token: "Your Token Goes here" });

(async() => {

  // Ping API for reponse time
  const ping = await api.ping();
  console.log(`Pong! ${ping} ms`);

  const reversed = await api.reverse("Hello, World!");
  console.log(reversed);
  const eball = await api.eightball("Some question?");
  console.log(`8ball: ${eball.response}, positive: ${eball.isPositive}`);

  // Image endpoints
  const image = await api.trumptweet("Hello");
  await fs.writeFile("./image.png", image);
});
```

Discord.js example (Sending attachments)

```js
// Note we required both but you need just one depending on your version
// v11.x.x stable is Attachment
// v12.0.0 dev is MessageAttachment
const { Attachment, MessageAttachment } = require("discord.js");

const image = await api.disabled("something");
message.channel.send(new MessageAttachment(image, "file.png"));
```

## TypeScript
TypeScript typings get installed by default. You can use it straight with TypeScript. Even if you don't need the typings, it gives a nice IntelliSense code suggestion on editors like Visual Studio Code.

TypeScript example:
```typescript
import { Client } from "bananapi";

const client: Client = new Client({ token: "my token" });

client.reverse("TypeScript")
  .then((reversed: string) => {
    console.log(reversed); // => tpircSepyT
  });
```

## License
MIT
