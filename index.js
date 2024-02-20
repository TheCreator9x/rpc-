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
    .setDetails(`/yxn [${formatTime()}]`)
    .setStartTimestamp(Date.now())

    

    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1208983204812431450/1209372653643636736/a_16ff0008cf4d09d4a4a569214d07ff3a.gif?ex=65e6af0d&is=65d43a0d&hm=1611b15394606aab1db3a5732be1f10045f9a1f4bdee8aa4b1cce54d3cabf1bf&') 
    .addButton('/','https://discord.gg/blackparty')
    


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `/`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
