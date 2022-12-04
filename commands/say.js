module.exports = {
  name: "say",
  description: "Join!",
  execute(message, args, client, firebase) {
    if (message.author.id != "348952467293339649") return message.reply("Bot owner only :P")
    const msg = message
    msg.delete()
    msg.channel.send(args.join(" "))
  }
}