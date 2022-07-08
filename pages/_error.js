import Error from "next/error";
import { fetchAnimeDetails } from "../components/utils/fetchAnime";

export async function getServerSideProps(context) {
	const res = await fetchAnimeDetails(context.params.id);
	const errorCode = res.ok ? false : res.statusCode;

	return {
		props: { errorCode, stars: res },
	};
}

export default function Page({ errorCode, stars }) {
	if (errorCode) {
		return <Error statusCode={errorCode} />;
	}

	return <div>Next stars: {stars}</div>;
}
