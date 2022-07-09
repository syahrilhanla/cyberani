import { useEffect, useState } from "react";
import { fetchAnimeEpisode } from "../utils/fetchAnime";

const VideoComponent = ({ title, episodeDetail }) => {
	const [episodeURL, setEpisodeURL] = useState();

	useEffect(() => {
		const fetchData = async () => {
			const results = await fetchAnimeEpisode(episodeDetail.episodeId);
			setEpisodeURL(results);
		};

		episodeDetail && fetchData();
	}, [episodeDetail]);

	return (
		<div>
			<h1 className="text-xl font-semibold text-slate-200 mb-4">{title}</h1>
			{episodeURL && (
				<iframe
					allowFullScreen={true}
					width="100%"
					height="100%"
					scrolling="no"
					src={`${episodeURL.Referer}`}
				></iframe>
			)}
		</div>
	);
};

export default VideoComponent;
