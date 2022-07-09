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
				animeType={"episode"}
				category={"recent-release"}
			/>
		</>
	);
};

export default latest;
