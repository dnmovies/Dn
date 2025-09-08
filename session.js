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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUtFR2JQeDdtcjN0Y1ZMazJsbjhVSzRXaVdBMnFrT0JpaEdCUDZxK2pscz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL1pwNDE4UnZQemRJOVBwTUxWMzF6czhDRjlnTEs0aHNjdVRVNFFZYU5pQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQlA2Z0g3ZDJ1ek84TWJsQnFCQmV5ZnZDNDJXNkZjcUZ3aHdXWnpVY2tRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJMTUlKVVNnd0t2eENLSlp0VW9PY1crK1FzK3gxbjFlWmJqRlFuM1ltejA4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllGVjYvbkVEM3pkOTcyNjRidlU1M01GL1hHRTVuRG1MUEk1aGtlTXcwRXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZHSDJpTEF6aEV1WXZUUkpJNUVIVjMvcjdsZkVPWHlrOEZ1eUhwMXhUV0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMklaRnVsQm03T3lDUWN6dDJrTGRGQnkxWlVDdVczV25NaUpVdDRpZ0pHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU05UWXpkR3BReVBQWkpxSFZtMHFmSzlZNk1pUWdkbEcwcHpQLzU2STFDTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBDQ0JnbnBtME5VQzRRZ3kyclVXWlErU2pJSEh4M0o4VVYzNE9kd3I4VWZSY29BUUJVNzRVc2Y4SHcvcHZ1dDVLYnRFKzhxWmI5OHA2NmhWeHdGa2hnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTgyLCJhZHZTZWNyZXRLZXkiOiJ2Q2lETlNUZXpuZzZCbHdIWXAxT0orQ0IxTm1rMC9xY2dJQjkvTGtaUUZJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJRNlhDQ1JBRCIsIm1lIjp7ImlkIjoiOTQ3ODU5MjM5Mjk6NThAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoib3duZXIiLCJsaWQiOiIxMzUxNDE3MzMyMDgyNDk6NThAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNV0wxOUlERU9ISis4VUdHQVlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPSnJXY3ZWbktYUnU4R2V0U3k4QnJpV1djRTRJSkRHQUxrWWQ4ZUdoTEVZPSIsImFjY291bnRTaWduYXR1cmUiOiJiZEo1OTN5Z0ZsamhoWWdFdEUwa1pYOU4wd05hR0lVVzhENmUrVWFYdWg1aFg0WW1uSjU0TzNvWnlOQkt3TVhld1BaVkRJVDh2Sml4TXBCS2k4OFVCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoieTljVElydWxLaVo2NWNVejZMQzEzYktKaENyUVhwZjFPMkljVnQ2ZE94REhKV2dic08raWdSSDArVFdvRE5wTkJGZUtFN2FJaFB0VUE5ZnFyQXJnaHc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NTkyMzkyOTo1OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaWExbkwxWnlsMGJ2Qm5yVXN2QWE0bGxuQk9DQ1F4Z0M1R0hmSGhvU3hHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTczNDA5MTAsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSJ9",
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
