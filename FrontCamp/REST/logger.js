const winston = require('winston');
const tsFormat = () => (new Date()).toLocaleTimeString();
const fs = require('fs');
const env = process.env.NODE_ENV || 'development';
const logDir = 'log';
const logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({
            timestamp: tsFormat,
            colorize: true,
            level: 'info'
        }),
        new (winston.transports.File)({
            filename: `${logDir}/results.log`,
            timestamp: tsFormat,
            level: env === 'development' ? 'debug' : 'info'
        })
    ]
});
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

module.exports = logger;