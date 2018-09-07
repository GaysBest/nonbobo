const Discord = require('discord.js');
const moment = require("moment");
exports.run = async (client, message, args) => {
	let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    const member = message.guild.member(user);
    const embed = new Discord.RichEmbed()
		.setColor(0x000000)
		.setThumbnail(user.avatarURL)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("ID:", `${user.id}`, true)
		.addField("Никнейм:", `${member.nickname !== null ? `${member.nickname}` : 'Нет'}`, true)
		.addField("Создан:", `${moment.utc(user.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Подключен к серверу:", `${moment.utc(member.joinedAt).format('dddd, MMMM Do YYYY, HH:mm:ss')}`, true)
		.addField("Бот:", `${user.bot}`, true)
		.addField("Статус:", `${user.presence.status}`, true)
		.addField("Игра:", `${user.presence.game ? user.presence.game.name : 'Нет'}`, true)
		.addField("Роли:", member.roles.map(roles => `${roles.name}`).join(', '), true)
		.setFooter(`Ответ для ${message.author.username}#${message.author.discriminator}`)
     message.channel.send({embed});
    }
