import React, { useEffect, useState } from "react";
import AnimeInfo from "../anime/AnimeInfo";
import Episodes from "../anime/Episodes";
import VideoComponent from "../anime/VideoComponent";
import Meta from "../common/Meta";

import { useDispatch, useSelector } from "react-redux";

const AnimeDetails = ({ animeData }) => {
	const episode = useSelector((state) =>
		state.animeReducer.episodeNum.toString()
	);
	const dispatch = useDispatch();

	const [currentEpisode, setCurrentEpisode] = useState(episode);
	const [episodeDetail, setEpisodeDetail] = useState(episode);

	const getIndexOfEpisodeDetail = (currentEpisode) => {
		const episodeIndex = animeData.episodesList.findIndex(
			(data) => data.episodeNum === currentEpisode
		);
		return episodeIndex;
	};

	useEffect(() => {
		console.table({ episode, currentEpisode });
		setEpisodeDetail(
			(prevValue) =>
				(prevValue =
					animeData.episodesList[getIndexOfEpisodeDetail(currentEpisode)])
		);
	}, [currentEpisode, animeData, episode]);

	return (
		<>
			<Meta
				title={`${animeData.animeTitle} - CyberAni`}
				description={"Watch the latest released anime here for free!"}
			/>
			<div
				className="grid md:grid-cols-[3fr_5fr_2fr] grid-cols-1 w-full
     mx-auto px-4 md:px-14 gap-12 justify-center md:justify-between"
			>
				<AnimeInfo animeData={animeData} />
				<VideoComponent
					title={`${animeData.animeTitle} - Episode ${currentEpisode}`}
					episodeDetail={episodeDetail}
					synopsis={animeData.synopsis}
				/>
				<Episodes
					animeData={animeData}
					currentEpisode={currentEpisode}
					setCurrentEpisode={setCurrentEpisode}
				/>
			</div>
		</>
	);
};

export default AnimeDetails;
