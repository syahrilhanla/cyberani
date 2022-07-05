import Head from "next/head";
import Home from "../components/Home";
import Navbar from "../components/Navbar";

export default function HomePage() {
	return (
		<div>
			<Head>
				<title>CyberAni</title>
				<meta name="description" content="Free streaming anime platform" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Navbar />
			<Home />
		</div>
	);
}
