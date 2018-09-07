const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Команда. Можно использовать только в NSFW канале.")

    var subreddits = [
        'gayporn'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`gayporn.jpg`, r.body)
                member.sendFile(r.body)
                fs.unlink(`./gayporn.jpg`)
                message.delete();
            })
        })
}
