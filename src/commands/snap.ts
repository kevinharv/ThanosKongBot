import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class snap implements IBotCommand {

    private readonly _command = "snap"

    help(): string {
        return "(Admin Only) Deletes the desired number of messages in the channel."
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
        //Purges messages
        msgObject.delete();

        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, this command is admin only.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
            return;
        }

        if(!args[0]){
            msgObject.channel.send(`Sorry ${msgObject.author.username}, you must supply a number of messages to be snapped away.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
            return;
        }

        let numberOfMessagesToDelete = Number(args[0]);

        if(isNaN(numberOfMessagesToDelete)){
            msgObject.channel.send(`Sorry ${msgObject.author.username}, that is not a valid number.`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000);
                });
            return;
        }

        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);

        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);

    }


}