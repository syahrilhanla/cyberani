import Suggestion from "./Suggestion";

const Home = () => {
	return (
		<div
			className="absolute top-[78px] bg-[#0a192f] w-full min-h-screen flex flex-col items-center"
			name="home"
		>
			<Suggestion />
		</div>
	);
};

export default Home;
