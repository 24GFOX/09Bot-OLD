/*const prefix = ";";
var botlines, tictacgame, symbols = ["x","o"],  map = {}, nr;
class Game {

	constructor (){
		this._gameChannel = 0;
		this._players = [];
	}

	startGame(message){}
	endGame(message){}
	playGame(message){}
}

class TicTacToe extends Game {
	
	constructor (message) {
		super();
		this._gameChannel = message.channel.id;
		this._players[0] = message.author.id;
		this._players[1] =  message.mentions.members.first()
		this._turn = 0;
		this._gameBoard = [ [..."---"],
							[..."---"],
							[..."---"]
						  ];
    this._message;
	}

	startGame (message) {
	
		message.reply("you started a game of tic-tac-toe with " + this._players[1].toString() + ". Say ;mark <row> <column> to make your first move.");
		 
		message.channel.send("```" + this._gameBoard[0][0] + " " +
							 this._gameBoard[0][1] + " " +
							 this._gameBoard[0][2] + " \n" +
							 this._gameBoard[1][0] + " " +
							 this._gameBoard[1][1] + " " +
							 this._gameBoard[1][2] + " \n" +
							 this._gameBoard[2][0] + " " +
							 this._gameBoard[2][1] + " " +
							 this._gameBoard[2][2] + " " + "```").then(msg => {
      this._message = msg
    })
    this.awaitMsg(this._message)
	}

	endGameWin (message) {

		for (var i in map){
			if(i==this._gameChannel && map[i] == "tictactoe")
				map[i] = "";
		}
		
		message.channel.send("<@" + this._players[this._turn] + "> won. Great moves, keep it up, proud of ya!");

		map[this._gameChannel] = "";

		return true;

	}

	endGameDraw (message) {
		
		message.channel.send("It's a draw. Wah-wah.");

		map[this._gameChannel] = "";

		return true;

	}

	isItADraw () {
		for(var x=0;x<3;x++)
			for(var y=0;y<3;y++)
				if(this._gameBoard[x][y] == '-')
					return false;

		return true;
	}
  awaitMsg (message) {
  const filter = (m, u) => m.content.startsWith(';mark ') && m.author.id == this._players[this._turn]
    this._message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })
            .then(collected => {
                
                const reaction = collected.first()
                reaction.delete();
                this.playGame(reaction);
                console.log(reaction)
                
            })
            .catch(err => {
                return this._message.channel.send("ERROR: Expired." + err)
            });
  }
	isItAWin (i,j) {
		if ((this._gameBoard[0][j] != '-' && this._gameBoard[0][j] == this._gameBoard[1][j] && this._gameBoard[1][j] == this._gameBoard[2][j]) ||
			(this._gameBoard[i][0] != '-' && this._gameBoard[i][0] == this._gameBoard[i][1] && this._gameBoard[i][1] == this._gameBoard[i][2]) ||
			(this._gameBoard[0][0] != '-' && this._gameBoard[0][0] == this._gameBoard[1][1] && this._gameBoard[1][1] == this._gameBoard[2][2]) ||
			(this._gameBoard[0][2] != '-' && this._gameBoard[0][2] == this._gameBoard[1][1] && this._gameBoard[1][1] == this._gameBoard[2][0]))
			return true;
		return false;
	}

	playGame (message) {

		if(message.author.id != this._players[this._turn]){
			message.reply("not your turn. Cease immediately. Or else.");
			return;
		}

		var i = message.content.substring(1).split(' ')[1];
		var j = message.content.substring(1).split(' ')[2];

		if(i <0 || i>2 || j<0 || j>2) {
			message.reply("wrong move, expected coordinates between 0 and 2. Try again.");
			return;
		}

		if(this._gameBoard[i][j] != "-") {
			message.reply("wrong move, that position's taken. Find somewhere else to go.");
			return;
		}

		this._gameBoard[i][j] = symbols[this._turn];

		message.channel.send(this._gameBoard[0][0] + " " +
							 this._gameBoard[0][1] + " " +
							 this._gameBoard[0][2] + " \n" +
							 this._gameBoard[1][0] + " " +
							 this._gameBoard[1][1] + " " +
							 this._gameBoard[1][2] + " \n" +
							 this._gameBoard[2][0] + " " +
							 this._gameBoard[2][1] + " " +
							 this._gameBoard[2][2] + " ");

		this._turn = this._turn == 1 ? 0 : 1;

		if(this.isItADraw()){
			this.endGameDraw(message);
			return;
		}

		if(this.isItAWin(i,j)){
			this.endGameWin(message);
			return;
		}

		message.channel.send("<@" + this._players[this._turn] + ">, make your move.");
	}

}*/
/*    const user = message.mentions.members.first()
    if (!user) return message.channel.send("Make sure you @ your opponent `;ttt @player`")
    if (user == message.member) return message.channel.send("You can't play yourself *pftt* get friends nerd")
    //if (user.user.bot) return message.reply("Playing with robots?.... just sad *tisk tisk tisk*")
    const embed = {
      title: `${user.displayName} you recived a request to play TicTacToe from ${message.member.displayName}`,
      description: `React with :white_check_mark: to accept, if you do not wish to play simply ignore this message.\nYou have 2 minutes.`
    }
    message.channel.send(user,{embed:embed})
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
                map[this._commandChannel] = new TicTacToe(message);
			        	map[this._commandChannel].startGame(message);
            })
      .catch((err) =>{
        console.error(err)
        emsg.reactions.removeAll();
        emsg.edit("Invite Expired", { embed: null })
        
      })
    })
    */
const TicTacToe = require("discord-tictactoe");
module.exports = {
  name: "tictactoe",
  description: "List all of my commands or info about a specific command.",
  aliases: ["ttt", "tic"],
  usage: "[command name]",
  cooldown: 0,
  execute(message, args, client, firebase) {
    new TicTacToe(
      {
        language: "en",
        command: ";ttt"
      },
      client
    );
  }
};
