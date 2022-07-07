import Suggestion from "./Suggestion";
import AnimeRow from "./AnimeRow";

const Home = () => {
	return (
		<>
			<Suggestion />
			<AnimeRow rowTitle={"Top Anime"} category={"popular"} />
			<AnimeRow rowTitle={"Recent Release"} category={"recent-release"} />
		</>
	);
};

export default Home;
