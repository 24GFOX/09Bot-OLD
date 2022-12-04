module.exports = {
  name: "whois",
  description: "Join!",
  args: true,
  execute(message, args, client, firebase) {
    const Discord = require("discord.js");
    const msg = message;
    const nbx = require("noblox.js");
    var dateFormat = require("dateformat");
    const cookie =
      "_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_4F961045A4C628A7846902F8E7F743FBB9D6E12A7C0DEE4CEF4BDA91E36A9842895C92239525B9D61341B09EE904FDD2B57CF9A9DBDF17A134A194D4CF00568D1DB02E5619DA232E31548C3F2BC4CB0E9D94A92CEEF365C3B5857B93C40C659FA8DA131733E7DDA0413FF792F863C06CD071A4CCD77C30BF639AF212C3936ADAEF420E2DA44DBC731B6533C235BDCE45A7A5850D3E637463BF3FC69F12BCADD4D1C1030565089F89D962ACCC9840871C2D8A9F410B5A1FB874EC1D310C4CA9E176546540318CC31F92E88440FC414276C07D70C0B5DE7D7A54458BDDFEC73FBBB8C60E4F681AB0DBF9DBA0AB3E633B849CDCA42F0E80B7F8154C44420DF447CFE1C029991159965032A81C2D9E2C2296C333EFAB951116F93294F43FA49ADCF10F2024AE";
    msg.channel.send("Working");
    const filter = msg => msg.content == "Working";
    const collector = msg.channel.createMessageCollector(filter, { max: 1 });
    var editmsg;
    collector.on("collect", m => (editmsg = m));

    nbx.setCookie(cookie).then(async () => {
      const group = "8142367";
      let userId = await nbx.getIdFromUsername(args[0]);
      const role = await nbx.getRankNameInGroup(group, userId);
      if (userId == "1427301993") {
        msg.channel.send("```Information Redacted```");
        return;
      }
      await nbx.getPlayerInfo(userId).then(playerInfo => {
        let infoEmbed = new Discord.MessageEmbed()
          .setURL(`https://www.roblox.com/users/${userId}/profile`)
          .setTitle(`${playerInfo.username}'s Roblox profile`)
          .addField(`Role in Group`, role, true)
          .addField(
            `Account Age (in days)`,
            playerInfo.age || "Not available",
            true
          )
          .addField(
            `Join Date`,
            dateFormat(playerInfo.joinDate, "mmmm dS, yyyy") || "Not available"
          )
          .addField(`Status`, playerInfo.status || "Not available")
          .addField(`Description`, playerInfo.blurb || "Not available")

          .setThumbnail(
            `https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=420&height=420&format=png`
          )
          .setAuthor(
            "Roblox Player System",
            "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
          );

        editmsg.delete();
        msg.channel.send(infoEmbed);
      });
    });
  }
};
