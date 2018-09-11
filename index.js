const Discord = require("discord.js");
const client = new Discord.Client();
var request = require("superagent");

//----------------------------------------------
var prefix = "bg_"
//----------------------------------------------

client.on('ready', () => {
    client.user.setStatus('available')
    client.user.setPresence({
        game: {
            name: 'в будущее БГРУ',
            type: "WATCHING",
        }
    });
});

client.on("message", message => {
    if (message.author.bot) return;
    if (message.content.indexOf(prefix) !== 0) return;
    if (message.channel.type === "dm") return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./commands/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
});

client.login(process.env.BOT_TOKEN);
