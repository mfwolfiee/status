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
 .setAssetsLargeImage('mp:attachments/991719725019181076/1228119714195181608/37.gif?ex=662ae29d&is=66186d9d&hm=9a63e52a828a13bccd55264a91b13e3baed75659613757989d1f7ab153aa0209&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('lover') //Text when you hover the Large image
    .setAssetsSmallImage('mp:attachments/991719725019181076/1228119864623763629/57867.gif?ex=662ae2c1&is=66186dc1&hm=5def1aff24ee149b27eb46bfb039bba3346cba3b123f6a19fef08599526cc89c&') //You can put links in tenor or discord and etc.
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
