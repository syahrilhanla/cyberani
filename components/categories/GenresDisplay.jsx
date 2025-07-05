import Link from "next/link";

const GenresDisplay = ({ genres }) => {
	const colors = [
		"text-blue-500/90",
		"text-green-500/90",
		"text-purple-500/90",
		"text-red-500/90",
		"text-yellow-500/90",
		"text-pink-500/90",
		"text-teal-500/90",
	];

	return (
		<div className="w-full p-3 my-6 flex flex-col justify-center items-center">
			<div className="lg:w-[70%] ml-3 mb-4">
				<h1 className="text-left text-slate-200 text-3xl font-semibold">
					Genres
				</h1>
			</div>
			<div
				className="w-full lg:w-[70%] grid grid-cols-2 lg:px-2 px-20 lg:grid-cols-3 xl:grid-cols-5 gap-y-2 gap-x-4
	 mt-2 text-left font-medium text-slate-100"
			>
				{genres &&
					genres.map((genre, index) => (
						<p
							key={genre}
							className={`${
								colors[index % colors.length]
							} w-fit hover:underline cursor-pointer capitalize`}
						>
							<Link href={`/genre/${genre}`}>{genre}</Link>
						</p>
					))}
			</div>
		</div>
	);
};

export default GenresDisplay;
