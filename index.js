const Discord = require('discord.js');
const client = new Discord.Client();

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
})

client.on('message', message => {
  if (message.content === 'bonjour') {
    message.reply('Bonjour Bienvenu sur le serveur 91M2')
  }
})

client.on('message', message => {
  if (message.content === 'jour') {
    message.reply('Bonne journée sur le serveur 91M2')
	   }
})

client.on('message', message => {
  if (message.content === 'bye') {
    message.reply('Bonne soirée et à demain')
  }
})

client.on('guildMemberAdd', member => {
  member.createDM().then(channel => {
    return channel.send('Bienvenue sur le serveur 91M2' + member.displayName)
  }).catch(console.error)
  // On pourrait catch l'erreur autrement ici (l'utilisateur a peut être désactivé les MP)
})

client.login(process.env.TOKEN);


