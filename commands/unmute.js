module.exports = {
  name: "unmute",
  description: "Join!",
  execute(message, args, client, firebase) {
    const Discord = require("discord.js");
    const msg = message;
    let user = msg.mentions.members.first();
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
   
 
    
    if (msg.member.roles.highest.comparePositionTo("769615519325225011") < 0)
      return msg.channel.send(noPerms);
    
    if (!user) {
      const missingArgument_User = new Discord.MessageEmbed()
        .setAuthor(
          `Discord Moderation System`,
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
        )
        .setTitle(`Oops! :scream:`)
        .setDescription(
          `You're a missing a required argument (muteUser) in your message. The command can't continue without this, please add it and try again`
        )
        .setColor(0xff0000)
        .setFooter(
          `Contact a developer if you belive this is a mistake and the argument was entered`
        );
      msg.channel.send(missingArgument_User);
      return;
    }
     
    const embed1 = new Discord.MessageEmbed()
      .setAuthor(
        `Discord Moderation System`,
        "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      )
      .setDescription(`**${user.user.username}** has been unmuted.`)
      .setColor(0x00ff00);
    user.roles.remove(['780230201194840114'])
      .then(msg.channel.send(embed1))
      .catch(err => {
        const error = new Discord.MessageEmbed()
          .setAuthor(
            `Discord Moderation System`,
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
