const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```fix\nИзвините, вы не имеете прав на использование этой команды.```");
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.send("```fix\nНе удалось найти пользователя.```");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("```fix\nИзвините, вы не можете замутить этого пользователя.```");
    let muterole = message.guild.roles.find(`id`, "477599026817138691");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.channel.send("```fix\nВы не указали время.```");

    await (tomute.addRole(muterole.id));
    message.channel.send(`<@${tomute.id}> получил мут на ${ms(ms(mutetime))}`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> закончил отбывание в тюрьме!`);
    }, ms(mutetime));

}

exports.conf = {
    aliases: [],
    permLevel: 2
};

module.exports.help = {
    name: "mute",
    description: 'Denies the user from speaking for the time provided.',
    usage: 'mute [time: hours, minitues, or days.]'
}
