import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<div className=" w-full flex flex-col items-center">
			<Head>
				<title>CyberAni - Watch Free Anime</title>
				<meta name="description" content="Free streaming anime platform" />
				<link rel="icon" href="/CyberAni-logo.png" />
			</Head>
			<Navbar />
			<div className="bg-[#0a192f] absolute top-[78px] w-full min-h-screen flex flex-col items-center">
				{children}
			</div>
		</div>
	);
};

export default Layout;
