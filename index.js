const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'Asia/Manila', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1087940913348743189')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/losfutbolitos') //Must be a youtube video link 
    
    .setName('/yxn')
    .setDetails(`/氏さた [${formatTime()}]`)
    .setStartTimestamp(Date.now())

    

    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1208983204812431450/1209372592406929489/d15c00a80b2d20cb06ad375873170f56.jpg?ex=65e6aeff&is=65d439ff&hm=b62179db321b27095185c6a352bae25c6db99fd0b16324780b6fdd2e85bca3e4&') 
    .addButton('/氏沙汰','https://discord.gg/blackparty')
    


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `/たててた`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
