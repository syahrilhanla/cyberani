import GenresDisplay from "../components/categories/GenresDisplay";
import Layout from "../components/common/Layout";

const genres = () => {
	return (
		<Layout title={"CyberAni - Genre"}>
			<GenresDisplay />
		</Layout>
	);
};

export default genres;
