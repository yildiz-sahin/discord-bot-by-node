const Discord = require("discord.js"); // imports the discord library

const client = new Discord.Client(); // creates a discord client

client.once("ready", () => { // prints "Ready!" to the console once the bot is online
	console.log("Ready!");
});

function random(message) {
    const number = Math.random(); // generates a random number
    message.channel.send(number.toString()); // sends a message to the channel with the number
}

function greet(message) {
	const greeting= "hello to you too :)";
	message.channel.send(greeting);
}

let commands = new Map();
commands.set("random", random);
commands.set("hi" || "hello", greet);

client.on("message", message => {
    if (message.content[0] === '?') {
        const command = message.content.split(" ")[0].substr(1); // gets the command name
        if (commands.has(command)) { // checks if the map contains the command
            commands.get(command)(message) // runs the command
        }
    }
});

client.login(process.env.DISCORD_BOT_TOKEN); // starts the bot up