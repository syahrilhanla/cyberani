import { useEffect, useState } from "react";
import { fetchAnimeEpisode } from "../utils/fetchAnime";

const VideoComponent = ({ title, episodeDetail, synopsis }) => {
	const [episodeURL, setEpisodeURL] = useState();

	const fetchData = async () => {
		const results = await fetchAnimeEpisode(episodeDetail.episodeId);
		setEpisodeURL(results);
	};
	useEffect(() => {
		episodeDetail && fetchData();
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
					src={`${episodeURL.Referer}`}
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
