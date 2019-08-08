import * as Discord from "discord.js";
import * as ConfigFile from "./config";
import { IBotCommand } from "./api";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {
    //Let us know that the bot is online.
    console.log("THANOS BOT INITIALIZED");
    client.user.setActivity("STOMPING COMMUNISM", { type: "PLAYING" });
})

client.on("message", msg => {
    //Ignore message if sent by bot
    if (msg.author.bot) { return; }

    //Ignore message if sent in DMs
    if (msg.channel.type == "dm") { return; }

    //Ignore message if not using prefix
    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }

    //Handle the command
    handleCommand(msg);
})

async function handleCommand(msg: Discord.Message) {

    //Split string into command and args
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "");
    let args = msg.content.split(" ").slice(1);

    for (const commandClass of commands) {
        //Attempt code execution
        try {
            if (!commandClass.isThisCommand(command)) {
                continue;
            }
            //Pause execution while running code
            await commandClass.runCommand(args, msg, client);
        }
        catch (exception) {
            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    if (!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Loop through all of commands in ConfigFile
    for (const commandName of ConfigFile.config.commands as string[]) {

        const commandClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(process.env.BOT_TOKEN);