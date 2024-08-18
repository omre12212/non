import Discord, { TextChannel } from "discord.js-selfbot-v13";
import readline from "readline";
import dotenv from "dotenv"; 
import gradient from "gradient-string";
import { choiceinit, menutext, creatorname, setlang, t } from "./src/utils/func";
import transjson from './src/utils/translations.json';
dotenv.config();

export const client = new Discord.Client({
  checkUpdate: false,
  partials: [],
});

export const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const token = process.env.TOKEN;

function loading2() {
  let ponto = 0;
  return setInterval(() => {
    process.stdout.write(`\r${gradient(["purple", "pink"])(`Connecting${'.'.repeat(ponto)}`)}`);
    ponto = (ponto + 1) % 4;
  }, 500);
}

const loading = loading2();

client.on("ready", async () => {
  clearInterval(loading);

  // Check if the user is in the specific server and has the required role
  const guildId = '1271192106051829891'; // Guild ID for "Infinite Community"
  const roleId = '1274639851819634719'; // Role ID required

  const guild = client.guilds.cache.get(guildId);
  if (!guild) {
    console.log(gradient(["red", "orange"])("You need to be in the Infinite Community server to start the cloner."));
    return;
  }

  const member = guild.members.cache.get(client.user.id);
  if (!member || !member.roles.cache.has(roleId)) {
    console.log(gradient(["red", "orange"])("You do not have the required role in the server."));
    return;
  }

  // Check the content of the specified channel
  const statusChannelId = '1274642639509127209'; // Channel ID to check
  const statusChannel = guild.channels.cache.get(statusChannelId) as TextChannel;
  if (statusChannel) {
    try {
      const messages = await statusChannel.messages.fetch({ limit: 1 });
      const latestMessage = messages.first();
      if (latestMessage && latestMessage.content.toLowerCase() === 'yes') {
        console.log(gradient(["green", "blue"])("Update needed."));
        return; // Exit if update is needed
      } else {
        console.log('Content is not "yes".');
      }
    } catch (error) {
      console.error(`Failed to fetch messages: ${error.message}`);
    }
  } else {
    console.log('Status channel not found.');
  }

  const channelId = '1173960818841354382'; // Channel ID to send the message
  const channel = guild.channels.cache.get(channelId) as TextChannel;
  if (channel) {
    channel.send({ content: 'Hello world' }).catch(error => {
      console.error(`Failed to send message: ${error.message}`);
    });
  } else {
    console.log('Channel not found.');
  }

  menutext(client);
  choiceinit(client);

  const r = new Discord.RichPresence()
    .setApplicationId('1146949248617828455')
    .setType('PLAYING')
    .setURL('https://discord.gg/gtRzpVdaFy')
    .setName('☣ QUANTOM MANAGEMENT')
    .setState('🛠 Running...')
    .setDetails('The best server about selfbots and bots')
    .setAssetsLargeImage('https://cdn.discordapp.com/icons/1014921352500756500/d2ed4735e5e40808124696fe97bc4c9d.png?size=2048')
    .setAssetsLargeText('Infinite Community')
    .setAssetsSmallImage('https://media.discordapp.net/attachments/692443311318892585/1187269861433430046/Untitled_Project_32.jpg?ex=65964639&is=6583d139&hm=3c25a4cb96b3794c80e6b610d6de8c4f40e190cf16a8957d1847cda61bb36185&=&format=webp&width=473&height=473')
    .setAssetsSmallText('Join')
    .setStartTimestamp(new Date(1677642874 * 1000))
    .addButton(t('join'), 'https://discord.gg/gtRzpVdaFy');
  
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });

  // Set language to English directly
  setlang('en');
});

client.once("finish", (_event) => {
  client.user.setActivity();
});

if (!token) {
  console.clear();
  creatorname();
  clearInterval(loading);
  rl.question(gradient(["purple", "pink"])("Your token (Not a bot token)\n» "), (input) => {
    if (input.trim() === '') {
      console.log(gradient(["red", "orange"])("This token is empty"));
      process.kill(1);
    } else {
      client.login(input)
        .catch((error) => {
          console.clear();
          if (error.message === 'An invalid token was provided.') {
            console.log(gradient(["red", "orange"])("Invalid token"));
          } else {
            console.error(gradient(["red", "orange"])(`Login error: ${error.message}`));
          }
        });
    }
  });
} else {
  console.clear();
  client.login(token)
    .catch((error) => {
      console.clear();
      if (error.message === 'An invalid token was provided.') {
        console.log(gradient(["red", "orange"])("Invalid token"));
      } else {
        console.error(gradient(["red", "orange"])(`Login error: ${error.message}`));
      }
    });
}

export type Translations = {
  en: { [key: string]: string };
};

export const translations: Partial<Translations> = transjson;
