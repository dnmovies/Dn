//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVBSbE9yaTNLTTdlcFVxamhJc0Zubms5RkFkb2FFT3dBWkEvcnA5VFhXdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOERhbkxVbDVYMHZPdmFwTDR1WjZRNjdQYlJndjZWdU5NMjdZdWFubFRUYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0QXhkYmtmakNRc2RpK1dVeWdSVnBxTzFyR0JMbGxLN0pDUHUrK2xmV1U4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzR0c2enp0SFJyOXF5bk43dS9DKytMTlBKRlZnaW16UDhiNmFxZzFYVEMwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNHalFJdnR2elcwRDNtWi92ZXlBVFlEQUdKRWtxR003WTZodGJDS0pyVkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis4NlRNMWNJTW1tR1lDMmVzV25ub0pGMWFscEQ4ZytQMUVUQ1pBOEE4MjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUhHTnFBUEN5b0pJekhYa0dYYW14VnFmbmgyV2VmYjJlRWw2S1VHaExGTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMWY1OHI0LzNxcDk1QzF3eGVmQXpFZ2liOUpqN2JHY043c3hxdVZPczlUdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB0MG00UktBUjZyNWRnaE5SVWJtRzJsLzZKOUdlTkU5MEIzbllrQXR0NkRKNFIvWmdpNXJMdHdlUFQ2ajZqblJmOU1Uc2xuNWVxeXlrbU90allicGd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6InlpeWF4eFB6dkVtV1h1ajd1Zzh0ZTY3Y0YvQ0xoVXg2VGNvSXVMQ3ZVMkU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODU5MjM5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVBMjU1QUQwMzk3RjY2RTYyOEMyMDg3MEM4REEwRjcifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2MDE4NTEzNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoidE9jN2UzWFFRS2VlX2dXUmxtckstQSIsInBob25lSWQiOiIxMDZiMTVhZC0yY2YyLTQ2NTAtODJiNy1hOTkxYjMwNzJjYjMiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieFJ1cjZqQ3QvdzZFTWFoVHhNTlhqVkVzUHhVPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitIWit2ZmlCOWttQjFxcGlJbHZCYklwM1VzRT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0WUNWMlZWTiIsIm1lIjp7ImlkIjoiOTQ3ODU5MjM5Mjk6NzZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoib3duZXIiLCJsaWQiOiIxMzUxNDE3MzMyMDgyNDk6NzZAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNbUwxOUlERUorV3FjY0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPSnJXY3ZWbktYUnU4R2V0U3k4QnJpV1djRTRJSkRHQUxrWWQ4ZUdoTEVZPSIsImFjY291bnRTaWduYXR1cmUiOiJGdG1DQzZIUkN4SWl4T0xCa0lXeXFYZjIwVFBkL1ZJUWUyVmJnM1lCR2haazgySEo0djB0S1JyNFJ6cDBWakdvazlnYXExR0RoUWlNUWsyVGR1bG5CZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUmpldUxBVVNEci9BVUpGZnpVOFBZSG5RalIxd0RHWFN1cVFGZjRHRjRIcXdjcFV1ZU81TWJiNThacHJzanVLaGtNeVdPLzdPeTdvek9GOHJFUXozaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NTkyMzkyOTo3NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaWExbkwxWnlsMGJ2Qm5yVXN2QWE0bGxuQk9DQ1F4Z0M1R0hmSGhvU3hHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjAxODUxMzIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSmFRIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94785923929",
  PASSWORD: 
    process.env.PASSWORD || "dilaksha",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94717775628", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
  TOKEN: "WrAO5OcnhfBMUvUqSbiq7U8lY8aLEF0kKeXt",
  USERNAME: "dnmovies",
  REPO_NAME: "Dn",
};
