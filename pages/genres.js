import GenresDisplay from "../components/categories/GenresDisplay";
import Meta from "../components/common/Meta";

const genres = (
	props
) => {
	const { genres } = props;

	return (
		<>
			<Meta
				title={"Genres - CyberAni"}
				description={"Find your favorite anime genre here!"}
			/>
			<GenresDisplay genres={genres} />
		</>
	);
};

export default genres;

export const getStaticProps = async () => {
	const genres = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/genre/list`);

	return {
		props: {
			genres: await genres.json()
		},
	};
};