const Episodes = ({ animeData }) => {
	return (
		<div className="text-slate-200 text-left mt-3">
			<h1 className="text-3xl font-semibold mb-3">Episodes</h1>
			<div className="py-0">
				{animeData.episodesList.reverse().map((episode) => {
					return (
						<h4
							className="text-lg font-normal py-2 ml-2"
							key={episode.episodeNum}
						>
							Episode {episode.episodeNum}
						</h4>
					);
				})}
			</div>
		</div>
	);
};

export default Episodes;
