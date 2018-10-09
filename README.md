# BananAPI.js
A wrapper to use the [https://bananapi.ml](https://bananapi.ml) API which has some fun endpoints

## Install
```sh
npm install bananapi
```

## API Key
You need a key to use this API to get one, we use [discordapp](https://discordapp.com) to manage users and give out api keys so to apply you need to join our discord server using the link [https://discord.gg/3Nxb7yZ](https://discord.gg/3Nxb7yZ) and once your in run `b.apply` command by sending it in chat

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

Discord.js example, sending attachments

```js
// Note we required both but you need just one depending on your version
// v11.x.x stable is Attachment
// v12.0.0 dev is MessageAttachment
const { Attachment, MessageAttachment } = require("discord.js");

const image = await api.disabled("something");
message.channel.send(new MessageAttachment(image, "file.png"));
```

## License
MIT
