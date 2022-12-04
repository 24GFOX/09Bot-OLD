module.exports = {
  name: "timezones",
  description: "Join!",
  execute(message, args, client, firebase) {
    const embed = {
      title: "A list of supported timezones",
      description:
        "**GMT** - Greenwich Mean Time\n**UTC** - Universal Coordinated Time\n**ECT** - European Central Time\n**EET** - Eastern European Time\n**ART** - (Arabic) Egypt Standard Time\n**EAT** - Eastern African Time\n**MET** - Middle East Time\n**NET** - Near East Time\n**PLT** - Pakistan Lahore Time\n**IST** - India Standard Time\n**BST** - Bangladesh Standard Time\n**VST** - Vietnam Standard Time\n**CTT** - China Taiwan Time\n**JST** - Japan Standard Time\n**ACT** - Australia Central Time\n**AET** - Australia Eastern Time\n**SST** - Solomon Standard Time\n**NST** - New Zealand Standard Time\n**MIT** - Midway Islands Time\n**HST** - Hawaii Standard Time\n**AST** - Alaska Standard Time\n**PST** - Pacific Standard Time\n**PNT** - Phoenix Standard Time\n**MST** - Mountain Standard Time\n**CST** - Central Standard Time\n**EST** - Eastern Standard Time\n**IET** - Indiana Eastern Standard Time\n**PRT** - Puerto Rico and US Virgin Islands Time\n**CNT** - Canada Newfoundland Time\n**AGT** - Argentina Standard Time\n**BET** - Brazil Eastern Time\n**CAT** - Central African Time"
    };
    message.channel.send({embed:embed})
  }
};
