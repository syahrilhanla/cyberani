import Suggestion from "./Suggestion";
import AnimeRow from "./AnimeRow";

const Home = () => {
	return (
		<div
			className="absolute top-[78px] bg-[#0a192f] w-full min-h-screen flex flex-col items-center"
			name="home"
		>
			<Suggestion />
			<AnimeRow rowTitle={"Top Anime"} category={"popular"} />
			<AnimeRow rowTitle={"Recent Release"} category={"recent-release"} />
		</div>
	);
};

export default Home;
