import fs from 'fs'
import fetch from 'node-fetch'
import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {
try {
let vn = './media/menu.mp3'
let pp = imagen4
let img = await(await fetch('https://telegra.ph/file/7d33a005309a36025fe3d.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `
‎♕︎𝙷𝙸 @${m.sender.split`@`[0]} ❀!!
-------᪥ᴍᴏʜᴄɪɴᴇʙᴏᴛ᪥-------
-👑ɢʀᴏᴜᴘ ᴡʜᴀᴛsᴀᴘᴘ ᴏғғɪᴄɪᴀʟ👑-
https://chat.whatsapp.com/FQo0sqzNGBY44OdY7A5ty5
-⭕ɪɴsᴛᴀɢʀᴀᴍ ᴏғ ᴛʜᴇ ᴏᴡɴᴇʀ⭕-
-www.instagram.com/mh7__x
┏━━━━━━━━━━━━━━┓
‎☆------ᴅᴏᴡɴʟᴏᴀᴅᴇʀ-----☆
┗━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━┓
┃𖦹.ɪɢ2[ɪɴsᴛᴀɢʀᴀᴍ]
┃𖦹.ғʙ[ғᴀᴄᴇʙᴏᴏᴋ]
┃𖦹.ᴍᴇᴅᴀғɪʀᴇ[ᴍᴇᴅɪᴀғɪʀᴇ]
┃𖦹.𝚈𝚃𝙼𝙿3[𝚈𝚃 𝙰𝚄𝙳]
┃𖦹.𝚈𝚃𝙼𝙿4[𝚈𝚃 𝚅𝙸𝙳]
┃𖦹.𝚈𝚃𝙼𝙿3𝙳𝙾𝙲[𝚈𝚃𝙰𝚄𝙳(𝙳𝙾𝙲)]
┃𖦹.𝚈𝚃𝙼𝙿4𝙳𝙾𝙲[𝚈𝚃𝚅𝙸𝙳(𝙳𝙾𝙲)]
┃𖦹.𝙿𝙻𝙰𝚈𝙻𝙸𝚂𝚃[𝙿𝙻𝙰𝚈𝙻𝙸𝚂𝚃]
┃𖦹.𝙿𝙻𝙰𝚈𝙻𝙸𝚂𝚃2[𝚂𝙴𝚁𝚅𝙴𝚁2]
┃𖦹.𝚃𝚆𝙸𝚃𝚃𝙴𝚁[𝚃𝚆𝙸𝚃𝚃𝙴𝚁]
┃𖦹.𝚃𝙸𝙺𝚃𝙾𝙺[𝚃𝙸𝙺𝚃𝙾𝙺 ]
┃𖦹.𝙸𝙼𝙰𝙶𝙴𝙽[𝙶𝙾𝙾𝙶𝙻𝙴_ɪᴍɢ]
┃𖦹.𝙰𝙿𝙺[𝙰𝙿𝚃𝙾𝙸𝙳𝙴]
┗━━━━━━━━━━━━┛
┏━━━━━━━━━━━━┓
‎☆---- sᴇᴀʀᴄʜɪɴɢ----☆
┗━━━━━━━━━━━━┛
┃☁︎.𝙿𝙻𝙰𝚈[𝚈𝙾𝚄𝚃𝚄𝙱𝙴]
┃☁︎.𝙿𝙻𝙰𝚈2[𝚂𝙴𝚁𝚅ᴇʀ2]
┃☁︎.𝚈𝚃𝚂[𝚈𝚃 𝚂𝙴𝙰𝚁𝙲ʜ]
┃☁︎.𝙶𝙾𝙾𝙶𝙻𝙴[𝙶𝙾𝙾𝙶𝙻𝙴]
┃☁︎.𝚂𝚂[𝚂𝙲𝚁𝙴𝙴𝙽𝚂𝙷𝙾𝚃(ᴜʀʟ)]
┗━━━━━━━━━━━━┛
┏━━━━━━━━━━━━┓
‎☆------sᴛɪᴋᴄᴇʀs------☆
┗━━━━━━━━━━━━┛
┃✿︎.𝚂𝚃𝙸𝙲𝙺𝙴𝚁[𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚂 𝙼𝙰𝙺𝙴𝚁]
┃✿︎.𝚆𝙼[𝚁𝙸𝙶𝙷𝚃𝚂]
┃✿︎.𝚁𝙴𝙼𝙾𝚅𝙴𝙱𝙶[𝙱𝙰𝙲𝙺𝙶𝚁𝙾𝚄𝙽𝙳]
┗━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━┓
‎☆------ᴄᴏɴᴠᴇʀᴛᴇʀ----☆
┗━━━━━━━━━━━━━┛
┃⁂.𝚃𝙾𝙸𝙼𝙶[𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚃𝙾𝙸𝙼𝙶]
┃⁂.𝚃𝙾𝙼𝙿4[𝚂𝚃𝙸𝙲𝙺𝙴𝚁𝚃𝙾𝚅𝙸𝙳]
┃⁂.𝚃𝙾𝚄𝚁𝙻[𝙸𝙼𝙰𝙶𝙴𝚃𝙾URL]
┃⁂.𝚃𝚃𝚂[𝚃𝙴𝚇𝚃 𝚃𝙾 𝚂𝙾𝚄𝙽𝙳]
┗━━━━━━━━━━━━━┛
`.trim()
let buttons = []
let buttonMessage = {
image: pp,
caption: str.trim(),
mentions: [m.sender],
footer: `*${wm}*`,
headerType: 4,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
showAdAttribution: true,
mediaType: 'VIDEO',
mediaUrl: null,
title: '👑ʙᴏᴛ ᴍᴀʀᴏᴄ 24/7 👑',
body: null,
thumbnail: img,
sourceUrl: `https://www.instagram.com/mh7__x`
}}}
conn.sendMessage(m.chat, buttonMessage, { quoted: m })
//await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] من المحتمل ان يكون هناك خطأ بالبوت،اذا كان تواصل مع المطور*', m)
}}
handler.command = /^(menu|bobiz|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}