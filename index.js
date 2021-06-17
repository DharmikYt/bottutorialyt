const Aoijs = require("aoi.js")

const bot = new Aoijs.Bot({
token: "ODUwNDExNjM1NTMyNzU5MDUw.YLpVjQ.4hshcSFy_ORlOPbUlQ0L1ds2JWI", //Discord Bot Token
prefix: "!" //Customizable
})
bot.onMessage() //Allows to run Commands

bot.command({
name: "ping", //Trigger name (command name)
code: `$ping Pong!` //Code
})

bot.readyCommand({
    channel: "", //You can use this or not.
    code: `$log[Ready on $userTag[$clientID]]` //Enter the code / message.
})