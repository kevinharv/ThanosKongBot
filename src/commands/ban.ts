import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class ban implements IBotCommand {
    
    private readonly _command = "ban"
    
    help(): string {
        return "(Admin Only) Bans the mentioned loser."
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        let mentionedUser = msgObject.mentions.users.first();
        let suppliedReason = args.slice(1).join(" ") || "";
        let banLog = `${msgObject.author.username}: ${suppliedReason}`;

        msgObject.delete();

        if(!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Nice try ${msgObject.author.username}, you are not an administrator.`)
            .then(msg =>{
                (msg as Discord.Message).delete(5000);
            });
            return;
        }

        if(!mentionedUser) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, I could not find that user.`)
            .then(msg =>{
                (msg as Discord.Message).delete(5000);
            });
            return;
        }

        msgObject.guild.member(mentionedUser).ban(banLog)
            .then(console.log)
            .catch(console.log)
    }


}