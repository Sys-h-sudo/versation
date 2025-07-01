require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const logger = require('./util/logger');
const loadCommands = require('./handlers/commandHandler');
const registerEvents = require('./handlers/eventHandler');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = loadCommands('src/commands');
registerEvents(client, 'src/events');

client.on('error', error => logger.error(`Client error: ${error}`));
client.on('warn', info => logger.warn(info));

client.login(process.env.DISCORD_TOKEN).catch(err => {
  logger.error(`Failed to login: ${err.message}`);
});

