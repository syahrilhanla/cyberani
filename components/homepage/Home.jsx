import Suggestion from "./Suggestion";
import AnimeRow from "./AnimeRow";

const Home = () => {
	return (
		<>
			<Suggestion />
			<AnimeRow
				rowTitle={"Top Anime"}
				category={"popular"}
				animeType={"title"}
				toPage={"popular"}
			/>
			<AnimeRow
				rowTitle={"Recent Release"}
				category={"recent-release"}
				animeType={"episode"}
				toPage={"latest"}
			/>
			<AnimeRow
				rowTitle={"Top Airing"}
				category={"top-airing"}
				animeType={"title"}
				toPage={"trending"}
			/>
			<AnimeRow
				rowTitle={"Anime Movies"}
				category={"anime-movies"}
				animeType={"title"}
			/>
		</>
	);
};

export default Home;
