const movieQuote = require("popular-movie-quotes");
module.exports = {
	name: 'quote',
	description: 'Join!',
	execute(message, args, client, firebase) {     
    const embed = {
      author: {
        name: "FUN COMMANDS",
        icon_url: "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
      },
      title: "Random Movie Quote",
      description: movieQuote.getRandomQuote()
    }
    message.channel.send({embed:embed})
  }
}