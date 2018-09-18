const Discord = require("discord.js");
const client = new Discord.Client();
superagent = require("superagent");
exports.run = async (client, message, args) => {
    let {
        body
    } = await superagent
        .get(`https://random.dog/woof.json`);
    const dogembed = new Discord.RichEmbed()
        .setColor(0x000000)
        .setImage(body.url)
    message.channel.send(dogembed);

}
