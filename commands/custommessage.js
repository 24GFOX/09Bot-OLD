module.exports = {
  name: "custommessage",
  description: "Join!",
  aliases: ["cm"],
  execute(message, args, client, firebase) {
    if (message.author.id != "348952467293339649") return message.reply("*softly*\nDon't")
    const loading = client.emojis.cache.find(
      emoji => emoji.id === "787434011089043506"
    );
    const msg = message;
    const incoming = {
      description:
        loading.toString() + "Incoming transmission " + loading.toString(),
      color: "#FF0000"
    };
    const clas = {
      description: "``Classification Level:``\n**SECRET**",
      color: "#FF0000"
    };
    const approval = {
      description:
        "The following message is approved by: **[R҉E҉D҉A҉C҉T҉E҉D҉]** ",
      color: "#FF0000"
    };
    const end = {
      description: "``END OF TRANSMISSION``",
      color: "#FF0000"
    };
    const body = {
      title: "TRANSMISSION",
      description:
        "`Dear O9, \n\n" +
        "The Omega-9 Task Force is undergoing a mandatory uniform change. You are not to wear any accessories with the uniform on-duty. The only variants allowed with the uniform are the face/eyes. The final price of the full uniform is 185 Robux. If you cannot afford the uniform, one will be provided for you. If you are in need of funds please DM` <@601474612005437449> `with your current Robux balance and an image with both your username and the aforementioned balance in it  so that we can confirm you are actually in need of Robux. Thank you, [REDACTED], signing off.`"
    };
    let members;
    message.guild.members.fetch().then(i => {
      members = i.map(user => user.user);
      members.forEach(q => {
        if (q.id != client.user.id && !q.bot) {
          q.send({ embed: end });
          q.send({ embed: incoming });
          q.send({ embed: clas });
          q.send(
            `${loading.toString()} Validating Credentials ${loading.toString()}`
          );
          q.send(`:white_check_mark: Credentials Validated :white_check_mark:`);
          q.send({ embed: approval });
          q.send({ embed: body });
        }
      });
    });
  }
};
