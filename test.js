const lyertiautils = require("lyertiautils");
const utils = new lyertiautils({ authKey: "SUPER-SECRET-AUTH-KEY", client: client });
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

client.on("ready", () => {
utils.post();
}).login(
  "SUPER-SECRET-DISCORD-TOKEN"
);
