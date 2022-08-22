import React, { useEffect, useState } from "react";
import AnimeInfo from "../anime/AnimeInfo";
import Episodes from "../anime/Episodes";
import VideoComponent from "../anime/VideoComponent";
import Meta from "../common/Meta";

import { useDispatch, useSelector } from "react-redux";

const AnimeDetails = ({ animeData }) => {
	const episode = useSelector((state) => state.animeReducer.episodeNum);
	const dispatch = useDispatch();

	const [episodeDetail, setEpisodeDetail] = useState(episode);

	const getIndexOfEpisodeDetail = (episode) => {
		const episodeIndex = animeData.episodesList.findIndex(
			(data) => data.episodeNum == episode
		);
		return episodeIndex;
	};

	useEffect(() => {
		console.table({ episode });
		setEpisodeDetail(
			(prevValue) =>
				(prevValue = animeData.episodesList[getIndexOfEpisodeDetail(episode)])
		);
	}, [episode, animeData]);

	return (
		<>
			<Meta
				title={`${animeData.animeTitle} - CyberAni`}
				description={"Watch the latest released anime here for free!"}
			/>
			<div
				className="grid lg:grid-cols-[3fr_5fr_2fr] grid-cols-1 w-full h-[90vh]
     mx-auto px-4 lg:px-14 gap-12 justify-center lg:justify-between"
			>
				<AnimeInfo animeData={animeData} />
				<VideoComponent
					title={`${animeData.animeTitle} - Episode ${episode}`}
					episodeDetail={episodeDetail}
					synopsis={animeData.synopsis}
				/>
				<Episodes animeData={animeData} />
			</div>
		</>
	);
};

export default AnimeDetails;
