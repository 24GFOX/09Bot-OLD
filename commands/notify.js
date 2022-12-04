module.exports = {
  name: "notify",
  description: "Join!",
  execute(message, args, client, firebase) {
    const msg = message
    const Discord = require('discord.js')
    const noPerms = new Discord.MessageEmbed()
      .setAuthor(
        `Discord Moderation System`,
        "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      )
      .setDescription(
        `:no_entry_sign: ${msg.author.username}, you don't have the pemission to run this command`
      )
      .setColor(0xff0000)
      .setFooter(
        `Contact your server admin for help is you belive this isn't right`
      );
    if (!msg.member.roles.cache.has("770830582929424394"))
      return msg.channel.send(noPerms);
    let user = msg.mentions.members.first();
    if (!user) return msg.channel.send("You gotta mention someone")
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        `✪ Omega-9 Notification ✪`,
        "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      )
      .setDescription(
        `${args.join(" ")}\n\n***From:* ${message.author.tag}**`
      )
      .setColor(0xff0000)
      .setTitle(`Dear ${user.user.username}, the following is a message from the Omega 9 Senior Command.`)
      .setFooter(
        `Approved by the O9 Senior Command`
      );
    user.send(embed)
    msg.delete()
    
  }
}