"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class help {
    constructor() {
        this._command = "help";
    }
    help() {
        return "This is a help command.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
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
exports.default = help;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9oZWxwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBZ0R0QyxDQUFDO0lBOUNHLElBQUk7UUFDQSxPQUFPLHlCQUF5QixDQUFBO0lBQ3BDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFRekUsTUFBTSxLQUFLLEdBQUc7WUFDVixPQUFPLEVBQUUsT0FBTztZQUNoQixNQUFNLEVBQUU7Z0JBQ0o7b0JBQ0ksSUFBSSxFQUFFLEtBQUs7b0JBQ1gsS0FBSyxFQUFFLHVCQUF1QjtpQkFDakM7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLHdCQUF3QjtpQkFDbEM7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLE1BQU07b0JBQ1osS0FBSyxFQUFFLHVDQUF1QztpQkFDakQ7Z0JBQ0Q7b0JBQ0ksSUFBSSxFQUFFLFVBQVU7b0JBQ2hCLEtBQUssRUFBRSxlQUFlO2lCQUN6QjtnQkFDRDtvQkFDSSxJQUFJLEVBQUUsWUFBWTtvQkFDbEIsS0FBSyxFQUFFLDRCQUE0QjtpQkFDdEM7YUFDSjtTQUNBLENBQUM7UUFDRixTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFMUMsQ0FBQztDQUdKO0FBbERELHVCQWtEQyJ9