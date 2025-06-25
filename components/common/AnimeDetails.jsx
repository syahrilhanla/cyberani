import { useEffect, useState } from "react";

import Meta from "../common/Meta";
import AnimeInfo from "../anime/AnimeInfo";
import VideoComponent from "../anime/VideoComponent";
import Episodes from "../anime/Episodes";

import { useSelector, useDispatch } from "react-redux";
import { selectAnime, setEpisodeList } from "../redux/animeSlice";

const AnimeDetails = ({ animeData }) => {
	const episode = useSelector((state) => state.animeReducer.episodeNum);

	const dispatch = useDispatch();

	const [episodeDetail, setEpisodeDetail] = useState(episode);

	const getIndexOfEpisodeDetail = (episode) => {
		const episodeIndex = animeData.episodes?.findIndex(
			(data) => data.number == episode
		);
		return episodeIndex;
	};

	useEffect(() => {
		dispatch(selectAnime(animeData.title));
		dispatch(setEpisodeList(animeData.episodes));
	}, []);

	useEffect(() => {
		setEpisodeDetail(
			(prevValue) =>
				(prevValue = animeData.episodes[getIndexOfEpisodeDetail(episode)])
		);
	}, [episode, animeData]);

	return (
		<>
			<Meta
				title={`${animeData.title} - CyberAni`}
				description={"Watch the latest released anime here for free!"}
			/>
			<div
				className="grid grid-cols-1 lg:grid-cols-[2fr_7fr_3fr] w-full h-auto lg:h-[90vh]
					mx-auto px-4 lg:px-14 gap-6 md:gap-8 lg:gap-12 justify-center lg:justify-between"
			>
				{/* Anime Info Section */}
				<div className="order-1 lg:order-3 md:col-span-2 lg:col-span-1">
					<AnimeInfo animeData={animeData} />
				</div>

				{/* Video Section */}
				<div className="order-2 lg:order-2">
					<VideoComponent
						title={
							animeData.type !== "Movie"
								? `${animeData.title} - Episode ${episode}`
								: `${animeData.title}`
						}
						episodeDetail={episodeDetail}
						synopsis={animeData.description}
					/>
				</div>

				{/* Episodes Section */}
				{animeData.type !== "Movie" && (
					<div className="order-3 lg:order-1">
						<Episodes animeData={animeData} currentEpisode={episode} />
					</div>
				)}
			</div>
		</>
	);
};

export default AnimeDetails;
