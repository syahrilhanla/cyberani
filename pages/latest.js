import DisplayCategory from "../components/categories/DisplayCategory";
import Meta from "../components/common/Meta";

const latest = () => {
	return (
		<>
			<Meta
				title={"Latest Release - CyberAni"}
				description={"Watch the latest released anime here for free!"}
			/>
			<DisplayCategory
				categoryName={"Latest Release"}
				animeType={"title"}
				category={"recent-episodes"}
			/>
		</>
	);
};

export default latest;
