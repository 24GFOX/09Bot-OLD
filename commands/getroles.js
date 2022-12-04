module.exports = {
  name: "getroles",
  description: "Join!",
  execute(message, args, client) {
    let user = message.mentions.members.first()
    if (!user){ user = message.member} 
    let rolesArray = user.roles.cache.array()
    let roles = []
    rolesArray.pop()
    rolesArray.forEach((element) => {
      roles +=  element.toString() + "\n"
    })
      const embed = {
        title: "Users roles:",
        description: roles
      }
      message.channel.send({embed:embed})
  }}