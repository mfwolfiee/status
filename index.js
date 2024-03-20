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
 .setAssetsLargeImage('mp:attachments/991719725019181076/1219880765844750367/346.gif?ex=660ce97e&is=65fa747e&hm=ab61035fbeb4f599fb5f580edbfba293196c897239e35b06df6c4c43d37c909f&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('lover') //Text when you hover the Large image
    .setAssetsSmallImage('mp:attachments/991719725019181076/1219881541920886875/1122166223774417017.gif?ex=660cea37&is=65fa7537&hm=55c333b8b110e960ddccd63a1a15cab3634d87bf1f19fedaa0edeaab440c556b&') //You can put links in tenor or discord and etc.
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
