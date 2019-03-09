const Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("TEST");
    console.log("le bot est connecté");
});

bot.login("NTU0MDM4MTI2NDc4MjI5NTA0.D2W1KQ.ox-jzp6C1pNSWdsKxhCzBLPSWeY");
