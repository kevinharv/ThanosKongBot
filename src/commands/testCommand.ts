import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class testCommand implements IBotCommand {
    
    private readonly _command = "testCommand"
    
    help(): string {
        return "This command does nothing!"
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        //Let us know if all went well!
        msgObject.channel.send("THANOS KONG SNAPS HIS FINGERS AT THEE");
        msgObject.channel.send({files: ["../thanos_kong.png"]});
    }


}