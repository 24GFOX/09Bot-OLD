module.exports = {
  name: "tttboard",
  description: "Join!",
  execute(message, args, client) {
    const embed = {
      description: "``` Y\n\n 3   1,3 | 2,3 | 3,3\n     ---------------\n 2   1,2 | 2,2 | 3,2\n     ---------------\n 1   1,1 | 2,1 | 3,1\n\n      1     2     3    X```"
    }    
    message.channel.send({embed:embed})
  }
}