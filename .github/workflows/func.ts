import gradient from "gradient-string";
import backup from "../src/index";
import boxen from "boxen";
import { rl, translations } from "../index";
import chalk from "chalk"; 
import { Client } from "discord.js-selfbot-v13";

export function choiceinit(client: Client) {
  let clearall = () => {
    creatorname();
    menutext(client);
    choiceinit(client);
  };

  rl.question(
    gradient(["purple", "pink"])(t("optionPrompt")),
    async (choice: string) => {
      choice = choice.trim();
      switch (choice) {
        case "":
        case "back":
          clearall();
          break;
        case "1":
        case "2":
        case "3":
          creatorname();
          await client.guilds.fetch();
          const option = choice === "1" ? "Clonerop2choice" : choice === "2" ? "Clonerop1choice" : "Clonerop3choice";
          configop(client, option);
          break;
        case "6":
          creatorname();
          serverinfo(client);
          break;
        case "7":
          creatorname();
          console.log(
            gradient(["red", "purple"])(
              "Link: https://discord.gg/gtRzpVdaFy"
            )
          );
          awaitenter(client);
          break;
        case "5":
          creatorname();
          infouser(client);
          break;
        case "8":
          creatorname();
          changelang(client);
          break;
        default:
          clearall();
      }
    }
  );
}

let langat: "en" = "en";

export function setlang(lang: "en") {
  langat = lang;
}

export function t(key: string): string {
  return translations[langat][key] || key;
}

export function creatorname() {
  console.clear();
  console.log(
    gradient(["#ff4500", "#ffa500", "#ff6347"])(`
   OMRE
    `)
  );
}

export function menutext(client: Client) {
  creatorname();
  const goodbyeMessage = gradient(["#2180db", "#75a1cb", "#78a5d3"])(["[0] Farewell Gudog with love, Goodbye Gudog\n","[0] In honor of Gudog, Rest in peace\n","[0] In memory of Gudog, an admin who left us. Farewell, friend\n"][Math.floor(Math.random() * 3)]);
  console.log((goodbyeMessage ? goodbyeMessage : '') + gradient(["#ff4500", "#ffa500", "#ff6347"])(t("menuText")));
  choiceinit(client);
}

export function infouser(client: Client) {
  creatorname();

  console.log(
    gradient(["#ff4500", "#ffa500", "#ff6347"])(
      t(`Account name: ${client.user.username}\nGlobal account name: ${client.user.globalName}\nAvatar ${client.user.avatarURL({
        format: "png",
        dynamic: true,
        size: 1024,
      })}\nBanner: ${client.user.bannerURL({
        format: "png",
        dynamic: true,
      })}\nID: ${client.user.id}\nAccount creation date: ${client.user.createdAt}\nGuilds: ${client.guilds.cache.size}\nNitro?: ${client.user.nitroType}\nEmail: ${client.user.emailAddress}\nPhone: ${client.user.phoneNumber}\nLanguage: ${client.settings.locale}\nTheme: ${client.settings.theme}\nDeveloper mode: ${client.settings.developerMode}\nAFK Timeout: ${client.settings.afkTimeout}\nDM Scan Level: ${client.settings.DMScanLevel}\nCompact Mode: ${client.settings.compactMode}\nPreview Link: ${client.settings.previewLink}`)
    )
  );
  awaitenter(client);
}

