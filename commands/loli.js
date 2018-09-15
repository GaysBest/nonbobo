const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {

    let {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/smallboobs`);
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Команда. Можно использовать только в NSFW канале.");

    let hentaiEmbed = new Discord.RichEmbed()
        .setTitle('.')
        .setImage(body.url)
        .setColor(0x000000)

    message.channel.send(hentaiEmbed);

}
