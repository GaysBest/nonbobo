const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")

exports.run = (client, message, args) => {
    if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Команда. Можно использовать только в NSFW канале.")

    var subreddits = [
        'naughtyinpublic',
        'gwpublic',
        'exposedinpublic',
        'beachgirls'
    ]
    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
        .then(url => {
            request.get(url).then(r => {
                fs.writeFile(`public.jpg`, r.body)
                message.channel.sendFile(r.body)
                fs.unlink(`./public.jpg`)
            })
        })
}