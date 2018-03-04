
module.exports = function(log4js){
   
    log4js.configure(
        {
            appenders: {
                file: {
                type: 'file',
                filename: 'logs/app.log',
                maxLogSize: 50 * 1024 * 1024, // = 10Mb
                numBackups: 1, // keep five backup files
                compress: true, // compress the backups
                encoding: 'utf-8',
                mode: 0o0640,
                flags: 'w+'
                },
                dateFile: {
                type: 'dateFile',
                filename: 'logs/app.log',
                pattern: 'yyyy-MM-dd-hh',
                compress: true
                },
                out: {
                type: 'stdout'
                }
            },
            categories: {
                info : { appenders: ['file', 'dateFile'], level: 'info' },
                default: { appenders: ['file', 'dateFile', 'out'], level: 'trace' },
                debug: { appenders: ['file', 'dateFile'], level: 'trace' },
            }
        });

    return log4js;
};


