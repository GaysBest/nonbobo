const {RichEmbed} = require("discord.js");
exports.run = async (client, message, args) => {
if (message.author.id == "281424024523898880") {
var nameResult = args.join(' ');
if (!nameResult) nameResult = null;
client.user.setActivity(nameResult, {type: "WATCHING"});
} else {
  let embed2 = new RichEmbed()
  .setTitle("```fix\nЯ доверяю эту команду только Морозову.```")
  message.channel.send(embed2)
}
}
