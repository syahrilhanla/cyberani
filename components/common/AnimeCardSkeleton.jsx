const AnimeCardSkeleton = ({ slidesPerView }) => {
	return [...Array(slidesPerView)].map((_, index) => (
		<div
			key={index}
			className="w-full h-full bg-gradient-to-r from-slate-800 to-slate-700 animate-pulse rounded-lg flex flex-col justify-end items-center p-4 gap-2"
		>
			<div className="h-4 w-full bg-slate-600 rounded-full" />
			<div className="h-4 w-2/3 bg-slate-600 rounded-full" />
		</div>
	));
};

export default AnimeCardSkeleton;
