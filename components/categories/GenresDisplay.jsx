import GenreCard from "../common/GenreCard";
import genresData from "./genresData";

const GenresDisplay = () => {
	return (
		<div className="w-full p-3 my-6 flex flex-col justify-center items-center">
			<div className="lg:w-[70%] ml-3 mb-4">
				<h1 className="text-left text-slate-200 text-3xl font-semibold">
					Genres
				</h1>
			</div>
			<div
				className="lg:w-[70%] grid grid-cols-2 lg:grid-cols-3 lg:grid-cols-5
     mt-2 text-left font-medium text-slate-100 pb-2"
			>
				{genresData.map((genre) => (
					<GenreCard genre={genre} key={genre} />
				))}
			</div>
		</div>
	);
};

export default GenresDisplay;
