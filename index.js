/*
    By
          _____ _            __     __    
         / ____| |           \ \   / /    
        | (___ | | ____ _  __ \ \_/ /___  
         \___ \| |/ / _` |/ _` \   /_  /  
         ____) |   < (_| | (_| || | / /  _ 
        |_____/|_|\_\__,_|\__,_||_|/___ (_)                                                                
*/


// Requires creation
const Discord = require("discord.js");
const hubBot = require("./hubBot.json");



// Principal variables
const client = new Discord.Client();
const prefix = hubBot.prefix;



// Clients
client.on("ready", () => {
    client.guilds.forEach((guild) => {
        client.user.setActivity("Hey, tape !faq, !liens ou !gta");
    })
    console.log("[SKA'BOT] Online.")
})

client.on("warn", console.warn);
client.on("error", console.warn);
client.on("disconnect", () => console.log("[SKA'BOT] Disconnected."));
client.on("reconnecting", () => console.log("[SKA'BOT] Reconnected."));

client.login(hubBot.token)



// Commands
client.on("message", async message => {
    // Variables
    let args = message.content.substring(hubBot.prefix.length).split(" ")

    // Conditions checking
    if(message.author.equals(client.user)) return;
    if(!message.content.startsWith(hubBot.prefix)) return;

    // Switch case
    switch(args[0]) {
        case "liens":
            embed = new Discord.RichEmbed()

            .setTitle(":link:   **HubBot - Liens Utiles**   :link:")
            .addBlankField(true)
            .setColor(0xFFFFFF)
            .setThumbnail("https://cdn.discordapp.com/attachments/346393516634537984/554016693391982593/logo.png")
            .addField("**Site/Forum:** http://hubroleplay.net/", "** **")
            .addField("**IP du serveur:** Indisponible pour le moment", "** **");
            
            message.channel.send({embed});
        break;


        case "faq":
            embed = new Discord.RichEmbed()

            .setTitle(":link:   **HubBot - FAQ**   :link:")
            .addBlankField(true)
            .setColor(0xFFFFFF)
            .setThumbnail("https://cdn.discordapp.com/attachments/346393516634537984/554016693391982593/logo.png")
            .addField("**Est-ce que le serveur est ouvert ?**", "Non, pas encore mais le forum est bientôt disponible.")
            .addField("**Est-ce possible de faire des projets (gangs/mafia/assos/autre) ?**", "Oui, bien évidemment vous pourrez poster vos threads directement sur le forum une fois ouvert.")
            .addField("**Des skins personnalisés seront sur le serveur ?**", "Oui, dont un pack skin perso à 2e où vous pourrez avoir votre skin IG et des skins additionnels pour les factions.")
            .addField("**J'aimerai acheter un Garage en leasing IG, comment faire ?**", "Une fois le forum ouvert, vous pourrez remplir le formulaire d'achat d'un Garage.\nDeux choix s'offrent à vous: Garage de El Corona ou le Garage North LS")
            .addField("**Quels sont les jobs à la recherche de leader ?**", "- Los Santos Fire Department\n- Les deux garages en leasing\n- La Mairie de Los Santos")
            .addField("**Allez-vous utiliser des batiments Open World ?**", "Nos moddeurs travaillent actuellement sur ça, des maps open world vous seront bientôt dévoilées.")
            .addField("**J'ai une question technique liée au serveur, que faire ?**", "Rendez-vous au #support pour poster votre question.");
            
            message.channel.send({embed});
        break;


        case "gta":
            message.channel.sendMessage(":shad: **Lien pour télécharger GTA: ** http://k6.re/iE0k3");
        break;
    }
})
