module.exports = {
  name: "ranks",
  description: "Join!",
  execute(message, args, client, firebase) {
    
    
    const msg = message;
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
    var desc = "";

    roles.forEach(desc1);
    function desc1 (element, index, array) {
      var name = msg.guild.roles.cache.get(element)
      desc = `**${nick[index]}** ${name} - ${name.id}\n` + desc
    }
    let playerEmbed = {
      title: "Roles",
      description: desc,
      author: {
        name: "Discord Role System",
        icon_url:
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      },
      color: 53380
    };
    let colorEmbed1 = {
      description: "Red roles are SCOM",
      color: 8003359
    }
    let colorEmbed2 = {
      description: "Orange, Yellow and Dark green roles are Officers",
      color: 15844367
    }
    let colorEmbed3 = {
      description: "Green and Blue roles are enlists",
      color: 2123412
    }
    msg.channel.send({ embed: playerEmbed });
    msg.channel.send({ embed: colorEmbed1 });
    msg.channel.send({ embed: colorEmbed2 });
    msg.channel.send({ embed: colorEmbed3 });
    
    
  }
};
