import GenresDisplay from "../components/genres/GenresDisplay";
import Layout from "../components/common/Layout";

const genres = () => {
	return (
		<Layout title={"CyberAni - Genre"}>
			<GenresDisplay />
		</Layout>
	);
};

export default genres;
