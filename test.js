const lyertiautils = require("@lyertia/lyertiautils"); //if you installed it on npm
const discord = require("discord.js");
const { Intents } = require("discord.js");
const client = new discord.Client({
  intents: [
    [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MEMBERS,
      Intents.FLAGS.DIRECT_MESSAGES,
      Intents.FLAGS.GUILD_MESSAGES,
    ],
  ],
});
const utils = new lyertiautils({
  authKey: "SUPER_SECRET_KEY",
  client: client,
});

client
  .on("ready", () => {
    utils.post();
  })
  .login(
    "SUPER-SECRET-DISCORD-TOKEN"
  );
