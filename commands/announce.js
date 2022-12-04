// Embeds
const wrongChannelEmbed = {
  title: ":no_entry_sign:  Error  :no_entry_sign:",
  description: "I can't do that in this channel, try using that command in <#773186231277977650>, <#770094628829397012> or <#770094477242925068>",
  color: "#ff0000",
  author: {
        name: "Discord Util Commands",
        icon_url:
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      }
}
const noArgsEmbed = {
  title: ":no_entry_sign:  Error  :no_entry_sign:",
  description: "There is no message to announce. Try using the command like this `;announce [message]`",
  color: "#ff0000",
  author: {
        name: "Discord Util Commands",
        icon_url:
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      }
}
const closings = {
  "348952467293339649":"> Best regards,\n> **[SCOM] [HoD]** 24hihi123\n> ***Glory to the foundation!***",
  "601474612005437449":"> Best regards, \n> **[SCOM]** █████████████\n> [TRANSMISSION END]"
}
const incoming = {
      title: ":trumpet: INCOMING TRANSMISSION :trumpet:",
      color: "#3d523d"
}
module.exports = {
  name: "announce",
  description: "Join!",
  execute(message, args, client, firebase) {
    const msg = message
    let closing
    
    const announceChannel = client.channels.cache.get(msg.channel.id);
    if (msg.channel.parent.id != "770094198211870781") return msg.channel.send({embed:wrongChannelEmbed})
    if (args.length == 0) return msg.channel.send({embed:noArgsEmbed})
    if (Object.keys(closings).includes(msg.author.id)){
      closing = closings[msg.author.id]
    } else {
      closing = "> Sincerely,\n> " + msg.member.displayName
    }
    const announcement = {
      title: "Transmission recived from: " + msg.member.displayName,
      description:args.join(" ") + "\n\n" + closing,
      color: "#3d523d"
    }
    msg.author.send("Please read over the announcemnt then react with ✅ to approve it")
    msg.author.send({embed:announcement})
    .then(emsg => {
      msg.delete()
      emsg.react('✅')
      const filter = (reaction, ruser) => reaction.emoji.name === '✅' && ruser.id == msg.author.id
      emsg.awaitReactions(filter, { max: 1, time: 120000 })
        .then(collected => {
                const reaction = collected.first();
                msg.author.send("Announcement approved. Transmitting now")
                send()
            })
      .catch((err) =>{
        console.error(err)
        emsg.edit("Expired try again", { embed: null })
      })
    })
    function send() {
      announceChannel.send({embed:incoming})
      announceChannel.send({embed:announcement})
    }
  }
}