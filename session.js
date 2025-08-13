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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUNQa0dDWnI1RlAvb0pVYkhKc0ZSQzNEVG9qbnhXcHF4MVNRZnladnEwaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaFRFcWhhZ05RcnU0VU1jdndsTUdQd2VDcm1vWUQ3ampYVDdEWVRXV2hVVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXQWhlODFuQ25nSnZnTE1BQ2MwT1JlZnZZL0NZYTE5aEliS0tRNmZNYjN3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1QXFDV05aM1hrN1VFRmowMlNUMnBnT0pYV3h4dThKMjYvMUxIMk4rVHlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9NQnhSSzNHRnA0TjF4YkpsN0lDTThTaWNwcnJxZ1BhWHFWN0RiU3d1bDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBpYmdwSUI2NkxKZjVHYWJBT3lMRVhGRkVwMFhtN2V6SVk3Q3o0MW5DU2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYUZqc0V2YWg3Z3Jyakx5Szh1YWJTd3J4NFV4ODVTbW9ucWVLM3ZucGwyOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZGIwRnhaRmliOVMrTnJ1TG9VSld0b2hyOFpIMW5UbHRua0J1b2lMTkdnWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iml4UjB2ek5nSFNDdUlrUWxvbXEwVGoyNHVpT01PbmY5OUNWY3crSlZtL3VUdmh1YmF2RWQzQjh5NHBVdkQzZk1nUzZSdmlFMzhiMGFvMHNvbmUvUmlBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIwLCJhZHZTZWNyZXRLZXkiOiJINXh2VXlsZ0JJWERuVTJ3V1gzSXozV0lpMGg5a2Z1ZWhlMFhQK1VJbHUwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXNm9rb3RfRVRQcW5WSVpyejFzNzNRIiwicGhvbmVJZCI6IjdmZDNjZmUwLTNlMjAtNGRkOC04NTdmLWI1YzFkMDJkNGQwOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxU2FUTk50WHZnZUpMZWt6dW1UdCtGcGxQdVE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0F4aUpnWFJQQkZRaG04TzBTU1hERDE4aWhRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjIzWkpaNDg2IiwibWUiOnsiaWQiOiI5NDc4NTkyMzkyOTo0NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJvd25lciIsImxpZCI6IjEzNTE0MTczMzIwODI0OTo0NEBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01TTDE5SURFTy9rNzhRR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9KcldjdlZuS1hSdThHZXRTeThCcmlXV2NFNElKREdBTGtZZDhlR2hMRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IklPOXE1cjNPVVlsTHBUc05IRFlxUnpTMWIzcUorczBOT0ZkTE9SU1lyYjR2dXhUZ2FBaTlnd2hMQit5MS9NeWlmUXAzeWg1NklLUHpmc0RSTjFNdURBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJpMmRKa0k1UlgrMEtJM3o0NWJiamtvWUZQUklETU5UUE02REFtTjF4YXBuWStpMEsyMXFvbzRpVGxNT1dGTUphVm53aXltQko5a091WGtJZmFHSnVoUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0Nzg1OTIzOTI5OjQ0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlRpYTFuTDFaeWwwYnZCbnJVc3ZBYTRsbG5CT0NDUXhnQzVHSGZIaG9TeEcifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElBZz09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1NTA1MDYyMCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIVlMifQ==",
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
