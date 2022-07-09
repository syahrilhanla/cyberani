import Head from "next/head";

const Meta = ({ title, description }) => {
	return (
		<Head>
			<meta name="viewport" content="width=device-width, initial-scale=1" />
			<meta name="description" content={description} />
			<meta charSet="utf-8" />
			<title>{title}</title>
		</Head>
	);
};

Meta.defaultProps = {
	title: "CyberAni - Watch Free Anime",
	description: "Free Anime Streaming Platform",
};

export default Meta;
