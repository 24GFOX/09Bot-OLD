module.exports = {
  name: "sync",
  description: "Join!",
  execute(message, args, client, firebase) {
    if (message.author.id != "348952467293339649") return message.reply("Bot owner only :P")
    let channels = message.channel.parent.children.array()
    channels.forEach(e => {
      e.lockPermissions()
    })
  }}