module.exports = {
  name: "archive",
  description: "Join!",
  execute(message, args, client, firebase) {
    const Discord = require("discord.js");
    const msg = message;
    const date = new Date();
    const noPerms = new Discord.MessageEmbed()
      .setAuthor(
        `Discord Server Management System`,
        "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      )
      .setDescription(
        `:no_entry_sign: ${msg.author.username}, you don't have the pemission to run this command`
      )
      .setColor(0xff0000)
      .setFooter(
        `Contact your server admin for help is you belive this isn't right`
      );
    const invalidChannel = new Discord.MessageEmbed()
      .setAuthor(
        `Discord Server Management System`,
        "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      )
      .setDescription(
        `:no_entry_sign: <#${msg.channel.id}>, is not allowed to be archived`
      )
      .setColor(0xff0000)
      .setFooter(
        `Contact your server admin for help is you belive this isn't right`
      );
    if (!msg.member.roles.cache.has("770830582929424394"))
      return msg.channel.send(noPerms);
    if (msg.channel.parent.id == "770140683301945344")
      return msg.channel.send(invalidChannel);
    if (msg.channel.parent.id == "770094198211870781")
      return msg.channel.send(invalidChannel);
    const now = date.getMonth()+"/"+date.getDate()+"/"+date.getFullYear()+" "+date.getHours()+":"+date.getMinutes()
    const success = {
      title: "—CHANNEL ARCHIVED—",
      description: `**Archived at:** ${now}\n**Archived by:** ${msg.member.displayName}`,
      author: {
        name: "Discord Server Management System",
        icon_url:
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      },
      color: 53380
    };
    msg.channel.setParent('781648624362848286', { lockPermissions: true, reason: "Channel archived" })
      .then(msg.channel.send({ embed: success }))
      .catch(err => {
        const error = new Discord.MessageEmbed()
          .setAuthor(
            `Discord Server Management System`,
            "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
          )
          .setTitle(`Something went wrong :scream:`)
          .setDescription(
            `An error happened while executing the command and could not run`
          )
          .addField(`Here's what returned`, err, false)
          .setColor(0xff0000)
          .setFooter(`Contact a developer for help on how to fix this.`);

        msg.channel.send(error);
        console.error(err);
      });
  }
};
