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
 .setAssetsLargeImage('mp:attachments/991719725019181076/1217602235228491908/36.gif?ex=66049f72&is=65f22a72&hm=30f0c7dac863c879b7d0f704653c128e32f8f2e3cd9f6d2abaa8bbd2a0509a00&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('lover') //Text when you hover the Large image
    .setAssetsSmallImage('mp:attachments/991719725019181076/1214718883672490085/1129575327291682866.gif?ex=65fa221e&is=65e7ad1e&hm=f5c75db41412d26a4244c20e6b02a3057bfcde7539c826b12083d4f6ac101e8d&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('lost') //Text when you hover the Small image
    .addButton('♱', 'https://www.last.fm/user/scaryloved')
    .addButton('glory', 'https://letterboxd.com/periwinkler/');

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `blood`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
