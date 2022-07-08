import Image from "next/image";
import React from "react";

const AnimeInfo = ({ animeData }) => {
	return (
		<div className="w-full grid grid-cols-1 items-start text-slate-200">
			<Image
				src={animeData.animeImg}
				height={360}
				width={278}
				className="rounded-lg"
			/>
			<h1>Title: {animeData.animeTitle}</h1>
			{animeData.otherNames && <h1>Other Names: {animeData.otherNames}</h1>}
			<h1>Type: {animeData.type}</h1>
			<h1>Status: {animeData.status}</h1>
			<h1>Total Episodes: {animeData.totalEpisodes}</h1>
			<h1>
				Genre:{" "}
				{animeData.genres.map((genre, index) => (
					<span>
						{genre}
						{index !== animeData.genres.length - 1 && ", "}
					</span>
				))}
			</h1>
		</div>
	);
};

export default AnimeInfo;
