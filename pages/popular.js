import DisplayCategory from "../components/categories/DisplayCategory";
import Meta from "../components/common/Meta";

const popular = () => {
	return (
		<>
			<Meta
				title={"Popular - CyberAni"}
				description={"Watch the latest released anime here for free!"}
			/>
			<DisplayCategory
				animeType={"title"}
				categoryName={"Popular"}
				category={"most-popular"}
			/>
		</>
	);
};

export default popular;
