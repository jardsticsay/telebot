// const express = require('express')
// const app = express();
// const port = 8000;

// app.get('/', (req, res) => {
//   res.send('This is Jarryd!')
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}!`)
// });
const TeleBot = require("telebot");

const bot = new TeleBot({
    token:"1636726408:AAFud23JIdZUHAh5BdW_Bancm5gBc2lPKIM",
});

bot.on(["/start","hello"], (msg) => {
    console.log(msg);
    bot.sendMessage(msg.from.id,`Hello ${msg.chat.username}`);
});

bot.start();