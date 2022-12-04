var TicTacToe = require('tictactoejs');

const prefix = ";";
module.exports = {
  name: "tictactoe2",
  description: "List all of my commands or info about a specific command.",
  aliases: ["ttt2", "tic2"],
  usage: "[command name]",
  cooldown: 0,
  execute(message, args, client, firebase) {
    
    //const user = message.mentions.members.first()
   // if (!user) return message.channel.send("Make sure you @ your opponent `;ttt @player`")
   // if (user == message.member) return message.channel.send("You can't play yourself *pftt* get friends nerd")
    //if (user.user.bot) return message.reply("Playing with robots?.... just sad *tisk tisk tisk*")
   // const embed = {
  //    title: `${user.displayName} you recived a request to play TicTacToe from ${message.member.displayName}`,
   //   description: `React with :white_check_mark: to accept, if you do not wish to play simply ignore this message.\nYou have 2 minutes.`
   // }
      function startgame() {
      var game = new TicTacToe.TicTacToe();
      let boardEmbed = {
        title: `TTT Game: It is currently ${game.turn()}'s move'`,
        description: game.ascii()
      }
      message.channel.send({ embed:boardEmbed })
    }
    /*message.channel.send(user,{embed:embed})
      .then(msg => {
      let emsg = msg
      emsg.react('✅')
      const filter = (reaction, ruser) => reaction.emoji.name === '✅' && ruser.id === user.id
      emsg.awaitReactions(filter, { max: 1, time: 120000 })
        .then(collected => {
                const reaction = collected.first();
                reaction.remove();
                emsg.reactions.removeAll();
                emsg.edit("Invite Accepted Game Starting ", { embed: null })
                startgame()
                
            })
      .catch((err) =>{
        console.error(err)
        emsg.reactions.removeAll();
        emsg.edit("Invite Expired", { embed: null })
        
      })*/
    //})
    
  
    startgame()
  }
}