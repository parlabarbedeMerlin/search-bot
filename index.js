const Discord = require('discord.js');
const config = require('./config.json');
const Builder = require('@discordjs/builders');
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
})


function occurenceofword(word, sentence) {
    if ((sentence.match(new RegExp(word, "g")) || []).length >= 1) {
        return true;
    }
    return false;
}
function occurenceoflist(wordlist, sentence) {
    for (let i = 0; i < wordlist.length; i++) {
        if (occurenceofword(wordlist[i], sentence)) {
            return true;
        }
    }
    return false;
}
const comment=['commen','comen','comman','coman']
const faire=['faire','fais','fait','faire']
const créer=['créer','crée','cré','crée']

function ishelp(message) {
    const content = message.content.toLowerCase();
    if (occurenceoflist(comment, content) && (occurenceoflist(faire, content) || occurenceoflist(créer, content))) {
        return true;
    }
}


const serp = require("serp");

async function ggsearch(s,x){
    var options = {host : "google.fr", qs : {q : s+" "+x, filter : 0, pws : 0}, num : 10};
    const links = await serp.search(options);
    var linkr= [];
    var title = [];
    for (var i = 0; i < links.length; i++){
        linkr.push(links[i]['url']);
        title.push(links[i]['title']);
    }
    return [linkr,title];
}

const ping = new Builder.SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong !')

const help = new Builder.SlashCommandBuilder()
    .setName('help')
    .setDescription('Aide')

const search = new Builder.SlashCommandBuilder()
    .setName('search')
    .setDescription('recherche sur google')
    .addStringOption(option => option.setName('search').setDescription('choisissez le moteur de recherche').setRequired(true).addChoice('google','google').addChoice('mcreator','mcreator').addChoice('java documentation','java documentation').addChoice('forge java','forge java').addChoice('forge java docs','forge java docs'))
    .addStringOption(option => option.setName('input').setDescription('Enter a string').setRequired(true))

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    client.application.commands.create(ping)
    client.application.commands.create(help)
    client.application.commands.create(search)

    new Builder.ContextMenuCommandBuilder()
        .setName('ping')
        .setType(2)


    client.user.setActivity("/help", {type: config.activity[1]})
});

client.on('messageCreate',message => {
    console.log(message.channel.type)
    if(((message.author.bot)== false) && ((message.channelId==674189719789240320)|| (message.channelId==725398786033320087) || true)){
        console.log(message.content)
        if (ishelp(message)) {
            searchwgg2(message)
        }
    }
})

client.on("interaction", interaction => {
    if(interaction.isCommand()){
        if(interaction.commandName === "ping"){
            pingr(interaction)
        }else if(interaction.commandName === "help"){
            pingv(interaction)
        }else if(interaction.commandName === "search"){

                try {
                    searchwgg(interaction)
                }catch (e) {
                    const embed = new Discord.MessageEmbed()
                        .setTitle("Erreur")
                        .setDescription("Une erreur est survenue")
                        .setColor(0xFF0000)
                        .setFooter("Erreur")
                    interaction.reply({embed: [embed] , ephemeral: true})
                }

        }
    }else if (interaction.isButton()){
        if (interaction.customId === "Ping"){
            pingr(interaction)
        }
    }
})


function pingv(interaction) {
    const embed = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription("Ce bot a été créé par <@536799645205135361> dans le but de vous aider a trouver des ressouces suceptible de vous aider !\nㅤ- `/ping` : pong! renvoie le délais de réponse avec le bot.\nㅤ- `/search` : recherche sur google sur le moteur spécifié.\nㅤ- `/help` : affiche ce message d'aide.\n ")
        .setColor('#2F3136')
    interaction.reply({embeds: [embed], ephemeral: true })
    console.log("pong ! "+client.ws.ping  + "ms")
}


function pingr(interaction) {
    const embed = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(`${client.ws.ping} ms    :satellite_orbital: `)
        .setThumbnail("https://www.lalibre.be/resizer/WF615KUSqoNnx1lrgByLOzwuS8s=/640x0:2560x1280/768x512/filters:quality(70):format(jpg)/cloudfront-eu-central-1.images.arcpublishing.com/ipmgroup/T24ECASTIVBRZLNTJYKUNKMCAM.jpg")
        .setColor('#2F3136')

    const row = new Discord.MessageActionRow()
        .addComponents(
            new Discord.MessageButton()
                .setCustomId('primary')
                .setLabel('Ping again')
                .setCustomId('Ping')
                .setStyle('SECONDARY'),

        );
    interaction.reply({embeds: [embed], components: [row] , ephemeral: true })
    console.log("pong ! "+client.ws.ping  + "ms")
}

function searchwgg(tthr) {
    const usern = tthr.user
    const rechercheembed = new Discord.MessageEmbed()
        .setTitle("Recherche en cours...")
        .setColor('#2F3136')
    tthr.reply({embeds: [rechercheembed],ephemeral: true })
    const search = tthr.options.getString('input');
    const v = ggsearch(search,tthr.options.getString('search'));
    var strsearch = "";
    v.then(function(linkr){
        for (var i = 0; i < linkr[0].length; i++){
            strsearch += ""+linkr[1][i] + " :\n" + linkr[0][i] + "\n\n"
        }
        const embed = new Discord.MessageEmbed()
            .setTitle("résultat")
            .setAuthor("Brain Bot", client.user.avatarURL())
            .setColor('#2F3136')
            .setDescription(`Voici les résultat trouvé par google avec la recherche : " ${search}" \n\n`+strsearch)
        console.log(strsearch)
        tthr.editReply({embeds: [embed], ephemeral: true })
    });
}

function searchwgg2(tthr) {
    //check if mp of user are close

    const usern = tthr.author
    const search = tthr.content;
    const v = ggsearch(search,'mcreator');
    var strsearch = "";
    v.then(function(linkr){
        for (var i = 0; i < linkr[0].length; i++){
            strsearch += ""+linkr[1][i] + " :\n" + linkr[0][i] + "\n\n"
        }
        const embed = new Discord.MessageEmbed()
            .setTitle("résultat")
            .setAuthor("Brain Bot", client.user.avatarURL())
            .setColor('#2F3136')
            .setDescription(`Voici les ressources qui peuvent vous intéresser : \n\n`+strsearch)
        console.log(strsearch)
        if(tthr.channelId == 674189719789240320 || tthr.channelId==725398786033320087){
            tthr.author.send({embeds: [embed]})
                .catch(()=> console.log("pas de mp"))
        } else {console.log('not send for bad channel !')}
    });
}


client.login(config.token);
