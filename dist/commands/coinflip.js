"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class coinFlip {
    constructor() {
        this._command = "coinflip";
    }
    help() {
        return "This command flips a coin.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var winner;
        const result = Math.round(Math.random());
        if (result == 1) {
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
exports.default = coinFlip;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29pbmZsaXAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29tbWFuZHMvY29pbmZsaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxNQUFxQixRQUFRO0lBQTdCO1FBRXFCLGFBQVEsR0FBRyxVQUFVLENBQUE7SUErQjFDLENBQUM7SUE3QkcsSUFBSTtRQUNBLE9BQU8sNEJBQTRCLENBQUE7SUFDdkMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjtRQUV6RSxJQUFJLE1BQU0sQ0FBQztRQUNYLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7UUFFekMsSUFBRyxNQUFNLElBQUksQ0FBQyxFQUFDO1lBQ1gsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUNwQjthQUNJO1lBQ0QsTUFBTSxHQUFHLE9BQU8sQ0FBQztTQUNwQjtRQUVELE1BQU0sS0FBSyxHQUFHO1lBQ1YsT0FBTyxFQUFFLGlCQUFpQixNQUFNLEVBQUU7WUFDbEMsT0FBTyxFQUFFLE9BQU87U0FDZixDQUFDO1FBQ0YsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBRTFDLENBQUM7Q0FHSjtBQWpDRCwyQkFpQ0MifQ==