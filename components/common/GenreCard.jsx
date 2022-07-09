const GenreCard = ({ genre }) => {
	return (
		<div
			className="relative max-h-[18rem] max-w-[10rem] mb-4 mx-2 md:mb-4
          hover:scale-110 transition-all gap-2 duration-500"
			key={genre.genre}
		>
			<div
				className="absolute top-0 left-0 z-10 h-[100%] w-full rounded-lg duration-300 flex items-end"
				style={{
					boxShadow: "200px 200px 0px 200px rgba(0,0,0,0.45) inset",
				}}
			>
				<div className="flex justify-center items-center h-full w-full">
					<p className="opacity-100 z-50 text-lg text-center font-semibold">
						{genre.genre}
					</p>
				</div>
			</div>
			<span>
				<img
					src={
						genre.imgURL
							? genre.imgURL
							: "https://gogocdn.net/cover/shingeki-no-kyojin-the-final-season-kanketsu-hen.png"
					}
					className="object-cover w-full h-full rounded-xl"
				/>
			</span>
		</div>
	);
};

export default GenreCard;
