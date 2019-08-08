import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class thanoskong implements IBotCommand {
    
    private readonly _command = "thanoskong"
    
    help(): string {
        return "This command sends images of our lord and savior, Thanos Kong!"
    } 
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }
    
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): void {
       
        var img1 = "../src/commands/images/thanosKong1.png";
        var img2 = "../src/commands/images/thanosKong2.png";
        var img3 = "../src/commands/images/thanosKong3.png";
        var img4 = "../src/commands/images/thanosKong4.png";
        var img5 = "../src/commands/images/thanosKong5.png";
        var img6 = "../src/commands/images/thanosKong6.png";

        var imageArray = [img1, img2, img3, img4, img5, img6];

        var rand = imageArray[Math.floor(Math.random() * imageArray.length)];

        msgObject.channel.send({files: [rand]});
      
    }


}