const { Client, MessageEmbed } = require('discord.js');
const pagination = require('discord.js-pagination');
const client = new Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        client.channels.get("840689482566729779").send("pong");
    }
    else if (msg.content === 'what is my avatar') {
        msg.reply(msg.author.displayAvatarURL());
    }
    else if (msg.content === 'brain info') {
        msg.delete();
        const embed = new MessageEmbed()
            .setColor('#c96b8d')
            .setTitle('Info du bot')
            .setURL(client.user.displayAvatarURL())
            .setAuthor('Brain bot', client.user.displayAvatarURL(), 'http://qdqsxsqdsqkhnkdjsnniufhksjdniohdlskkoihsollikh.com/')
            .setDescription('Tout ce que vous devez savoir concernant le bot réalisé par "par la barbe de Merlin" !')
            .setThumbnail('https://cdn.discordapp.com/avatars/536799645205135361/93860d695cb7ac4a12462d00af31ba0e.webp')
            .addFields(
                { name: 'Les Info', value: 'Brain bot est une ia qui répond a la commande bb!<sujet> en cherchant sur le site https://haze-code.com le tuto associé a la recherche.\n Pour l\'instant sur le site les tuto dispo sont les suivants :\n ` id |     nom     | publique ? |           url           `\n` 01 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 02 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 03 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 04 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 05 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 06 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 07 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 08 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 09 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 10 |   exemple   |    `:x:`     | https://haze-code.com/  `\n \n page 4/5' },
                { name: '\u200B', value: '\u200B' },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
                //{ name: 'Inline field title', value: 'Some value here', inline: true },
            )
            //.addField('Inline field title', 'Some value here', true)
            .setImage(client.user.displayAvatarURL())
            .setTimestamp()
            .setFooter('Brain bot', client.user.displayAvatarURL());
        msg.channel.send(embed).then(msg => {
            msg.react('⏮️').then(r => {
                msg.react('⏭️')})});



  }else if(msg.content === 'pages'){
    const page1 = new MessageEmbed()
    .setColor('#c96b8d')
    .setTitle('Info du bot')
    .setURL(client.user.displayAvatarURL())
    .setAuthor('Brain bot', client.user.displayAvatarURL(), 'http://qdqsxsqdsqkhnkdjsnniufhksjdniohdlskkoihsollikh.com/')
    .setDescription('Tout ce que vous devez savoir concernant le bot réalisé par "par la barbe de Merlin" !')
    .setThumbnail('https://cdn.discordapp.com/avatars/536799645205135361/93860d695cb7ac4a12462d00af31ba0e.webp')
    .addFields(
        { name: 'Les Info', value: 'Brain bot est répond a la commande bb!<sujet> en cherchant sur le site https://haze-code.com le tuto associé a la recherche.\n Pour l\'instant sur le site les tuto dispo sont les suivants :\n ` id |     nom     | publique ? |           url           `\n'+ contentp1 },
        { name: '\u200B', value: '\u200B' },
    )
    .setImage(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter('Brain bot', client.user.displayAvatarURL());

    const page2 = new MessageEmbed()
    .setColor('#c96b8d')
    .setTitle('Info du bot')
    .setURL(client.user.displayAvatarURL())
    .setAuthor('Brain bot', client.user.displayAvatarURL(), 'http://qdqsxsqdsqkhnkdjsnniufhksjdniohdlskkoihsollikh.com/')
    .setDescription('Tout ce que vous devez savoir concernant le bot réalisé par "par la barbe de Merlin" !')
    .setThumbnail('https://cdn.discordapp.com/avatars/536799645205135361/93860d695cb7ac4a12462d00af31ba0e.webp')
    .addFields(
        { name: 'Les Info', value: 'Brain bot est répond a la commande bb!<sujet> en cherchant sur le site https://haze-code.com le tuto associé a la recherche.\n Pour l\'instant sur le site les tuto dispo sont les suivants :\n ` id |     nom     | publique ? |           url           `\n` 01 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 02 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 03 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 04 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 05 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 06 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 07 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 08 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 09 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 10 |   exemple   |    `:x:`     | https://haze-code.com/  `' },
        { name: '\u200B', value: '\u200B' },
    )
    .setImage(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter('Brain bot', client.user.displayAvatarURL());

    const page3 = new MessageEmbed()
    .setColor('#c96b8d')
    .setTitle('Info du bot')
    .setURL(client.user.displayAvatarURL())
    .setAuthor('Brain bot', client.user.displayAvatarURL(), 'http://qdqsxsqdsqkhnkdjsnniufhksjdniohdlskkoihsollikh.com/')
    .setDescription('Tout ce que vous devez savoir concernant le bot réalisé par "par la barbe de Merlin" !')
    .setThumbnail('https://cdn.discordapp.com/avatars/536799645205135361/93860d695cb7ac4a12462d00af31ba0e.webp')
    .addFields(
        { name: 'Les Info', value: 'Brain bot est répond a la commande bb!<sujet> en cherchant sur le site https://haze-code.com le tuto associé a la recherche.\n Pour l\'instant sur le site les tuto dispo sont les suivants :\n ` id |     nom     | publique ? |           url           `\n` 01 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 02 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 03 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 04 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 05 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 06 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 07 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 08 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 09 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 10 |   exemple   |    `:x:`     | https://haze-code.com/  `' },
        { name: '\u200B', value: '\u200B' },
    )
    .setImage(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter('Brain bot', client.user.displayAvatarURL());

    const page4 = new MessageEmbed()
    .setColor('#c96b8d')
    .setTitle('Info du bot')
    .setURL(client.user.displayAvatarURL())
    .setAuthor('Brain bot', client.user.displayAvatarURL(), 'http://qdqsxsqdsqkhnkdjsnniufhksjdniohdlskkoihsollikh.com/')
    .setDescription('Tout ce que vous devez savoir concernant le bot réalisé par "par la barbe de Merlin" !')
    .setThumbnail('https://cdn.discordapp.com/avatars/536799645205135361/93860d695cb7ac4a12462d00af31ba0e.webp')
    .addFields(
        { name: 'Les Info', value: 'Brain bot est répond a la commande bb!<sujet> en cherchant sur le site https://haze-code.com le tuto associé a la recherche.\n Pour l\'instant sur le site les tuto dispo sont les suivants :\n ` id |     nom     | publique ? |           url           `\n` 01 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 02 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 03 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 04 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 05 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 06 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 07 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 08 |   exemple   |    `:x:`     | https://haze-code.com/  `\n` 09 |   exemple   |    `:white_check_mark:`     | https://haze-code.com/  `\n` 10 |   exemple   |    `:x:`     | https://haze-code.com/  `' },
        { name: '\u200B', value: '\u200B' },
    )
    .setImage(client.user.displayAvatarURL())
    .setTimestamp()
    .setFooter('Brain bot', client.user.displayAvatarURL());

    const page5 = new MessageEmbed()
    .setTitle('Page 5')
    .setDescription('this is an example for page 5')

    const page6 = new MessageEmbed()
    .setTitle('Page 6')
    .setDescription('this is an example for page 6')

    const page7 = new MessageEmbed()
    .setTitle('Page 7')
    .setDescription('this is an example for page 7')

    const page8 = new MessageEmbed()
    .setTitle('Page 8')
    .setDescription('this is an example for page 8')

    const page9 = new MessageEmbed()
    .setTitle('Page 9')
    .setDescription('this is an example for page 9')

    const page10 = new MessageEmbed()
    .setTitle('Page 10')
    .setDescription('this is an example for page 10')


    const pages = [page1,page2,page3,page4,page5,page6,page7,page8,page9,page10]

    const emoji = ["⏪", "⏩"]

    const timeout = '1000000000'

    pagination(msg, pages, emoji, timeout)
  }
});

client.login('ODM4MTMxODQxNzcyNDIxMTcx.YI2pGg.b9_3WDG71TxfM60vIjX5GjgGU9I');
