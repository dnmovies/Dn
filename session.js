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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUJ4ZFpsaG1DRll2L3dRNHdxZ0dVdnFyd1MzV3BrNmNWc0FFbndreERsdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSGl2bG56aWhURjd1TWRqVk1hWlZ2YTFGZEs1Mnd5KzJGTGxvS3BHNHZoWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrUGk5cmErMlljVFZYSmVwTGoyWDd3YjVZd0VvdWZFOWpBWERJckF6VDBjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrNnJxaStNUjRhZkZidzY0aGx3OGNqVXJHTDJRUlNzR2U3SHFKVkRyUHpjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndLd1FPZTRaL1BoNlpla2JvWDRDR1dRa0NqMG4zb1JUc3pGeXpnRUZPbDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIweDEwL0ZJbUNrUUVQT0E0YXYzMG16K3dYbC9JZGpCdHVBQkpFL2xIRnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUZYZldQaHY1c0NzajcybmwzTzN0SWR2RDVXbWJkeW1aOWxJYkxkNFlrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTV0RTc3WnZEL01PajJURnAweVl0TXQzdmpFaE53a3lxUW5MQlp0OFJqVT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVCTjZ0N2lTclF2YXpYVW15UHUzMTQ2Nit5SHEzbCtkQldwcWVRVGNUSm9sai8xOHVwbHNnTjVEd1llSXk5TENzS2s3TUxSNVpUdVRBNjlrVFNJY0RnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkwLCJhZHZTZWNyZXRLZXkiOiJ5TENMakxVT2xZaGNPekkzNEY5NHYvWnJRRDAwZzM4R1FIdHNFWERxZUdZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnU3pBVERPMFRXeVMyUHdVZ2xvTDl3IiwicGhvbmVJZCI6IjcxYmM4MDYzLTgwNGQtNDRmMi1iODVlLTk3OGUyN2ExZjk2NyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2cnRkUC95cTE4ZlhldC9samIxa1M1a0JUMTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiclRmODFEUVNPZzJRZHY0TFZwanNYSjZPZFpnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjgyWFoxSEJDIiwibWUiOnsiaWQiOiI5NDc2MTIyNDg1MjoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Im93bmVyIiwibGlkIjoiMjU5Mjk0MzkwMzk2MzE6MkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01xTDE5SURFS0NCdWNjR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ik9KcldjdlZuS1hSdThHZXRTeThCcmlXV2NFNElKREdBTGtZZDhlR2hMRVk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjZLNWw5SGd5QjBVRE5DSTdCUTl6ajYwc0FiVGFCMVJaZGpNQVV1NlN6eEhKTlJIQVNTRVFZRjY0ZzBhcXRFYUY0aUtxWjVHUG9QeTQxL01TOUdFYUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1akZySTdEeGFtbXpQaXM0UWZnb21RUnFXbk9PQjlGQUhHQnZZaVpPS0F6amRNK2tPNlFqZXVGUzBUYWQ5WlBMWHZQcWtTWXZjTGxIVE9iL3ZrbzhCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzYxMjI0ODUyOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVGlhMW5MMVp5bDBidkJuclVzdkFhNGxsbkJPQ0NReGdDNUdIZkhob1N4RyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSUJRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYwNDQ0NTg5LCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTWtEIn0=",
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
