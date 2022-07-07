import DisplayCategory from "../components/categories/DisplayCategory";
import Layout from "../components/common/Layout";

const popular = () => {
	return (
		<Layout title={"CyberAni - Popular"}>
			<DisplayCategory
				animeType={"title"}
				categoryName={"Popular"}
				category={"popular"}
			/>
		</Layout>
	);
};

export default popular;
