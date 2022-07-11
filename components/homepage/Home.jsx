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
			/>
			<AnimeRow
				rowTitle={"Recent Release"}
				category={"recent-release"}
				animeType={"episode"}
			/>
		</>
	);
};

export default Home;
