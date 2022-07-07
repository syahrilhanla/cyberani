const AnimeCardShowroom = ({ data }) => {
	return (
		<div>
			<div className="relative group">
				<div className="absolute top-0 left-0 z-10 h-[100%] w-full rounded-lg opacity-20 group-hover:opacity-100 duration-300 box-shadow-little flex items-end">
					<div className=" absolute px-3 bottom-3 w-full">
						<p className="opacity-100 z-50 text-base text-center font-normal">
							{data.animeTitle}
						</p>
					</div>
				</div>
				<span>
					<img
						src={data.animeImg}
						className="object-cover w-full h-full rounded-xl"
					/>
				</span>
			</div>
		</div>
	);
};

export default AnimeCardShowroom;
