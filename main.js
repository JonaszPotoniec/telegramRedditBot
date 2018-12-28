const request = require('request');
const cheerio = require('cheerio');
const TelegramBot = require('node-telegram-bot-api');
const sqlite = require('sqlite3');
const config = require('./config.json');

let lastUrl = new Array(config.url.length);

const bot = new TelegramBot(config.token, {polling: true});
let db = new sqlite.Database('./sqlite.db');

function checkUpdates(){
    console.log("refreshing");
    config.url.forEach(function(element, index){
        request(
            { url: element },
            function(error, response, body) {
                if(error){
                    throw errorZz;
                }else{
                    var $ = cheerio.load(body);
                    let newUrl = $('.media-element').attr("src");
                    if(lastUrl[index] != newUrl){
                        lastUrl[index] = newUrl;
                        sendPhoto(newUrl);
                    }
                }
            }
        );
    })
}

function sendPhoto(url){
    db.all('SELECT id FROM userId', [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            bot.sendPhoto(row.id, url);
        });
    });
}

bot.on('message', (msg) => {
    switch(msg['text']){
        case "/start":
            db.run('insert or ignore into userId values (' + msg.chat.id + ')');
            break;
        case "/stop":
            db.run('delete from userId where id = ' + msg.chat.id);
            break;
        case "/help":
            bot.sendMessage(
                msg.chat.id, "Available commands: \n /start - start subscription  \n /stop - stop subscription "
            );
            break;
    }
});

if(config.frequency != 0){
    setInterval(checkUpdates, config.frequency);
}else{
    checkUpdates();
}
