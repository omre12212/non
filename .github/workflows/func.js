"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.choiceinit = choiceinit;
exports.setlang = setlang;
exports.t = t;
exports.creatorname = creatorname;
exports.menutext = menutext;
exports.infouser = infouser;
exports.Cloner = Cloner;
exports.serverinfo = serverinfo;
exports.changelang = changelang;
var gradient_string_1 = require("gradient-string");
var index_1 = require("../src/index");
var index_2 = require("../index");
function choiceinit(client) {
    var _this = this;
    var clearall = function () {
        creatorname();
        menutext(client);
        choiceinit(client);
    };
    index_2.rl.question((0, gradient_string_1.default)(["purple", "pink"])(t("optionPrompt")), function (choice) { return __awaiter(_this, void 0, void 0, function () {
        var _a, option;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    choice = choice.trim();
                    _a = choice;
                    switch (_a) {
                        case "": return [3 /*break*/, 1];
                        case "back": return [3 /*break*/, 1];
                        case "1": return [3 /*break*/, 2];
                        case "2": return [3 /*break*/, 2];
                        case "3": return [3 /*break*/, 2];
                        case "6": return [3 /*break*/, 4];
                        case "7": return [3 /*break*/, 5];
                        case "5": return [3 /*break*/, 6];
                        case "8": return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 1:
                    clearall();
                    return [3 /*break*/, 9];
                case 2:
                    creatorname();
                    return [4 /*yield*/, client.guilds.fetch()];
                case 3:
                    _b.sent();
                    option = choice === "1" ? "Clonerop2choice" : choice === "2" ? "Clonerop1choice" : "Clonerop3choice";
                    configop(client, option);
                    return [3 /*break*/, 9];
                case 4:
                    creatorname();
                    serverinfo(client);
                    return [3 /*break*/, 9];
                case 5:
                    creatorname();
                    console.log((0, gradient_string_1.default)(["red", "purple"])("Link: https://discord.gg/gtRzpVdaFy"));
                    awaitenter(client);
                    return [3 /*break*/, 9];
                case 6:
                    creatorname();
                    infouser(client);
                    return [3 /*break*/, 9];
                case 7:
                    creatorname();
                    changelang(client);
                    return [3 /*break*/, 9];
                case 8:
                    clearall();
                    _b.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    }); });
}
var langat = "en";
function setlang(lang) {
    langat = lang;
}
function t(key) {
    return index_2.translations[langat][key] || key;
}
function creatorname() {
    console.clear();
    console.log((0, gradient_string_1.default)(["#ff4500", "#ffa500", "#ff6347"])("\n   OMRE\n    "));
}
function menutext(client) {
    creatorname();
    var goodbyeMessage = (0, gradient_string_1.default)(["#2180db", "#75a1cb", "#78a5d3"])(["[0] Farewell Gudog with love, Goodbye Gudog\n", "[0] In honor of Gudog, Rest in peace\n", "[0] In memory of Gudog, an admin who left us. Farewell, friend\n"][Math.floor(Math.random() * 3)]);
    console.log((goodbyeMessage ? goodbyeMessage : '') + (0, gradient_string_1.default)(["#ff4500", "#ffa500", "#ff6347"])(t("menuText")));
    choiceinit(client);
}
function infouser(client) {
    creatorname();
    console.log((0, gradient_string_1.default)(["#ff4500", "#ffa500", "#ff6347"])(t("Account name: ".concat(client.user.username, "\nGlobal account name: ").concat(client.user.globalName, "\nAvatar ").concat(client.user.avatarURL({
        format: "png",
        dynamic: true,
        size: 1024,
    }), "\nBanner: ").concat(client.user.bannerURL({
        format: "png",
        dynamic: true,
    }), "\nID: ").concat(client.user.id, "\nAccount creation date: ").concat(client.user.createdAt, "\nGuilds: ").concat(client.guilds.cache.size, "\nNitro?: ").concat(client.user.nitroType, "\nEmail: ").concat(client.user.emailAddress, "\nPhone: ").concat(client.user.phoneNumber, "\nLanguage: ").concat(client.settings.locale, "\nTheme: ").concat(client.settings.theme, "\nDeveloper mode: ").concat(client.settings.developerMode, "\nAFK Timeout: ").concat(client.settings.afkTimeout, "\nDM Scan Level: ").concat(client.settings.DMScanLevel, "\nCompact Mode: ").concat(client.settings.compactMode, "\nPreview Link: ").concat(client.settings.previewLink))));
    awaitenter(client);
}
function Cloner(client, configOptions, cloneOption, createNewServer) {
    return __awaiter(this, void 0, void 0, function () {
        var guildId1, GUILD_ID, starttime, errors, clonedall, clearall, proceedWithCloning;
        var _this = this;
        return __generator(this, function (_a) {
            GUILD_ID = '';
            starttime = process.hrtime();
            errors = 0;
            clonedall = 0;
            clearall = function () {
                creatorname();
                menutext(client);
                choiceinit(client);
            };
            proceedWithCloning = function () { return __awaiter(_this, void 0, void 0, function () {
                var guild_1, newGuild_1, cloner, newGuild_2, startime2_1, channelCount_1, temp_1, endtime, exetimes, Tempo, error_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            creatorname();
                            return [4 /*yield*/, client.guilds.fetch()];
                        case 1:
                            _a.sent();
                            guild_1 = client.guilds.cache.get(guildId1);
                            if (!guild_1) {
                                console.error((0, gradient_string_1.default)(["red", "darkred"])(t('serverIdError')));
                                setTimeout(function () {
                                    clearall();
                                }, 20000);
                                return [2 /*return*/];
                            }
                            if (!createNewServer) return [3 /*break*/, 3];
                            return [4 /*yield*/, client.guilds.create('Infinite Community Cloner', {
                                    icon: 'https://cdn.discordapp.com/attachments/1014927587954393098/1145100637281992784/infinite_logo.png',
                                })];
                        case 2:
                            newGuild_1 = _a.sent();
                            if (!newGuild_1) {
                                console.error((0, gradient_string_1.default)(["red", "darkred"])('A fatal error occurred during server creation, the cloner will restart in 10 seconds'));
                                errors++;
                                setTimeout(function () {
                                    clearall();
                                }, 10000);
                                return [2 /*return*/];
                            }
                            GUILD_ID = newGuild_1.id;
                            _a.label = 3;
                        case 3: return [4 /*yield*/, index_1.default.create(guild_1, {
                                maxMessagesPerChannel: configOptions.maxMessagesPerChannel,
                                jsonSave: configOptions.jsonSave,
                                jsonBeautify: configOptions.jsonBeautify,
                                doNotBackup: configOptions.doNotBackup,
                            })];
                        case 4:
                            cloner = _a.sent();
                            if (!cloner) {
                                console.error((0, gradient_string_1.default)(["red", "darkred"])('A fatal error occurred during cloning and the cloner will restart in 10 seconds'));
                                errors++;
                                setTimeout(function () {
                                    clearall();
                                }, 10000);
                                return [2 /*return*/];
                            }
                            newGuild_2 = client.guilds.cache.get(GUILD_ID);
                            if (!newGuild_2) {
                                console.error((0, gradient_string_1.default)(["red", "darkred"])(t('invalidId')));
                                errors++;
                                index_2.rl.close();
                                return [2 /*return*/];
                            }
                            startime2_1 = process.hrtime();
                            console.log((0, gradient_string_1.default)(["darkblue", "blue"])(t('initCloner')));
                            channelCount_1 = 0;
                            cloner.channels.categories.forEach(function (category) {
                                category.children.forEach(function () {
                                    channelCount_1 += 1;
                                });
                            });
                            cloner.channels.others.forEach(function () {
                                channelCount_1 += 1;
                            });
                            index_1.default.load(cloner.id, newGuild_2);
                            temp_1 = channelCount_1 * 1000;
                            setTimeout(function () { return __awaiter(_this, void 0, void 0, function () {
                                var endtime2, exetimess, Tempo2, template;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            endtime2 = process.hrtime(startime2_1);
                                            exetimess = endtime2[0] + endtime2[1] / 1e9;
                                            Tempo2 = formatTime(exetimess);
                                            console.log((0, gradient_string_1.default)(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(t('finalClonerMsg') + Tempo2));
                                            console.log((0, gradient_string_1.default)(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(t('configTime') + temp_1));
                                            console.log((0, gradient_string_1.default)(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(t('channelNumber') + clonedall));
                                            console.log((0, gradient_string_1.default)(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])(t('errorCloning') + errors));
                                            if (!(cloneOption === 3)) return [3 /*break*/, 2];
                                            return [4 /*yield*/, newGuild_2.createTemplate("".concat(guild_1.name), "By Infinite community (https://discord.gg/gtRzpVdaFy)")];
                                        case 1:
                                            template = _a.sent();
                                            console.log((0, gradient_string_1.default)(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])("\u00BB Template URL: ".concat(template.url)));
                                            _a.label = 2;
                                        case 2:
                                            awaitenter(client);
                                            return [2 /*return*/];
                                    }
                                });
                            }); }, temp_1);
                            cloner.channels.categories.forEach(function (category) {
                                category.children.forEach(function () {
                                    clonedall++;
                                });
                            });
                            cloner.channels.others.forEach(function () {
                                clonedall++;
                            });
                            endtime = process.hrtime(starttime);
                            exetimes = endtime[0] + endtime[1] / 1e9;
                            Tempo = formatTime(exetimes);
                            return [3 /*break*/, 6];
                        case 5:
                            error_1 = _a.sent();
                            console.error('An error occurred during cloning: ', error_1);
                            errors++;
                            index_2.rl.close();
                            return [3 /*break*/, 6];
                        case 6: return [2 /*return*/];
                    }
                });
            }); };
            index_2.rl.question((0, gradient_string_1.default)(["#5bb409", "#6ed60e", "#e8fad8"])(t('serverIdPrompt')), function (guildId) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    guildId1 = guildId;
                    if (!createNewServer) {
                        index_2.rl.question((0, gradient_string_1.default)(["#5bb409", "#6ed60e", "#e8fad8"])(t('serverIdPrompt2')), function (destinationId) {
                            GUILD_ID = destinationId;
                            proceedWithCloning();
                        });
                    }
                    else {
                        proceedWithCloning();
                    }
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    });
}
function serverinfo(client) {
    return __awaiter(this, void 0, void 0, function () {
        function fetchGuildData(guildId) {
            return __awaiter(this, void 0, void 0, function () {
                var guild, error_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, 3, 4]);
                            return [4 /*yield*/, client.guilds.fetch(guildId)];
                        case 1:
                            guild = _a.sent();
                            if (!guild) {
                                console.error((0, gradient_string_1.default)(["red", "darkred"])(t('serverIdError')));
                                awaitenter(client);
                                return [2 /*return*/];
                            }
                            console.log((0, gradient_string_1.default)(["#FFEB3B", "#FFC107", "#FF9800", "#FF5722"])("Name: ".concat(guild.name, "\n\n") +
                                "Members: ".concat(guild.memberCount, "\n\n") +
                                "ID: ".concat(guild.id, "\n\n") +
                                "Owner: ".concat(guild.ownerId, "\n\n") +
                                "Region: ".concat(guild.preferredLocale, "\n\n") +
                                "Created At: ".concat(guild.createdAt, "\n\n") +
                                "Boost Level: ".concat(guild.premiumTier)));
                            return [3 /*break*/, 4];
                        case 2:
                            error_2 = _a.sent();
                            console.error('An error occurred while fetching guild data: ', error_2);
                            return [3 /*break*/, 4];
                        case 3:
                            awaitenter(client);
                            return [7 /*endfinally*/];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        }
        return __generator(this, function (_a) {
            index_2.rl.question((0, gradient_string_1.default)(["#5bb409", "#6ed60e", "#e8fad8"])(t('serverIdPrompt')), function (guildId) {
                fetchGuildData(guildId);
            });
            return [2 /*return*/];
        });
    });
}
function changelang(client) {
    index_2.rl.question((0, gradient_string_1.default)(["#5bb409", "#6ed60e", "#e8fad8"])(t('languagePrompt')), function (lang) {
        setlang(lang);
        creatorname();
        menutext(client);
    });
}
function formatTime(time) {
    var minutes = Math.floor(time / 60);
    var seconds = Math.floor(time % 60);
    var milliseconds = Math.floor((time % 1) * 1000);
    return "".concat(minutes, "m ").concat(seconds, "s ").concat(milliseconds, "ms");
}
function awaitenter(client) {
    index_2.rl.question((0, gradient_string_1.default)(["#5bb409", "#6ed60e", "#e8fad8"])(t('pressEnter')), function () {
        creatorname();
        menutext(client);
    });
}
