const HangmanGame = require("./hangman/hangman.js")
module.exports = {
  name: "hangman",
  description: "Join!",
  execute(message, args, client) {
   const game = new HangmanGame()
    var hangman = game.newGame(message)
   }
};
