module.exports = {
  name: "getinfo",
  description: "Join!",
  execute(message, args, client, firebase) {
    let members;
    message.guild.members.fetch().then(i => {
      members = i.map(user => user);
      members.forEach(q => {
        if (q.id != client.user.id && !q.bot) {
          let user = q
          let name = user.displayName;
          let loc = name.search(" ");
          let username = name.slice(loc);
          let joined = user.joinedAt;
          message.channel.send(
            username +
              "\n" +
              user.user.tag +
              "\n" +
              joined.getMonth() +
              "/" +
              joined.getDate() +
              "/" +
              joined.getFullYear() +
            "\n\n."
          );
        }
      });
    });
  }
};
