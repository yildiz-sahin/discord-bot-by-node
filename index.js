const Discord = require("discord.js"); // imports the discord library
const fs = require("fs"); // imports the file io library

const client = new Discord.Client(); // creates a discord client
const token = fs.readFileSync("token.txt").toString(); // gets your token from the file

// console.log(token);

client.once("ready", () => { // prints "Ready!" to the console once the bot is online
	console.log("Ready!");
});


// ...

// client.on("message", message => { // runs whenever a message is sent
//    if (message.content === "random") { // checks if the message says "?random"
//        const number = Math.random(); // generates a random number
//        message.channel.send(number.toString()); // sends a message to the channel with the number
//    }
// });

// ...


function random(message) {
    const number = Math.random(); // generates a random number
    message.channel.send(number.toString()); // sends a message to the channel with the number
}

let commands = new Map();
commands.set("random", random);

client.on("message", message => {
    if (message.content[0] === '?') {
        const command = message.content.split(" ")[0].substr(1); // gets the command name
        if (commands.has(command)) { // checks if the map contains the command
            commands.get(command)(message) // runs the command
        }
    }
});

// ...

client.login(process.env.DISCORD_BOT_TOKEN); // starts the bot up