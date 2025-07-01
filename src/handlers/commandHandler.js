const { Collection } = require('discord.js');
const fs = require('fs');
const path = require('path');
const logger = require('../util/logger');

module.exports = function loadCommands(dir) {
  const commands = new Collection();
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  for (const file of files) {
    try {
      const command = require(path.join('..', dir, file));
      if (command.data && command.execute) {
        commands.set(command.data.name, command);
        logger.debug(`Loaded command ${command.data.name}`);
      }
    } catch (err) {
      logger.error(`Failed to load command ${file}: ${err.message}`);
    }
  }
  return commands;
};

