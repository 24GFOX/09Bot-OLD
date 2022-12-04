var format = require('format-duration')
module.exports = {
	name: 'uptime',
	description: 'Join!',
	execute(message, args, client, firebase) {
    message.reply("**Uptime: **" + format(client.uptime, { leading: true }))
  }
}