const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.ODI3OTc5Njg4NDQxNTQ0NzA1.YGi6LA.hyxAeTdKtATG9d6VMhIb1GUhkyk);
