const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || '94761516805'  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://SithumKalhara:97531@cluster0.iva7dbo.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'Sithumkalhara271@gmail.com'
global.github = 'https://github.com/Sithuwa/SITHUWA-MD'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com' // add your username
global.sudo = process.env.SUDO || "94761516805"
global.devs = '94761516805';
global.website = 'https://github.com/Sithuwa/SITHUWA-MD' //wa.me/+94000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/15b1dd8aeaa47888d75d7.jpg'
module.exports = {
  sessionName: process.env.SESSION_ID || "SITHUWA-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUFaWVR2WHZCTVY0MVloR3F2SlRtYTVjNlJOQ0hINDA3YkRac0YrNGRsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVJ4VEtoQWxNdjJuU3RJUVRYT1BFc0c1NmQwTGJWN3dzL1l0Q3VWTDdWQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDSVAvam9yckNCR1d1TllBMzdiL2ZhUXhUZGp6MFcxWTNMYi90dUVEZDFNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtbUh0N3EyVktKSDE4RWFzdkF0VG1vdjFSRnd6aTBFQlg5T0pJUUhmdFFZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdDb2ZXNUo5MUFNcGhFckJYWGw4eUtKdUdyYmlUWGhna1BjeU8vWjNRWFk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkV4Q0FxN0RDMlFrWFE0VW1JbnhLL05zb2xKamVWYkRDaXlvQ2ZwQkFyaTA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmMTRHY2plaVV1eTR4M0tEMnhYRjlUb2hIWWt3SGtjT1dacS9Bb3pUYU16SXpSaDZ4NjhOaXNXeXR4R0hoMncvM1dsVWdHQlhGc0JpK2k3THJuOHRDQT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI1MCwiYWR2U2VjcmV0S2V5IjoiZXNtVXhodE5BTFpTb2VCZXN1MXhTUHVwNTVRYWlsZW9LYkdWK1pLb20wUT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOlt7ImtleSI6eyJyZW1vdGVKaWQiOiIyMzQ5MDE2NzM4NTgzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjAyRjY4MEYxNUM0NUFFQTA2ODNDQjIxNkJFQzNCREVGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MDM5NDgwMTZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTY3Mzg1ODNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQjVGMjI3ODhENkFFRERBMERFRjY0OUQwNzRGQjhFNDkifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcwMzk0ODAxNn1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiUm42bTNWQkdSWVdHNXVTYzJONVhFUSIsInBob25lSWQiOiIzZTBmNWI1YS04OTJjLTQ4NDMtYjZhNS0xMGMxNjU5MjI4ZjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid2dGNG5xVzdrLzdnMEZxcFJrd0UzcVJlcjVjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwYzFuMUVTZmtoYitjTEZzTmVxMzZadyt1anM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNNK2d0OGtHRU92ZHdLd0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIzbWNSREJkemlLT21laG1HVHBZRWFmcFBrYlk2dEFSZDFqV1ZySGM0bldzPSIsImFjY291bnRTaWduYXR1cmUiOiIxaC9CQkovR2VkKzMwRXRIbGgzUEgrV1k3WVAvckhzTEVPV001OVYzWnYrc1dORjZESk1YNkt5eGNaV01nckpGa2szZGk2eVp0RCtndEQwbDJMajRBdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoibTVOYTZBWXZlOFUrdmlFTzhvd0t0ZUxBZVZjSjBzdmt0Vmxlcy90OTNsQndZZVkyVW0rclc0Q2ZacVUrcWd5clFMdHBkRWtSdmNQaVBWTC9LeEJPQWc9PSJ9LCJtZSI6eyJpZCI6IjIzNDkwMTY3Mzg1ODM6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJubyB0aW1lIGZvciBmYWtlIGZyaWVuZCBiaXRjaGVzIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTY3Mzg1ODM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkNW5FUXdYYzRpanBub1poazZXQkduNlQ1RzJPclFFWGRZMWxheDNPSjFyIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzAzOTQ4MDE0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZNYyJ9",      //Put Your Session Id Here
  author:  process.env.PACK_AUTHER ||  'SITHUWA BOT',
  packname:  process.env.PACK_NAME || 'MADE BY SITHUM KALHARA',
  
  botname:   process.env.BOT_NAME === undefined ? "SITHUWA-MD" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'sithumkalhara' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '234' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  caption :process.env.CAPTION || "\t*•ᴘᴏᴡᴇʀᴇᴅ ʙʏ ꜱɪᴛʜᴜᴡᴀ-ᴍᴅ•* ",   //*『sᴜʙsᴄʀɪʙᴇ • ʙʟᴀᴅᴇ ᴛᴇᴄʜ』*\n youtube.com/@blade444"),	
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'sithuwa-md',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
 
