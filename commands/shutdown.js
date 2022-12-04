module.exports = {
  name: "shutdown",
  description: "Join!",
  execute(message, args, client, firebase) {
    if (!message.author.id == "348952467293339649") return message.channel.send("No")
    message.channel.send(`Bot protocol 7 is now active. Shutting down.`)
}}