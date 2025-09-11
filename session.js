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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUlkdU1TdmtwQy8ybjhjMC9WZjdhd1pYdUlla0NvWXQ1SXBkR0k4Q2MyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTNaM08wNG8weEtzdUkwWWwxT3VBTzE3VS9CRlJuMEtCMlkzaEE4WW8yST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyQWpMbjZhdUgreFhlOVZRRno5aEg0MTgzVzJZb2xnRjhtOHdUN0tqK2tvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIOGRtYms0eG00ajZpSmhwUmtTWndoelYzSDY3OTFiSHMwQitPUUdUK1hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFbFhnYWh0Y2F4L1lhOHZ5eW5idmgzcit0Tkk1dlo0L1JRTUR2TzlLbms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii9sRkpDdG01Ny9ESU9CWmw4NkVudHRtTUV1VStzbHFXSW9xc1F5ZzFGaEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFuNHJJNDZuMG04dE4yM3pBd2Z4TVlwTXphSGV4UklDR05HZm9VUCsxQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmFleVFKNlhnL1UzQWZMUE9NMUcydDhwR0VIN1pwSUpGTEdFYkhXMHVTTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdHN2lkUDhra21Nc3paQVJzelVma2pTSklNWU5qNnZnNE5jYlczV2NjUnN1MWlDSGY1M1FIdG1hNjZVVTJlaWhIdVY0cUxuWDFmN252dTJTV2ptTmdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQsImFkdlNlY3JldEtleSI6IkI5b2ErUk5ScXVna3l1WTBQZkVuLzVaMW1BNjJlOFIxc0IxSE84UnVzbms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTQ3ODU5MjM5MjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMUYwQzA1REFERDczNkY0NjQ3QzgzMkE3RUQ0REI0NzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NzU3OTUzNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoibnZrZklYek5TeTJSV0haakEwMXNhdyIsInBob25lSWQiOiJiM2Y5NzYzZi0wOGY5LTQ0ZWItOGE4Yi1mNzY3NDY0ODQ5OTciLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ01CTXdEblpGam4vdGdIVnEzclBDaUVFTUVRPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImozMThQa1RPNEdsQWNwN1p3a0hob2xXSk5hMD0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJDVDZZQjk2QiIsIm1lIjp7ImlkIjoiOTQ3ODU5MjM5Mjk6NjBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoib3duZXIiLCJsaWQiOiIxMzUxNDE3MzMyMDgyNDk6NjBAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNYUwxOUlERUlDU2lzWUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJPSnJXY3ZWbktYUnU4R2V0U3k4QnJpV1djRTRJSkRHQUxrWWQ4ZUdoTEVZPSIsImFjY291bnRTaWduYXR1cmUiOiJEQVhZdHR6WU9sZno1dDZPbUxIS3VZUzFzYW5pUnJ1L2czdlFxYXdiaEVWdkEvOEh6cExVU0hiMnlkdCt0VWV0SXNlWnlOQUhIWlNJYmJUZXhZQTFEZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiSXJMQzNNZ1orUVU0ZTVJNExvUzVvWVcxTVhyNG8zR3pySGxKNkhmMDJ6WlBSdDM3WHJ6R1lqTlVSbEdTY2hNaGxUSFVtZHV2UkZqQU01UForQ2pHaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc4NTkyMzkyOTo2MEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJUaWExbkwxWnlsMGJ2Qm5yVXN2QWE0bGxuQk9DQ1F4Z0M1R0hmSGhvU3hHIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTc1Nzk1MzIsImxhc3RQcm9wSGFzaCI6IjJWNzdxVSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBREdiIn0=",
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
