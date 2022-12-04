module.exports = {
  name: "promote",
  description: "Join!",
  args: true,
  execute(message, args, client, firebase) {
    const msg = message;
    const Discord = require("discord.js");
    const user = msg.mentions.members.first() || "";
    const name = user.displayName
    const loc = name.search(" ")
    const username = name.slice(loc)
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
    if (!msg.member.roles.cache.has("769617136976265216"))
      return msg.channel.send(noPerms);
    
    if (user == "") return msg.channel.send("Mention a user you bafoon");
    const roles = [
      "769615850436952095",
      "770062857780854794",
      "770061650102976512",
      "769615796757332028",
      "770061858559754250",
      "770062715657912320",
      "774382953118957589",
      "770063376277438464",
      "773579106415280179",
      "773579337383018526",
      "769615689756442655",
      "769615626938875915",
      "770063571723616258",
      "769615519325225011",
      "770065326229946389",
      "770063708231434240",
      "769615458176729119",
      "770063702572793878",
      "770064584550645770",
      "770064773773262849",
      "769331655390920706"
    ];
    const nick = [
      "[PVT]",
      "[PFC]",
      "[SPC]",
      "[CPL]",
      "[SSGT]",
      "[MSGT]",
      "[SGM]",
      "[CSGT]",
      "[WO1]",
      "[WO2]",
      "[CPT]",
      "[MAJ]",
      "[2LT]",
      "[1LT]",
      "[LTCOM]",
      "[LTCOL]",
      "[COL]",
      "[BGEN]",
      "[MGEN]",
      "[LTGEN]",
      "[COM]"
    ];
    var currentRank = user.roles.highest.id;
    var index1;
    roles.find(function(value, index) {
      if (value == currentRank) {
        index1 = index;
        return;
      }
    });
    const embed1 = new Discord.MessageEmbed()
      .setAuthor(
        `Discord Moderation System`,
        "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      )
      .setDescription(`**${user.displayName}** has been promoted.`)
      .setColor(0x00ff00);
    msg.channel.send(embed1)
    var nextRank = roles[index1 + 1];
    user.roles.add(nextRank)
      .then(user.setNickname(nick[index1 + 1]+username))
    user.roles.remove(currentRank);
    
    
    
  }
};
