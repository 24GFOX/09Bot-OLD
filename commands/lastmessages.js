module.exports = {
  name: "lastmessages",
  description: "Join!",
  execute(message, args, client, firebase) {
    let member = message.mentions.members.first()
    message.guild.members.fetch(member.id).then(i => {
      var lastMsg = i.lastMessage;
      message.channel.send(`${lastMsg.createdAt}`)
    })
    
    
    
    
    /*if (member.length == 0) return message.reply("Mention a user pls.");
    member = member.first;
    const date1 = new Date();
    var lastMsg = member.lastMessage;
    if (lastMsg == null) {
      message.channel.send(member.displayName + " | No messages sent");
    } else {
      var date2 = lastMsg.createdAt;
      var Difference_In_Time = date2.getTime() - date1.getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      message.channel.send(member.displayName + " | " + Difference_In_Days);
    }*/
  }
};
