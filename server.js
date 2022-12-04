const color = require("chalk");
const date = new Date();
var log1 = false;
console.log(color.gray.bold("Loading..."));
console.log(color.gray.bold("Username: ") + color.gray("root"));
console.log(color.gray.bold("Pass: ") + color.gray("**********"));
console.log(color.green("Loging In:"));
const fs = require("fs");
const Discord = require("discord.js");
const { prefix, banned } = require("./config.json");
const nbx = require("noblox.js");
var firebase = require("firebase/app");
const process = require("process");
let uptimeMsg;
require("firebase/database");
var firebaseConfig = {
  apiKey: "AIzaSyDXbJpjgTl7zHHUOXEoAplt4eD7De4gop0",
  authDomain: "o9bot-37603.firebaseapp.com",
  projectId: "o9bot-37603",
  storageBucket: "o9bot-37603.appspot.com",
  messagingSenderId: "725729956594",
  appId: "1:725729956594:web:6797de226ea376cfdff66b",
  databaseURL: "https://o9bot-37603-default-rtdb.firebaseio.com",
  measurementId: "G-854EEJTJMW",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}
const reply = (embed1) => {
  const guild = client.guilds.cache.get("769331121715937291");
  const log = guild.channels.cache.get("782684417117782017");
  log.send({ embed: embed1 });
};
const cooldowns = new Discord.Collection();
client.once("ready", () => {
  var options4 = { timeZone: "UTC", timeZoneName: "short" };
  let now1 =
    date.getMonth() +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    " " +
    date.toLocaleTimeString("en-US", options4);

  const commandLog = client.channels.cache.get("781677929380970507");
  commandLog.send(
    "Bot is now online online via console\n **↳ Timestamp:** " +
      now1 +
      "\n** ↳ Authentication Profile:** root"
  );
  commandLog.send(client.uptime).then((emsg) => {
    log1 = true;
    uptimeMsg = emsg;
  });
  console.log(color.bold.green("Logged in!\n"));
  const guilds = client.guilds.cache.map((guild) => {
    return guild.name;
  });
  client.fetchApplication().then((app) => {
    console.log(
      color.yellow.bold("-- Client Info --\n") +
        color.yellow(
          `ID: ${app.id}\nName: ${app.name}\nOwner: ${app.owner.tag}\n`
        )
    );
    console.log(color.blue.bold("-- Servers --\n") + color.blue(guilds));
    console.log(color.gray("\n-------LOGS-------"));
  });
});
client.on("messageUpdate", (omessage, nmessage) => {
  if (omessage.author.bot) return;
  console.log(color.blue.bold.underline("Message updated."));
});
//client.emit("messageUpdate")
client.on("messageDelete", (message) => {
  console.log(color.red.bold.underline("Message removed."));
});
client.on("message", (message) => {
  const serverLog = client.channels.cache.get("781677868634996736");
  const commandLog = client.channels.cache.get("781677929380970507");
  const messageLog = client.channels.cache.get("781677960112635954");
  if (message.channel.id == messageLog.id) return;
  if (message.channel.id == commandLog.id) return;
  if (message.channel.id == serverLog.id) return;
  console.log(color.green.bold.underline("Message sent."));
  var options4 = { timeZone: "UTC", timeZoneName: "short" };
  let now1 =
    date.getMonth() +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    " " +
    date.toLocaleTimeString("en-US", options4);

  if (message.channel.type == "dm") {
    const dmMsgLog = {
      title: "Message Sent",
      description: `**Author Name:** ${message.author.username}\n**Message Channel:** DM\n**Sent at:** ${now1}\n**Message Content:** ${message.content}`,
      author: {
        name: "Discord Log System",
        icon_url:
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png",
      },
      color: 53380,
    };
    messageLog.send({ embed: dmMsgLog });
  } else {
    const msgLog = {
      title: "Message Sent",
      description: `**Author Name:** ${message.member.displayName}\n**Message Channel:** ${message.channel.name}\n**Sent at:** ${now1}\n**Message Content:** ${message.content}`,
      author: {
        name: "Discord Log System",
        icon_url:
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png",
      },
      color: 53380,
    };
    messageLog.send({ embed: msgLog });
  }
  if (!message.content.startsWith(prefix)) return;
  if (message.author.bot) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;
  if (message.author.id === banned)
    return message.channel.send(
      "You were banned from using this bot you idiot."
    );
  if (command.guildOnly && message.channel.type === "dm") {
    return message.reply("I can't execute that command inside DMs!");
  }
  if (command.dmOnly && message.channel.type !== "dm")
    return message.reply("I can't execute that command inside a server");

  if (command.args && !args.length) {
    let reply = `You didn't provide any arguments, ${message.author}!`;

    if (command.usage) {
      reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
    }

    return message.channel.send(reply);
  }

  if (!cooldowns.has(command.name)) {
    cooldowns.set(command.name, new Discord.Collection());
  }

  const now = Date.now();
  const timestamps = cooldowns.get(command.name);
  const cooldownAmount = (command.cooldown || 3) * 1000;

  if (timestamps.has(message.author.id)) {
    const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return message.reply(
        `please wait ${timeLeft.toFixed(
          1
        )} more second(s) before reusing the \`${command.name}\` command.`
      );
    }
  }

  timestamps.set(message.author.id, now);
  setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  try {
    command.execute(message, args, client, firebase);
  } catch (error) {
    console.error(color.red(error));
    message.reply(
      "there was an error trying to execute that command!\n" +
        "```\n" +
        error +
        "```"
    );
    console.log(
      color.red.bold.underline("Command ERROR:") +
        color.yellow("\n ↳ By: ") +
        message.author.tag +
        " - (" +
        message.author.id +
        ")" +
        color.yellow("\n ↳ In: ") +
        "#" +
        message.channel.name +
        " - (" +
        message.channel.parent.name +
        ")" +
        color.yellow("\n ↳ Command: ") +
        command.name +
        "\n"
    );
  } finally {
  }
});
process.on("beforeExit", () => {
  console.log("Process exit event with code: ");
});
function timeoutOff() {
  console.log("Keep me alive");
}
client.setInterval(() => {
  if (!log199) return;
  var format = require("format-duration");
  uptimeMsg.edit("**Uptime: **" + format(client.uptime, { leading: true }));
}, "2000");

client.login(process.env.token);
