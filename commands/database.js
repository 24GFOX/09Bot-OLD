module.exports = {
  name: "database",
  description: "Join!",
  execute(message, args, client, firebase) {
    const msg = message;
    firebase.database()
      .ref("/discord/users/" + msg.author.id + "/")
      .once("value")
      .then(snapshot => {
        var username = (snapshot.val() || "null");
        if (username == "null") return addUser(msg.author.id);
        username = username.name
        msg.channel.send(username);
      })
      .catch(err => {console.log(err)});
    function addUser(id) {
      firebase.database().ref("/discord/users/" + msg.author.id ).set({
        name: msg.author.tag
      })
    }
    
  }
};
