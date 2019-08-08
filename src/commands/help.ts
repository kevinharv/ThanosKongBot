import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class help implements IBotCommand {
    
    private readonly _command = "help"
    
    help(): string {
        return "This is a help command."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        //Let us know if all went well!
        //msgObject.channel.send("BAN: Bans a targeted user.");
        //msgObject.channel.send("KICK: Kicks a targeted user.");
        //msgObject.channel.send("SNAP: Deletes the number of messages input.");
        //msgObject.channel.send("COINFLIP: Flips a coin.");
        //msgObject.channel.send("THANOSKONG: Hails our Lord and savior.");

        const embed = {
            "color": 8388736,
            fields: [
                {
                    name: 'BAN',
                    value: 'Bans a targeted user.'
                },
                {
                    name: 'KICK',
                    value: 'Kicks a targeted user.'
                },
                {
                    name: 'SNAP',
                    value: 'Deletes specified number of messages.'
                },
                {
                    name: 'COINFLIP',
                    value: 'Flips a coin.'
                },
                {
                    name: 'THANOSKONG',
                    value: 'Hails our Lord and Savior.'
                }
            ]
            };
            msgObject.channel.send({ embed });

    }


}