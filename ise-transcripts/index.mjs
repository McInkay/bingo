import YoutubeTranscript from "youtube-transcript";
import { writeFile, readdir } from "fs";

const videos = [
	"-Bq7T9ng9dA",
	"-NFmNyjyzV0",
	"-yJDh7mNGb8",
	"-yKxROc0sGA",
	"1pJgVvkuvqo",
	"2CkvWyO3s0w",
	"2E071GllR2M",
	"2lRBY6GGv1s",
	"2qRqI9ZaEzg",
	"3hb_nOqB-2g",
	"4LJp9IHc78s",
	"5AkFV6i9j78",
	"5Z0wZnN2d-U",
	"6NVl3DdaB-w",
	"7-H4zvvratY",
	"7PWMMuNLAb4",
	"7cj5HAXPVVo",
	"7kRKNKgE8_8",
	"8Jsddw7cxA0",
	"8XZPgDlxo0o",
	"8bW0csmiQEk",
	"99ZlaC1w_B0",
	"APhSsEARLRY",
	"AVKdRs2tMSE",
	"Ab5npjEGIJw",
	"AwUbplqDCcM",
	"Ay6A3ASHD38",
	"BA-ExvmFPtY",
	"C8SbBi2DurM",
	"DMs7H3PZMFY",
	"DkA0SsSiViU",
	"EPJZjYLUX-w",
	"Erv82NKZumY",
	"FDwj1Lz0kYM",
	"FkW1y2l2TQ8",
	"Fs8eeniQbXg",
	"Gg9Y2zY16Gs",
	"HRIwrPIYeHc",
	"Ihd-tsU1XVE",
	"IncyfDo5WOc",
	"KOlOv1f8WUo",
	"KUveDSJb780",
	"M5kILo3auck",
	"MNGJX1v0VzA",
	"Mo5RZgSWK0E",
	"NO4aBfnc2Oc",
	"NQIKq3iqr3I",
	"N_BSdmXFysE",
	"NzBzxbPMJzM",
	"NzV9pPqfA34",
	"O3EX-yvnSgg",
	"OFBEoJ4XJ20",
	"OIoYkvRnKh0",
	"PWCwyjXmMPU",
	"QkEVZWtdayg",
	"RQ_8bZYeFVM",
	"RdRuHM3YQN8",
	"S7-ku0iMDKM",
	"S8ck-MDEOE4",
	"S90gkcqf3cM",
	"SJ-YJzdujBg",
	"SRUrV7tEIYg",
	"ScE9jcIpSbQ",
	"SlXH_c6T2j4",
	"T69A5zxvhlQ",
	"TI8MsHzYVTU",
	"TOVh6ov7jMQ",
	"TYIYNCKPRBY",
	"Toetzaq76_Y",
	"UAnaL6OOO6c",
	"UdQTvYpXxDE",
	"UfjgLOOBqUw",
	"Us9oyOf2AZI",
	"WOlc6r1IH8s",
	"WS_XguTyK5Y",
	"X9LZVfHGzAY",
	"Ye0KxskXzhw",
	"ZXRLtgWT7jo",
	"Znny7EylPrQ",
	"_goYMrSw2h0",
	"_kwRDKhbdGk",
	"_lv1qKT3SB8",
	"a3-0Cobls-Y",
	"a51PmV9GHbA",
	"aP0IhZUOpfk",
	"ae-CYQ5xWrk",
	"axTNaQNFC_Y",
	"bL81Yb54QNc",
	"cPqgrJSVxZw",
	"cUg_0S8iBQA",
	"cYB6YcS4f-Y",
	"cZkNjJQqgQ8",
	"cpBBT2WECc0",
	"d50FShHkl3Y",
	"d8AYdmX2eec",
	"dTN8ghBjm2M",
	"dfczrd3BWwc",
	"dgECgj1Vjoc",
	"eBLKiXFJZvc",
	"eUzD5l1Sjr0",
	"em3k2xyLn9U",
	"f1919tgH8aU",
	"fArBRqpgLvQ",
	"fq5Lwa4Zkw4",
	"gZrD8iebU58",
	"gjR5XW5fiWs",
	"gn2f3TX-kEo",
	"h0fh_tXe9dE",
	"h70ze_jrW6w",
	"iIQZ6cBy4l4",
	"iacku3AkFmk",
	"ieXwX1i7Nbw",
	"ikIZlaRkXcc",
	"j0wmquiZto0",
	"jBsB2Y3ZZjk",
	"jFbWzYdLBRs",
	"jSuF0imfUwQ",
	"kKrZpILyE7g",
	"kjCN_17rGYo",
	"km_J9fT4hzk",
	"l4uMVWUGzmo",
	"m65kBaocR-M",
	"mHOXPQ8D0L0",
	"mOisWc7iccY",
	"niDN6JIm6Ts",
	"novXHOBr4go",
	"oxdDf0X4S2o",
	"p-cTph0Fqhk",
	"pMKkrIsDTrU",
	"q2e6IZk5I78",
	"qY53LQl3dTE",
	"quEe-6Vt-Iw",
	"sGiiO9c32ys",
	"sPYf3JB6x28",
	"soINmubepNA",
	"tcxq8Ykx03k",
	"u2YFNI2w558",
	"u4Qd1kl2TfQ",
	"uCOzWzb5_J0",
	"u_xINoBgdDU",
	"vUg2PFugd14",
	"vYm9EInO9jo",
	"wfbULy3jbKs",
	"xfGWgE3Zw3M",
	"y-YWUccWVKE",
	"yVv_VxP5XR8",
	"yp-76yfNqNI",
	"zL-3uBWDVic",
	"ze2eyRo-VTA",
	"C_NdnOdRV6c",
	"3UIe9XQmjVE",
	"qHCjzZfsapo",
	"1_OdHL5MiZA",
	"RpRXL3hm4RU",
	"vo1QOHHa314",
	"jmZheiA50WI",
	"M9TrzRnSbP0",
	"Xr-QWC7Apmw",
	"rUk0KAgN9w4",
	"4X_723chOk8",
	"b0RfKtiHFsQ",
	"M4uWEsoOSYc",
	"pYrvMn38Dus",
	"ol2Mi6S0fzE",
	"7gr-DVK8XfA",
	"L2KnFPx6j7o",
	"acRd-7sJZEM",
	"2uxuxiGwboM",
	"AobiTTAmaH4",
	"-BXVrSG9Mm4",
	"Iw2yRn2Gbvo",
	"EPUIHi1H6TQ",
	"aUqpdaxkz_c",
	"_a3ilEUNeqQ",
	"oFeFYyVmGFw",
	"KH7uL3wjKac",
	"jxJEEK1x2Y8",
	"kCly8QcwNEU",
	"9-qD0XJ6QoU",
	"K0WhNoVH0mc",
	"suoGMmNvTaI",
	"i3LLvfbH3xY",
	"Kf2C2DZm6Qk",
	"sa8526SkyT0",
	"bOj9skmDXcM",
	"V3GknkGTN94",
	"giv0ElZPhp4",
	"cLbtmRiI1b8",
	"WDWNofaRFyk",
	"Zwf03Ug2C_A",
	"2ocL7CVB3FI",
	"KOpG6bo-6WU",
	"_lx77pv96gc",
];

function millisToTimestamp(millis) {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return seconds == 60
		? minutes + 1 + ":00"
		: minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}

async function fileExists(id) {
	var pattern = RegExp(`\\(${id}\\).txt$`);
	return new Promise((res) => {
		readdir(".//transcripts", (err, files) => {
			if (files.find((file) => pattern.test(file))) {
				res(true);
			} else {
				console.log(`File not found for episode: ${id}`);
				res(false);
			}
		});
	});
}

videos.forEach((video) => {
	fileExists(video).then((fileExists) => {
		if (fileExists) {
			return;
		}
		YoutubeTranscript.default
			.fetchTranscript(video)
			.then((arrayOfTranscript) => {
				const transcript = arrayOfTranscript.reduce((prev, curr) => {
					return (
						prev +
						`${curr.text} (${millisToTimestamp(
							curr.offset
						)} - ${millisToTimestamp(curr.offset + curr.duration)})\n`
					);
				}, "");
				writeFile(`transcripts\\${video}.txt`, transcript, function (err) {
					if (err) throw err;
					console.log(`Created ${video}`);
				});
			})
			.catch((e) => {
				console.log(`Error getting ${video}`);
				console.log(e);
			});
	});
});
