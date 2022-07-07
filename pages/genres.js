import GenresDisplay from "../components/categories/GenresDisplay";
import Meta from "../components/common/Meta";

const genres = () => {
	return (
		<>
			<Meta
				title={"Genres - CyberAni"}
				description={"Find your favorite anime genre here!"}
			/>
			<GenresDisplay />
		</>
	);
};

export default genres;
