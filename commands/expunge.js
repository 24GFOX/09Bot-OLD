module.exports = {
	name: 'expunge',
	description: 'Join!',
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
    let channel = msg.channel
    msg.delete()
      .then(remove())
    function remove() {
      channel.bulkDelete(args[0])
      .then(send())
      .catch(err => console.error(err))
    }
    
    function send() {
      channel.send(`**${args[0]}** messages removed`)
      channel.send(`***[ALL FURTHER DATA HAS BEEN EXPUNGED]***`)
    }
  }
}