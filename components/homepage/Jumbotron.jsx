import HomeSuggestion from "./HomeSuggestion";

const Jumbotron = ({ data }) => {
	return (
		<div className=" text-gray-300 flex justify-center min-w-full px-8">
			<HomeSuggestion data={data} />
		</div>
	);
};

export default Jumbotron;
