const levels = {
  info: 'INFO',
  warn: 'WARN',
  error: 'ERROR',
  debug: 'DEBUG'
};

function log(level, message) {
  const tag = levels[level] || 'INFO';
  console.log(`[${new Date().toISOString()}] [${tag}] ${message}`);
}

module.exports = {
  info: msg => log('info', msg),
  warn: msg => log('warn', msg),
  error: msg => log('error', msg),
  debug: msg => log('debug', msg)
};

