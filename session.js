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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUlRY29GU0x2NG5XWXRpUm95dkVTWHRFSDZvQlpSNE9xOFQzTmgvc3AwYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiam02WkhzUGRjaGpxZ3ZvSTJ1TGFQcjB4Q25GOWpKMmhKWjhuUUpScWhtST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTzV5YUIrb1ZFTm1adnNIZktQSHhzWWgrWkx6TitzUWYwNE05NGRYMTBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFWURPWVZVSWFHL3hQb2gxelp4ZEl1Y3BPMzJPMlJwelpBanRaRGdBSWtRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklQMnV0QmpHeHVVcnhVb2owamphSERkeTQ0S1RWTjhaMVYvYXNCWERlMjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVUcFdqL0tCUDhwU0tGcjFOLzV1U2Qwc1ZGOVVSZVdIeW1EZ2V5N1cvVGs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURpbGlDOVFnY09OMHZBR3EraHVIb3R1NEROa1I0UWxkR1NHL2xET0MxST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibnh2SlVPaTYrb3JJNXZOL0xsMVVRUzdiNFh6b3liYy80Vks1SmVFa05nZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZJZUpMVnZhUk91Z2lidU1QSTZXdHhDcGY4TkY1WWd4d2dOc0ttUTNBSDdzejYvSUx4UC9yWnhlelFUc0lMbU5YOHM0bmRwWFhZdE9ZcHphYllEOWlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIxLCJhZHZTZWNyZXRLZXkiOiJmMW9nbU9nNFdadGlCN01xSjJUc0tMeGQ4MUJNQ3Vsblk1ZUxnNjdFWDBzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI4RzI5MjhGSyIsIm1lIjp7ImlkIjoiOTQ3ODU5MjM5Mjk6NTdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoib3duZXIiLCJsaWQiOiIxMzUxNDE3MzMyMDgyNDk6NTdAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNV0wxOUlERUtLOCs4VUdHQVVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPSnJXY3ZWbktYUnU4R2V0U3k4QnJpV1djRTRJSkRHQUxrWWQ4ZUdoTEVZPSIsImFjY291bnRTaWduYXR1cmUiOiJUS1NhTTVIdVNzS3RFcEt0bjQ1czdRbkdocjg3R2hSSU9UTjJSbnBTaEVLSFRtMHJ6S3p5TWJVclFkbHJIdXFwemRGM2pKYzM1cDgwM21TUWV5cjRBQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiU1V4enpxQjREM28xRS9nVUR4WnU0b2J0UnNUbmNMcVJsNFZXQW5SSmtkWDdsbGhqYlprOFpCa3A5SkdOSTZ3QlQyYUZqYWtrcFRFQ3RJQ3BMODF0anc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NTkyMzkyOTo1N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaWExbkwxWnlsMGJ2Qm5yVXN2QWE0bGxuQk9DQ1F4Z0M1R0hmSGhvU3hHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTczMzkxODQsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTXREIn0=",
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