export async function Cloner(
  client: Client,
  configOptions: {
    maxMessagesPerChannel: number;
    jsonSave: boolean;
    jsonBeautify: boolean;
    doNotBackup: string[];
  },
  cloneOption: number,
  createNewServer?: boolean
) {
  let guildId1: string;
  let GUILD_ID: string = '';
  const starttime = process.hrtime();
  let errors = 0;
  let clonedall = 0;
  let clearall = () => {
    creatorname();
    menutext(client);
    choiceinit(client);
  };

  const proceedWithCloning = async () => {
    try {
      creatorname();
      await client.guilds.fetch();
      const guild = client.guilds.cache.get(guildId1);
      if (!guild) {
        console.error(gradient(["red", "darkred"])(
          t('serverIdError')
        ));
        setTimeout(() => {
          clearall();
        }, 20000);
        return;
      }
      if (createNewServer) {
        const newGuild = await client.guilds.create(
          'Infinite Community Cloner',
          {
            icon:
              'https://cdn.discordapp.com/attachments/1014927587954393098/1145100637281992784/infinite_logo.png',
          }
        );

        if (!newGuild) {
          console.error(gradient(["red", "darkred"])('A fatal error occurred during server creation, the cloner will restart in 10 seconds'));
          errors++;
          setTimeout(() => {
            clearall();
          }, 10000);
          return;
        }
        GUILD_ID = newGuild.id;
      }

      const cloner = await backup.create(guild, {
        maxMessagesPerChannel: configOptions.maxMessagesPerChannel,
        jsonSave: configOptions.jsonSave,
        jsonBeautify: configOptions.jsonBeautify,
        doNotBackup: configOptions.doNotBackup,
      });

      if (!cloner) {
        console.error(gradient(["red", "darkred"])('A fatal error occurred during cloning and the cloner will restart in 10 seconds'));
        errors++;
        setTimeout(() => {
          clearall();
        }, 10000);
        return;
      }

      const newGuild = client.guilds.cache.get(GUILD_ID);

      if (!newGuild) {
        console.error(gradient(["red", "darkred"])(t('invalidId')));
        errors++;
        rl.close();
        return;
      }

      const startime2 = process.hrtime();
      console.log(gradient(["darkblue", "blue"])(t('initCloner')));
      let channelCount = 0;

      cloner.channels.categories.forEach((category: { children: any[] }) => {
        category.children.forEach(() => {
          channelCount += 1;
        });
      });

      cloner.channels.others.forEach(() => {
        channelCount += 1;
      });

      backup.load(cloner.id, newGuild);
      const temp = channelCount * 1000;

      setTimeout(async () => {
        const endtime2 = process.hrtime(startime2);
        const exetimess = endtime2[0] + endtime2[1] / 1e9;
        const Tempo2 = formatTime(exetimess);

        console.log(gradient(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(t('finalClonerMsg') + Tempo2));
        console.log(gradient(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(t('configTime') + temp));
        console.log(gradient(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(t('channelNumber') + clonedall));
        console.log(gradient(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(t('errorCloning') + errors));

        if (cloneOption === 3) {
          const template = await newGuild.createTemplate(
            `${guild.name}`,
            `By Infinite community (https://discord.gg/gtRzpVdaFy)`
          );
          console.log(gradient(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(`» Template URL: ${template.url}`));
        }

        awaitenter(client);
      }, temp);

      cloner.channels.categories.forEach((category: { children: any[] }) => {
        category.children.forEach(() => {
          clonedall++;
        });
      });

      cloner.channels.others.forEach(() => {
        clonedall++;
      });

      const endtime = process.hrtime(starttime);
      const exetimes = endtime[0] + endtime[1] / 1e9;
      const Tempo = formatTime(exetimes);
    } catch (error) {
      console.error('An error occurred during cloning: ', error);
      errors++;
      rl.close();
    }
  };

  rl.question(gradient(["#5bb409", "#6ed60e", "#e8fad8"])(t('serverIdPrompt')), async (guildId: string) => {
    guildId1 = guildId;

    if (!createNewServer) {
      rl.question(gradient(["#5bb409", "#6ed60e", "#e8fad8"])(t('serverIdPrompt2')), (destinationId: string) => {
        GUILD_ID = destinationId;
        proceedWithCloning();
      });
    } else {
      proceedWithCloning();
    }
  });
}

export async function serverinfo(client: Client) {
  async function fetchGuildData(guildId: string) {
    try {
      const guild = await client.guilds.fetch(guildId);
      if (!guild) {
        console.error(gradient(["red", "darkred"])(t('serverIdError')));
        awaitenter(client);
        return;
      }
      console.log(
        gradient(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(
          `Name: ${guild.name}\n\n` +
          `Members: ${guild.memberCount}\n\n` +
          `ID: ${guild.id}\n\n` +
          `Owner: ${guild.ownerId}\n\n` +
          `Region: ${guild.preferredLocale}\n\n` +
          `Created At: ${guild.createdAt}\n\n` +
          `Boost Level: ${guild.premiumTier}`
        )
      );
    } catch (error) {
      console.error('An error occurred while fetching guild data: ', error);
    } finally {
      awaitenter(client);
    }
  }

  rl.question(
    gradient(["#5bb409", "#6ed60e", "#e8fad8"])(t('serverIdPrompt')),
    (guildId: string) => {
      fetchGuildData(guildId);
    }
  );
}

export function changelang(client: Client) {
  rl.question(
    gradient(["#5bb409", "#6ed60e", "#e8fad8"])(t('languagePrompt')),
    (lang: "en") => {
      setlang(lang);
      creatorname();
      menutext(client);
    }
  );
}

function formatTime(time: number): string {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  const milliseconds = Math.floor((time % 1) * 1000);
  return `${minutes}m ${seconds}s ${milliseconds}ms`;
}

function awaitenter(client: Client) {
  rl.question(
    gradient(["#5bb409", "#6ed60e", "#e8fad8"])(t('pressEnter')),
    () => {
      creatorname();
      menutext(client);
    }
  );
}
