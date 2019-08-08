"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class thanoskong {
    constructor() {
        this._command = "thanoskong";
    }
    help() {
        return "This command sends images of our lord and savior, Thanos Kong!";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        var img1 = "../src/commands/images/thanosKong1.png";
        var img2 = "../src/commands/images/thanosKong2.png";
        var img3 = "../src/commands/images/thanosKong3.png";
        var img4 = "../src/commands/images/thanosKong4.png";
        var img5 = "../src/commands/images/thanosKong5.png";
        var img6 = "../src/commands/images/thanosKong6.png";
        var imageArray = [img1, img2, img3, img4, img5, img6];
        var rand = imageArray[Math.floor(Math.random() * imageArray.length)];
        msgObject.channel.send({ files: [rand] });
    }
}
exports.default = thanoskong;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhhbm9za29uZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy90aGFub3Nrb25nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBNEI1QyxDQUFDO0lBMUJHLElBQUk7UUFDQSxPQUFPLGdFQUFnRSxDQUFBO0lBQzNFLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsSUFBSSxJQUFJLEdBQUcsd0NBQXdDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsd0NBQXdDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsd0NBQXdDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsd0NBQXdDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsd0NBQXdDLENBQUM7UUFDcEQsSUFBSSxJQUFJLEdBQUcsd0NBQXdDLENBQUM7UUFFcEQsSUFBSSxVQUFVLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXRELElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVyRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUU1QyxDQUFDO0NBR0o7QUE5QkQsNkJBOEJDIn0=