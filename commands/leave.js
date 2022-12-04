module.exports = {
  name: "leave",
  description: "Join!",
  execute(message, args, client, firebase) {
    if (message.author.id == "348952467293339649") {return message.channel.send("Bot owner only :\ :anger:"); message.react("x")}
    message.guild.leave()
  }}