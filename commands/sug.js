const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.channel.send("```fix\nНеобходимо указать канал для голосования.```")
    }

    if (!suggestmessage) {
        return message.channel.send("```fix\nПожалуйста, укажите текст для голосования.```")
    }

    let embed = new Discord.RichEmbed()
        .addField("**ГОЛОСОВАНИЕ:**", `${suggestmessage}`)
        .setFooter(`Автор: ${message.author.tag}`)
        .setTimestamp()
        .setColor(0x000000)
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });
}
