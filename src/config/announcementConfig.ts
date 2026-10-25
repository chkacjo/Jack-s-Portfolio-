import type { AnnouncementConfig } from "../types/announcementConfig";

export const announcementConfig: AnnouncementConfig = {
	title: "",
	content: "歡迎來到 Jack 的網站！",
	closable: true,
	link: {
		enable: true,
		text: "關於我",
		url: "/about/",
		external: false,
	},
};
