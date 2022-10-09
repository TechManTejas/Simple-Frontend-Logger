const getDateTime = () => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    return dateTime;
}

class Log{
    constructor(time, level, message){
        this.time = time;
        this.level = level;
        this.message = message;
    }
}

class Logger {
    // ================================================
    // Time Settings
    timeFormat = "DD/MM/YYYY HH:mm:ss"

    // Log Level Settings
    // 0 - "ERROR"
    // 1 - "WARN"
    // 2 - "INFO"
    // 3 - "DEBUG"
    level = 3

    // Shortcut keys
    _save_logs_key = 'q'
    _console_logs_key = 'b'
    _clear_logs_key = 'm'

    // File Extension
    fileFormat = "SIMPLE" //(SIMPLE / LOG / JSON)
    // ================================================

    logs = []

    log(level, message) {
        switch (level) {
            case 0:{
                this.error(message)
                break
            }
            case 1: {
                this.warn(message)
                break
            }
            case 2: {
                this.info(message)
                break
            }
            case 3: {
                this.debug(message)
                break
            }
        }
    }

    error(message) {
        if(this.level>=0){
            console.error(getDateTime(), "ERROR", message)
            this.logs.push(new Log(getDateTime(), "ERROR", message))
        }
    }

    warn(message) {
        if (this.level>=1){
            console.warn(getDateTime(), "WARN", message)
            this.logs.push(new Log(getDateTime(), "WARN", message))
        }
    }

    info(message) {
        if (this.level>=2){
            console.info(getDateTime(), "INFO", message)
            this.logs.push(new Log(getDateTime(), "INFO", message))
        }
    }

    debug(message) {
        if (this.level>=3){
            console.debug(getDateTime(), "DEBUG", message)
            this.logs.push(new Log(getDateTime(), "DEBUG", message))
        }
    }

    consoleLogs() {
        this.logs.forEach(log => {
            console.log(log)
        });
    }

    saveLogs(){

        var body = "";
        
        if (this.fileFormat == "JSON"){
            body = "[\n"
            this.logs.forEach(log => {
                body += JSON.stringify(log)
                if (this.logs.indexOf(log) != this.logs.length - 1) {
                    body += ',\n'
                }
            })
            body += '\n]'
        }
        else if (this.fileFormat == "SIMPLE" || this.fileFormat == "LOG"){
            this.logs.forEach(log => {

                for(var key in log) {
                    if(key == "message"){
                        body += " "+ JSON.stringify(log[key])
                    }else{
                        body += " " + log[key].toString()
                    }
                } 

                if (this.logs.indexOf(log) != this.logs.length - 1) {
                    body += '\n'
                }
            })
        }

        var data = "data:text/json;charset=utf-8," + encodeURIComponent(body);
        var tempElement = document.createElement("a");
        tempElement.setAttribute("href", data);

        var extension;
        if (this.fileFormat == "JSON"){
            extension = "json";
        } else if (this.fileFormat == "SIMPLE"){
            extension = "txt";
        } else if (this.fileFormat == "LOG"){
            extension = "log";
        }

        tempElement.setAttribute("download", "logs." + extension);
        tempElement.click();
    }

    clearLogs() {
        this.logs = [];
    }
}

var logger = new Logger();
logger.fileFormat = "JSON"
window.addEventListener('keyup', function (event) {
    console.log(event.key)
    if (event.ctrlKey && event.key === logger._save_logs_key) {
        logger.saveLogs()
    }
    if (event.ctrlKey && event.key === logger._console_logs_key) {
        logger.consoleLogs()
    }
    if (event.ctrlKey && event.key === logger._clear_logs_key) {
        logger.clearLogs()
    }
});
export default logger;
