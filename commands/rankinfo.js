module.exports = {
  name: "rankinfo",
  description: "Join!",
  execute(message, args, client, firebase) {
    const nbx = require("noblox.js");
    const Discord = require("discord.js");
    const msg = message
    const cookie =
      "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_4F961045A4C628A7846902F8E7F743FBB9D6E12A7C0DEE4CEF4BDA91E36A9842895C92239525B9D61341B09EE904FDD2B57CF9A9DBDF17A134A194D4CF00568D1DB02E5619DA232E31548C3F2BC4CB0E9D94A92CEEF365C3B5857B93C40C659FA8DA131733E7DDA0413FF792F863C06CD071A4CCD77C30BF639AF212C3936ADAEF420E2DA44DBC731B6533C235BDCE45A7A5850D3E637463BF3FC69F12BCADD4D1C1030565089F89D962ACCC9840871C2D8A9F410B5A1FB874EC1D310C4CA9E176546540318CC31F92E88440FC414276C07D70C0B5DE7D7A54458BDDFEC73FBBB8C60E4F681AB0DBF9DBA0AB3E633B849CDCA42F0E80B7F8154C44420DF447CFE1C029991159965032A81C2D9E2C2296C333EFAB951116F93294F43FA49ADCF10F2024AE";
    nbx.setCookie(cookie).then(async () => {
      const options = {
        group: 8142367
      };
      const missingArgument_Rank = new Discord.MessageEmbed()
        .setAuthor(
          `Roblox Group System`,
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
        )
        .setTitle(`Oops! :scream:`)
        .setDescription(
          `You're a missing a required argument (rank) in your message. The command can't continue without this, please add it and try again`
        )
        .setColor(0xff0000)
        .setFooter(
          `Contact a developer if you belive this is a mistake and the argument was entered`
        );
      var rankName = args[1] || ""
      if (rankName == "") return msg.channel.send(missingArgument_Rank);
      rankName = rankName.replace(rankName[0], rankName[0].toUpperCase())
      const rank = await nbx.getRole({ group: options.group, name: rankName })
      const redacted = new Discord.MessageEmbed()
        .setAuthor(
          `Roblox Group System`,
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
        )
        .setTitle(`[INFORMATION REDACTED]`)
      if (rank.rank == "255") return msg.channel.send(redacted)
      const embed1 = new Discord.MessageEmbed()
      .setAuthor(
          `Roblox Group System`,
          "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
        )
      .setTitle(`Information on rank, ${rank.name}`)
      .addField(`Rank name`, rank.name, true)
      .addField(`Rank ID`, rank.ID, true)
      .addField(`Players with this rank`, rank.memberCount, true)
      .addField(`Rank position`, rank.rank, true)
      msg.channel.send(embed1)
    });
  }
};
