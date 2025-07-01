const fs = require('fs');
const path = require('path');
const logger = require('../util/logger');

module.exports = function registerEvents(client, dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.js'));
  for (const file of files) {
    try {
      const event = require(path.join('..', dir, file));
      if (event.once) {
        client.once(event.name, (...args) => event.execute(...args, client));
      } else {
        client.on(event.name, (...args) => event.execute(...args, client));
      }
      logger.debug(`Registered event ${event.name}`);
    } catch (err) {
      logger.error(`Failed to register event ${file}: ${err.message}`);
    }
  }
};

