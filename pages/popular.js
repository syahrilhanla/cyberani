import DisplayCategory from "../components/categories/DisplayCategory";
import Meta from "../components/common/Meta";

const popular = () => {
	return (
		<>
			<Meta
				title={"Latest Release - CyberAni"}
				description={"Watch the latest released anime here for free!"}
			/>
			<DisplayCategory
				animeType={"title"}
				categoryName={"Popular"}
				category={"popular"}
			/>
		</>
	);
};

export default popular;
