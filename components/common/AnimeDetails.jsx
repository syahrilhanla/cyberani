import { useEffect, useState } from "react";

import Meta from "../common/Meta";
import AnimeInfo from "../anime/AnimeInfo";
import VideoComponent from "../anime/VideoComponent";
import Episodes from "../anime/Episodes";

import { useSelector, useDispatch } from "react-redux";
import { selectAnime, setEpisodeList } from "../redux/animeSlice";

const AnimeDetails = ({ animeData }) => {
	const episode = useSelector((state) => state.animeReducer.episodeNum);
	const episodeList = useSelector((state) => state.animeReducer.episodes);
	// const currentAnime = useSelector((state) => state.animeReducer.currentAnime);

	const dispatch = useDispatch();

	const [episodeDetail, setEpisodeDetail] = useState(episode);

	const getIndexOfEpisodeDetail = (episode) => {
		const episodeIndex = animeData.episodes.findIndex(
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
				className="grid lg:grid-cols-[3fr_5fr_2fr] grid-cols-1 w-full h-[90vh]
     mx-auto px-4 lg:px-14 gap-12 justify-center lg:justify-between"
			>
				<AnimeInfo animeData={animeData} />
				<VideoComponent
					title={
						animeData.type !== "Movie"
							? `${animeData.title} - Episode ${episode}`
							: `${animeData.title}`
					}
					episodeDetail={episodeDetail}
					synopsis={animeData.description}
				/>
				{animeData.type !== "Movie" && (
					<Episodes animeData={animeData} episode={episode} />
				)}
			</div>
		</>
	);
};

export default AnimeDetails;
