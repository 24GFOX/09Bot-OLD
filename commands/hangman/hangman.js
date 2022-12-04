const Discord = require('discord.js');
const possible_words = require('./words.json');
const letters = "🇦 🇧 🇨 🇩 🇪 🇫 🇬 🇭 🇮 🇯 🇰 🇱 🇲 🇳 🇴 🇵 🇶 🇷 🇸 🇹 🇺 🇻 🇼 🇽 🇾 🇿"
// Unicode
const letterEmojisMap = {
    "🅰️": "A", "🇦": "A", "🅱️": "B", "🇧": "B", "🇨": "C", "🇩": "D", "🇪": "E",
    "🇫": "F", "🇬": "G", "🇭": "H", "ℹ️": "I", "🇮": "I", "🇯": "J", "🇰": "K", "🇱": "L",
    "Ⓜ️": "M", "🇲": "M", "🇳": "N", "🅾️": "O", "⭕": "O", "🇴": "O", "🅿️": "P",
    "🇵": "P", "🇶": "Q", "🇷": "R", "🇸": "S", "🇹": "T", "🇺": "U", "🇻": "V", "🇼": "W",
    "✖️": "X", "❎": "X", "❌": "X", "🇽": "X", "🇾": "Y", "💤": "Z", "🇿": "Z"
}

class HangmanGame {

    constructor() {
        this.gameEmbed = null;
        this.inGame = false;
        this.word = ""; 
        this.guesssed = [];
        this.wrongs = 0;
        this.options = {};
        this.options.timestamp = true
        this.options.words = possible_words;
        this.msg = null
    }

    newGame(msg) {
        if (this.inGame) return;
        this.msg = msg
        this.inGame = true;
        this.word = this.options.words[Math.floor(Math.random() * this.options.words.length)].toUpperCase();
        this.guesssed = [];
        this.wrongs = 0;

 
        const embed = new Discord.MessageEmbed()
            .setTitle('Hangman')
            .setDescription(this.getDescription())
            .addField('Letters Guessed', '\u200b')
            .addField("Say **;g `letter`** to guess a letter and **;end** to stop your game", "\u200b")
        
        if(this.options.timestamp) embed.setTimestamp()

        msg.channel.send(embed).then(emsg => {
            this.gameEmbed = emsg;
            this.waitForReaction();
        });
    }

    makeGuess(reaction) {
            const letter = reaction;
            if (!this.guesssed.includes(letter)) {
                this.guesssed.push(letter);

                if (this.word.indexOf(letter) == -1) {
                    this.wrongs++;

                    if (this.wrongs == 6) {
                        this.gameOver(false);
                    }
                }
                else if (!this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").includes("_")) {
                    this.gameOver(true);
                }
            }

        if (this.inGame) {
            const editEmbed = new Discord.MessageEmbed()
                .setTitle('Hangman')
                .setDescription(this.getDescription())
                .addField('Letters Guessed', this.guesssed.length == 0 ? '\u200b' : this.guesssed.join(" "))
                .addField("Say **;g `letter`** to guess a letter and **;end** to end your game", "\u200b")
            
            if(this.options.timestamp) editEmbed.setTimestamp()
            
            this.gameEmbed.edit(editEmbed);
            this.waitForReaction();
        }
    }

    gameOver(win) {
        this.inGame = false;
        const editEmbed = new Discord.MessageEmbed()
            .setTitle('Game Over')
            .setDescription((win ? "***You Win! :)***" : "***You losse*** :(") + "\n\nThe Word was:\n" + this.word)
        
        if(this.options.timestamp) editEmbed.setTimestamp()
        
        this.gameEmbed.edit(editEmbed);

        this.gameEmbed.reactions.removeAll();
    }

    getDescription() {
        return "```"
            + "|‾‾‾‾‾‾|   \n|     "
            + (this.wrongs > 0 ? "🎩" : " ")
            + "   \n|     "
            + (this.wrongs > 1 ? "😟" : " ")
            + "   \n|     "
            + (this.wrongs > 2 ? "👕" : " ")
            + "   \n|     "
            + (this.wrongs > 3 ? "🩳" : " ")
            + "   \n|    "
            + (this.wrongs > 4 ? "👞👞" : " ")
            + "   \n|     \n|__________\n\n"
            + this.word.split("").map(l => this.guesssed.includes(l) ? l : "_").join(" ")
            + "```";
    }

    waitForReaction() {
      const filter = m => m.content.startsWith(';g ') || m.content == ';end' 
        this.gameEmbed.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first()
                if (reaction.content == ';end'){ 
                  if (reaction.author.id == this.msg.author.id) return this.gameOver(false)
                  else return this.waitForReaction()
                  }
                const letr = reaction.content.slice(3).trim().toUpperCase().split("")
                reaction.delete();
                this.makeGuess(letr[0]);
                console.log(letr[0])
                
            })
            .catch(collected => {
                this.gameOver(false);
            });
    }
}

module.exports = HangmanGame;