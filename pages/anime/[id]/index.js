import AnimeDetails from "../../../components/common/AnimeDetails";
import { fetchAnimeDetails } from "../../../components/utils/fetchAnime";

const index = ({ animeData }) => {
	return <AnimeDetails animeData={animeData} />;
};

export const getServerSideProps = async ({ res, params }) => {
	res.setHeader(
		"Cache-Control",
		"public, s-maxage=10, stale-while-revalidate=59"
	);

	const animeData = await fetchAnimeDetails(params.id);

	return {
		props: { animeData },
	};
};

export default index;
