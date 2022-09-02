import Head from "next/head";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
	return (
		<>
			<Navbar />
			<div className="w-full flex flex-col items-center">
				<Head>
					<meta name="description" content="Free streaming anime platform" />
					<link rel="icon" href="/CyberAni-logo.png" />
				</Head>
				<div className="w-full flex flex-col items-center top-[10vh] absolute">
					{children}
				</div>
			</div>
		</>
	);
};

export default Layout;
