module.exports = {
  name: "fixmyranks",
  description: "Join!",
  execute(message, args, client, firebase) {
    const msg = message;
    if (message.author.id !== "348952467293339649") return msg.channel.send("Bot owner only you idiot.")
    message.member.roles.add("770064773773262849")
    message.member.roles.add("771398418290573333")
  }
}