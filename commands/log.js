module.exports = {
  name:"log",
  execute(msg, args) {
    if (msg.author.bot) return
    console.log("\nServer message from:" + msg.author.tag + "\n" + args.join(" ") + "\n")
    msg.react("✅")
  }
}