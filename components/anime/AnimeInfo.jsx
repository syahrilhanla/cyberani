import Image from "next/image";
import React from "react";

const AnimeInfo = ({ animeData }) => {
	return (
		<div
			className="w-full h-fit flex flex-wrap 
		items-start justify-center text-slate-200 overflow-y-auto max-h-[80vh]"
		>
			{animeData.animeImg && (
				<Image
					src={animeData.animeImg}
					height={360}
					width={278}
					className="rounded-lg"
					alt={animeData.animeTitle}
				/>
			)}
			<div className="py-3">
				<h1>Title: {animeData.animeTitle}</h1>
				{animeData.otherNames && <h1>Other Names: {animeData.otherNames}</h1>}
				<h1>Synopsis: {animeData.synopsis}</h1>
				<h1>Type: {animeData.type}</h1>
				<h1>Status: {animeData.status}</h1>
				<h1>Total Episodes: {animeData.totalEpisodes}</h1>
				{animeData.genres && (
					<h1>
						Genre:{" "}
						{animeData.genres.map((genre, index) => (
							<span key={genre}>
								{genre}
								{index !== animeData.genres.length - 1 && ", "}
							</span>
						))}
					</h1>
				)}
			</div>
		</div>
	);
};

export default AnimeInfo;
