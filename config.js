const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0pkYnlzL3NDNnlTUDRLWjVITzNTS3owOFR4c1d4dzltY1RzRVdBdDJIMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRWllaTlrY09BQitlZXpSQ1pqVmRQZXYzOGhsMEs1VFZRMCt6OFdTV05oYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSDdSVG5iNG5HV0lOMnVITlBqNDdzZ2cwV0s2VUJLcDU5bmdnTzE2VlY4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxS2ExazlaYkJTbERSNDh2enFaYTRZRGloM3JYS0VZVEhEb1RIS0ozMTBJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllDbmY1K1l2MmF2VXlxSzNBbTlhcU04M2RpOVRlVTZYTjJwdmRQaUwvWEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlxNVZCb1E1VTRDMjUzWldXdElmenE5TG5VRGIwZytlVDBodFhOU0NCUkk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVUNtZ1RQUlhXNWZlYmZUZWsxbW1YS0VhT2RnUVhDNy9wb1hMcTRYenRXWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOVgwOWlsNkpKSzU5TmRhc1JkYUJvZWR4MXR2ODdueDJnVzQ0WDg3d00xbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRvQTlsRnNUaXpMUmlHL1J1RkRYMnEyZ01rdEkrN05UbzR0M1RVaytySkJDVWNBWUEvZWVXWldLY1lxL1lSenptb24yVE51ZGNXRFcvbWlGSGVpZGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJkL0VIdlhpRzZSN01aM25PUzltaVRIRGphSHpScnlwSTVidmJiR1ZhQTBBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJGbTcxZy0wM1JHS2lSQUt3TUQ3cFVRIiwicGhvbmVJZCI6Ijc4MjFiMzBlLWI4N2EtNDM0OC05N2NmLWNlNDBjMDhlYjI2YiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6OTZPdkpEWWtGcFZtbTVud0h1MlFRYmYrUGM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieGJBL3pmQTBWTmNrdWVuZFAxeXVtUXNlUVBvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRUVlNHWlo1IiwibWUiOnsiaWQiOiIyMzM1Mzc2MDU3OTc6MTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibGMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05EaXlKOEdFTE9EczdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhIdVBlZEo3b2hjS1BuL3FDekpVS1FpWDZITzlBUm1BR3BuQlhDVnIzbkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlBWdUNLNlptWURZU0NDanZDS200VWNWeWNGWUJDamFpbjdKR21wMHFrcGk1dTBTelNxeng1UjhLazY0ZkJiTWhUbXdKVEhpSElYYmE0dlEzcXVUdURnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvdXJyNGF6TXdNSVl1dEFraGU3aUUrcHZNRHlmVzRnY1Vjb050cnVmakZuZlg1N1haMlRFMVBSeUhTbnAwU1VGMGdGc0xyNlRoUHE0OE5zY2dlOVpnUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUzNzYwNTc5NzoxNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjUjdqM25TZTZJWENqNS82Z3N5VkNrSWwraHp2UUVaZ0JxWndWd2xhOTV5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MTgwNzM2fQ==",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "public",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_NMAP_HACK: process.env.AUTO_NMAP_HACK || "true",
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/osriwc.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "HI IM ONLINE CALEB'S  WHATSAPP BOT\n\n> 𝖡𝖸 CALEB LARBI",
ANTI_LINK: process.env.ANTI_LINK || "false",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "➺『CALEB LARBI』࿐",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
