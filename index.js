const Discord = require('discord.js');
const client = new Discord.Client();

//Toutes les actions à faire quand le bot se connecte
client.on("ready", function () {
    console.log("Mon BOT est Connecté");
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Notre bot doit savoir s’il doit executer une commande
    // Il sera réceptif en message placés après `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !intro
            case 'intro':
                bot.sendMessage({
                    to: channelID,
                    message: ‘Bienvenus sur le serveur 91M2! '
                });
            break;
            // Ajouter si vous souhaitez d’autres commandes
         }
     }
});

client.login(process.env.TOKEN);


