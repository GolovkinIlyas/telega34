const { Telegraf, Markup } = require('telegraf');

const bot = new Telegraf('6125334597:AAE77IOh4B8cov71IDAB4AANEwtbwThJK2s');

const keyboard = Markup.keyboard([
    ['BMW'],
    ['HONDA'],
    ['AUDI'],
    ['CHIGA']
]).resize().oneTime();

bot.start((ctx) => ctx.reply('Привет! Я бот, который прошивает определенную марку машину.' , keyboard));

bot.hears('BMW' , (ctx) => {
    ctx.reply('прошивка Е34: 15000', keyboard);
    ctx.reply('прошивка Е70: 12000' , keyboard);
    ctx.reply('прошивка Е38: 18000' , keyboard);
});

bot.hears('HONDA' , (ctx) => {
    ctx.reply('прошивка CORENTO: 12000' , keyboard);
    ctx.reply('прошивка CRV: 11000' , keyboard);
    ctx.reply('прошивка STREAM: 10000' , keyboard);
});

bot.hears('AUDI' , (ctx) => {
    ctx.reply('прошивка AUDI Q8: 15000' , keyboard);
    ctx.reply('прошивка AUDI A4: 18000' , keyboard);
    ctx.reply('прошивка AUDI A8: 20000' , keyboard);
});

bot.hears('CHIGA' , (ctx) => {
    ctx.reply('прошивка CHIGA 99: 5000' , keyboard);
    ctx.reply('прошивка CHIGA 14: 4000' , keyboard);
    ctx.reply('прошивка CHIGA 07: 6000' , keyboard);

});



bot.launch();
