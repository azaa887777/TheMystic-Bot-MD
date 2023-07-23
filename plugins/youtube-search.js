//mohcine bot
import yts from 'yt-search'
import fs from 'fs'

let handler = async (m, {conn, text }) => {
  if (!text) throw  '*kteb smiyt dakxi li tt9lb 3lih*.                        *example:*.yts سورة الكهف'
  await conn.reply(m.chat, global.wait, m)
  let results = await yts(text)
  let tes = results.all
  let teks = results.all.map(v => {
    switch (v.type) {
      case 'video': return `
° *_${v.title}_*
↳ LINK: ${v.url}
↳ DURATION: ${v.timestamp}
↳ WHEN THE VIDEO POSTED: ${v.ago}
↳ VIEWES : ${v.views}`}}).filter(v => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n')
  conn.sendFile(m.chat, tes[0].thumbnail, 'yts.jpeg', teks, m)
}
handler.help = ['ytsearch *<texto>*'] 
handler.tags = ['search']
handler.command = ['ytsearch', 'yts'] 


export default handler