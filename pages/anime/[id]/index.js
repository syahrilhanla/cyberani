import { useRouter } from "next/router";

const anime = () => {
	const router = useRouter();
	const { id } = router.query;
	return <div>{id}</div>;
};

export default anime;
