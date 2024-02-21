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
    .setDetails(`!? [${formatTime()}]`)
    .setStartTimestamp(Date.now())

    

    .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1208983204812431450/1209714464216318002/IMG_8524.jpg?ex=65e7ed63&is=65d57863&hm=90e55b946034fb02010786672c4ccccfcb7e77c6bfece07c583ae89a5631ccb6&') 
    .addButton('!?','https://discord.gg/blackparty')
    


  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `!?`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
