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
        var img1 = "/images/thanosKong1.png";
        var img2 = "/images/thanosKong2.png";
        var img3 = "/images/thanosKong3.png";
        var img4 = "/images/thanosKong4.png";
        var img5 = "/images/thanosKong5.png";
        var img6 = "/images/thanosKong6.png";
        var imageArray = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`, `${img6}`];
        var rand = imageArray[Math.floor(Math.random() * imageArray.length)];
        msgObject.channel.send({ files: ["/images/thanosKong1.png"] });
    }
}
exports.default = thanoskong;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia29uZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9rb25nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBeUI1QyxDQUFDO0lBdkJHLElBQUk7UUFDQSxPQUFPLGdFQUFnRSxDQUFBO0lBQzNFLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFDekUsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDckMsSUFBSSxJQUFJLEdBQUcseUJBQXlCLENBQUM7UUFDckMsSUFBSSxVQUFVLEdBQUcsQ0FBQyxHQUFHLElBQUksRUFBRSxFQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUMsR0FBRyxJQUFJLEVBQUUsRUFBQyxHQUFHLElBQUksRUFBRSxFQUFDLEdBQUcsSUFBSSxFQUFFLEVBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBRS9FLElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVyRSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBRSxDQUFDLHlCQUF5QixDQUFDLEVBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7Q0FHSjtBQTNCRCw2QkEyQkMifQ==