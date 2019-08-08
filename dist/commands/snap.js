"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class snap {
    constructor() {
        this._command = "snap";
    }
    help() {
        return "(Admin Only) Deletes the desired number of messages in the channel.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        msgObject.delete();
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, this command is admin only.`)
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        if (!args[0]) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, you must supply a number of messages to be snapped away.`)
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        let numberOfMessagesToDelete = Number(args[0]);
        if (isNaN(numberOfMessagesToDelete)) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, that is not a valid number.`)
                .then(msg => {
                msg.delete(5000);
            });
            return;
        }
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete);
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }
}
exports.default = snap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic25hcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zbmFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsTUFBcUIsSUFBSTtJQUF6QjtRQUVxQixhQUFRLEdBQUcsTUFBTSxDQUFBO0lBZ0R0QyxDQUFDO0lBOUNHLElBQUk7UUFDQSxPQUFPLHFFQUFxRSxDQUFBO0lBQ2hGLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFRCxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7UUFFekUsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSwrQkFBK0IsQ0FBQztpQkFDcEYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNQLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFDLENBQUMsQ0FBQyxDQUFDO1lBQ1AsT0FBTztTQUNWO1FBRUQsSUFBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBQztZQUNSLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLDREQUE0RCxDQUFDO2lCQUNqSCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLHdCQUF3QixHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUvQyxJQUFHLEtBQUssQ0FBQyx3QkFBd0IsQ0FBQyxFQUFDO1lBQy9CLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLCtCQUErQixDQUFDO2lCQUNwRixJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ1AsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7WUFDUCxPQUFPO1NBQ1Y7UUFFRCx3QkFBd0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFFaEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsd0JBQXdCLENBQUM7YUFDakQsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUU5QixDQUFDO0NBR0o7QUFsREQsdUJBa0RDIn0=