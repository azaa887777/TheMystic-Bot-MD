import ytdl from "ytdl-core";
import yts from "yt-search";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
import os from "os";

const streamPipeline = promisify(pipeline);

var handler = async (m, { conn, command, text, usedPrefix }) => {
	if (!text) throw `مثال : \n ${usedPrefix}${command} midle of night`;
	
	let search = await yts(text);
	let vid = search.videos[Math.floor(Math.random() * search.videos.length)];
	if (!search) throw `Video Not Found, Try Another Title`;
	
	let { title, thumbnail, timestamp, views, ago, url } = vid;
	let wm = 'MOCINE BOT';
	let captvid = 'جاري التحميل انتظر قليلاً '
;
	
	await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: captvid }, { quoted: m });
	
	const audioStream = ytdl(url, {
		filter: `audioonly`,
		quality: `highestaudio`
	});
	
	// Get the path to the system s temporary directory
	const tmpDir = os.tmpdir();
	
	// Create writable stream in the temporary directory
	const writableStream = fs.createWriteStream(`${tmpDir}/${title}.mp3`);
	
	// Start the download
	await streamPipeline(audioStream, writableStream);
	
	let doc = {
		audio: {
			url: `${tmpDir}/${title}.mp3`
		},
		mimetype: `audio/mp4`,
		fileName: title,
		contextInfo: {
			externalAdReply: {
				showAdAttribution: true,
				mediaType: 2,
				mediaUrl: url,
				title,
				body: wm,
				sourceUrl: url,
				thumbnail: await (await conn.getFile(thumbnail)).data 
			}
		}
	};
	
	await conn.sendMessage(m.chat, doc, { quoted: m });
	
	// Delete the audio file
	fs.unlink(`${tmpDir}/${title}.mp3`, (err) => {
		if (err) console.error(`Failed to delete audio file: ${err}`);
		console.log(`Deleted audio file: ${tmpDir}/${title}.mp3`);
	});
};
handler.help = [`play`].map((v) => `${v} <query>`);
handler.tags = [`downloader`];
handler.command = [`mp3`, `songs`, `ytmp3doc`];

handler.exp = 0;
handler.diamond = false;

export default handler;