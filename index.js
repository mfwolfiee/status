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
    .setApplicationId('534203414247112723')
    .setType('STREAMING')
    .setURL('https://www.twitch.tv/tsireyaaa') //Must be a youtube video link 
    .setState('𝔠𝔞𝔯𝔫𝔞𝔤𝔢')
    .setName('star')
    .setDetails(`༺♰༻ [${formatTime()}]`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('mp:attachments/991719725019181076/1203574121129054338/33.gif?ex=65d196bf&is=65bf21bf&hm=299b6689f56d7388403288069c6362415b0fae306f12e99353ab9c65e209f07a&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('lover') //Text when you hover the Large image
    .setAssetsSmallImage('mp:attachments/1078599543693787266/1184442280111779880/1129575327291682866.gif?ex=658bfcd5&is=657987d5&hm=d323fb67bcd0e005580a6bab&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('lost') //Text when you hover the Small image
    .addButton('♱', 'https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz?si=5fcc5244c9ae4d8e')
    .addButton('glory', 'https://open.spotify.com/track/1NZs6n6hl8UuMaX0UC0YTz?si=5fcc5244c9ae4d8e');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `murder`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
