const prefix = ";";
module.exports = {
  name: "help",
  description: "List all of my commands or info about a specific command.",
  aliases: ["commands"],
  usage: "[command name]",
  cooldown: 5,
  execute(message, args, client, firebase) {
    const data = [];
    const { commands } = message.client;

    if (!args.length) {
      data.push(commands.map(command => prefix + command.name).join("\n"));
      let embed = {
        author: {
          name: "Discord Util Commands",
          icon_url: message.client.user.avatarURL()
        },
        title: "Heres a list of my commands:",
        description: data.toString(),
        footer: {
          text:
            "You can send **;help [command name]** to get info on a specific command!"
        }
      };
      return message.channel
        .send({ embed: embed })
        .then(() => {
          message.react("👍");
        })
        .catch(error => {
          message.react("❌");
          message.reply(":no_entry_sign: Error");
        });
    }

    const name = args[0].toLowerCase();
    const command =
      commands.get(name) ||
      commands.find(c => c.aliases && c.aliases.includes(name));

    if (!command) {
      return message.reply("that's not a valid command!");
    }

    data.push(`**Name:** ${command.name} \n`);

    if (command.aliases)
      data.push(`**Aliases:** ${command.aliases.join(", ")} \n`);
    if (command.description)
      data.push(`**Description:** ${command.description}\n`);
    if (command.usage)
      data.push(`**Usage:** ${prefix}${command.name} ${command.usage}\n`);

    data.push(`**Cooldown:** ${command.cooldown || 3} second(s)\n`);
    let embed1 = {
      author: {
          name: "Discord Util Commands",
          icon_url: message.client.user.avatarURL()
        },
        title: `Info on **${command.name}**:`,
        description: data.toString(),
        footer: {
          text:
            `You can send **${prefix}help** to get a list of all my commands.`
        }
    }
    message.channel.send({embed: embed1});
  }
};
