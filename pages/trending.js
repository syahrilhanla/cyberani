import DisplayCategory from "../components/categories/DisplayCategory";
import Meta from "../components/common/Meta";

const trending = () => {
	return (
		<>
			<Meta
				title={"Trending - CyberAni"}
				description={"Watch trendiest anime here for free!"}
			/>
			<DisplayCategory
				categoryName={"Trending Anime"}
				animeType={"episode"}
				category={"top-airing"}
			/>
		</>
	);
};

export default trending;
