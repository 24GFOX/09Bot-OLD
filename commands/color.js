module.exports = {
  name: "color",
  description: "Join!",
  execute(message, args, client) {
    const id = args[0]
    const role = message.guild.roles.cache.get(id)
    const embed = {
      name: "Role Color",
      description: "**Role: **" + role.name + "\n\n**Base 10:** " + role.color + "\n**Hex:** " + role.hexColor,
      color: role.color
    }
    message.channel.send({ embed: embed })
  }
}