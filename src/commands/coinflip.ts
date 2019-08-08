import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class coinFlip implements IBotCommand {
    
    private readonly _command = "coinflip"
    
    help(): string {
        return "This command flips a coin."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        
        var winner;
        const result = Math.round(Math.random());

        if(result == 1){
            winner = "HEADS";
        }
        else {
            winner = "TAILS";
        }

        const embed = {
            "title": `The result is ${winner}`,
            "color": 8388736,
            };
            msgObject.channel.send({ embed });

    }


}