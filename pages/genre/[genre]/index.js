import GenreDetails from "../../../components/categories/GenreDetails";

const index = ({ genre }) => {
	return (
		<>
			<GenreDetails genre={genre} />
		</>
	);
};

export const getServerSideProps = async ({ res, params }) => {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	return {
		props: { genre: params.genre },
	};
};

export default index;
