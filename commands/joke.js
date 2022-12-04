module.exports = {
  name: "joke",
  description: "Join!",
  execute(message, args, client, firebase) {
    const jokes = require("./jokes/jokes.json");
    message.delete();
    const randomJoke = () => {
      return jokes[Math.floor(Math.random() * jokes.length)];
    };
    const joke = randomJoke()
    const embed = {
  "title": "Joke:",
  "description": `${joke.setup}\n${joke.punchline}`,
  "author": {
    "name": "Discord Fun Commands",
    "icon_url": "https://images-ext-1.discordapp.net/external/mSr3M3LzmVGoNkowrfil-vs1UXleXveevx7dgRJCi1M/%3Fsize%3D256/https/cdn.discordapp.com/icons/769331121715937291/92b3ac5d56922d497248f7aeeebc050d.png"
  },
  "color": 53380,
  "footer": {
    "text": `Command by: ${message.author.tag} | Joke type: ${joke.type}`
  }
}
    message.channel.send({ embed: embed })
  }
};
