import LittleAnimeCard from "./LittleAnimeCard";

const AnimeRow = ({ rowTitle }) => {
	return (
		<div className="flex flex-col w-[90%] mt-2 text-left font-medium text-slate-200">
			<h1 className="text-2xl mb-2">{rowTitle}</h1>
			<div className="grid grid-cols-6 gap-3">
				<LittleAnimeCard />
				<LittleAnimeCard />
				<LittleAnimeCard />
				<LittleAnimeCard />
				<LittleAnimeCard />
				<LittleAnimeCard />
			</div>
		</div>
	);
};

export default AnimeRow;
