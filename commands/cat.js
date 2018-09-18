const Discord = require('discord.js');
superagent = require('superagent');
const client = new Discord.Client();
exports.run = async (client, message, args) => {
    let {
        body
    } = await superagent
        .get(`http://aws.random.cat/meow`);
    const catembed = new Discord.RichEmbed()
        .setColor(0x000000)
        .setImage(body.file)
    message.channel.send(catembed);
}
