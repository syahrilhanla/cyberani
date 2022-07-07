import DisplayCategory from "../components/categories/DisplayCategory";
import Layout from "../components/common/Layout";

const latest = () => {
	return (
		<Layout title={"CyberAni - Latest Release"}>
			<DisplayCategory
				categoryName={"Latest Release"}
				animeType={"episode"}
				category={"recent-release"}
			/>
		</Layout>
	);
};

export default latest;
