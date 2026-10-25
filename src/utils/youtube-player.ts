export interface YouTubePlayer {
	playVideo(): void;
	pauseVideo(): void;
	setVolume(volume: number): void;
	getVideoData(): { title?: string };
	destroy(): void;
}

type PlayerConstructor = new (
	element: HTMLIFrameElement,
	options: {
		events: {
			onReady(): void;
			onStateChange(event: { data: number }): void;
			onError(): void;
		};
	},
) => YouTubePlayer;

declare global {
	interface Window {
		YT?: { Player: PlayerConstructor };
		onYouTubeIframeAPIReady?: () => void;
	}
}

let apiPromise: Promise<PlayerConstructor> | undefined;

export function loadYouTubePlayer(): Promise<PlayerConstructor> {
	if (window.YT?.Player) return Promise.resolve(window.YT.Player);
	if (apiPromise) return apiPromise;
	apiPromise = new Promise<PlayerConstructor>((resolve, reject) => {
		const script = document.createElement("script");
		const timeout = window.setTimeout(fail, 15000);
		function fail() {
			window.clearTimeout(timeout);
			script.remove();
			apiPromise = undefined;
			reject(new Error("YouTube player unavailable"));
		}
		const previousReady = window.onYouTubeIframeAPIReady;
		window.onYouTubeIframeAPIReady = () => {
			previousReady?.();
			if (!window.YT?.Player) return;
			window.clearTimeout(timeout);
			resolve(window.YT.Player);
		};
		script.src = "https://www.youtube.com/iframe_api";
		script.onerror = fail;
		document.head.append(script);
	});
	return apiPromise;
}
