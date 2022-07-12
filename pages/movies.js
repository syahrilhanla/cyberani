import DisplayCategory from "../components/categories/DisplayCategory";
import Meta from "../components/common/Meta";

const movies = () => {
	return (
		<>
			<Meta
				title={"Anime Movies - CyberAni"}
				description={"Watch the latest released anime here for free!"}
			/>
			<DisplayCategory
				animeType={"title"}
				categoryName={"Anime Movies"}
				category={"anime-movies"}
			/>
		</>
	);
};

export default movies;
