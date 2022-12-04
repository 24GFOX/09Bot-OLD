module.exports = {
  name: "time",
  description: "Join!",
  execute(message, args, client) {
    let timeZone = "UTC"
    timeZone = timeZone.toUpperCase()
    const date = new Date()
    var options4 = { timeZone: timeZone, timeZoneName: "short" };
    let now1 = date.toLocaleTimeString("en-US", options4);
    message.reply(now1)
  }
}