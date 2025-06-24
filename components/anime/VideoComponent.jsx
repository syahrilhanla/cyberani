import { useEffect, useState } from "react";

const VideoComponent = ({ title, episodeDetail, synopsis }) => {
	const [episodeURL, setEpisodeURL] = useState("");

	const setStreamURL = async () => {
		const seriesId = episodeDetail?.id?.split("$")?.[0];
		const episodeId = episodeDetail?.id?.split("$")?.[2];

		setEpisodeURL(
			`https://streamx2.top/vidcloud.php?id=${seriesId}?ep=${episodeId}`
		);

		// format:
		// https://streamx2.top/vidcloud.php?id=sakamoto-days-19431?ep=131797
	};

	useEffect(() => {
		episodeDetail && setStreamURL();
	}, [episodeDetail]);

	return (
		<div
			className="min-h-[300px] max-w-[600px] aspect-auto lg:aspect-video"
			name="watch"
		>
			<h1 className="text-xl font-semibold text-slate-200 mb-4">{title}</h1>
			{episodeURL ? (
				<iframe
					allowFullScreen={true}
					width="100%"
					height="100%"
					scrolling="no"
					src={episodeURL}
				></iframe>
			) : (
				<div
					className="h-[80%] lg:h-full lg:w-full bg-slate-500 rounded-lg
				 text-slate-200 grid place-items-center"
				>
					<h2>Sorry, episode has not been released yet</h2>
				</div>
			)}
			<div className="text-slate-200 mt-4 overflow-auto h-[35vh] leading-relaxed lg:block hidden">
				<h2 className="text-xl font-medium">Synopsis:</h2>
				<p className="font-light">{synopsis}</p>
			</div>
		</div>
	);
};

export default VideoComponent;
