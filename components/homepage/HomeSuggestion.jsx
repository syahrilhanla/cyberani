import Link from "next/link";
import { useDispatch } from "react-redux";
import { IoPlayCircle } from "react-icons/io5";

const HomeSuggestion = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<Link href={`${data.link}`}>
			<div
				className="grid grid-cols-[5fr_4fr] md:grid-cols-[4fr_6fr]  w-full h-64 md:h-[60dvh] rounded-lg overflow-hidden 
				shadow-lg bg-[#181f33] relative 
				group-hover:scale-105 group-hover:shadow-slate-800/70 transition-all duration-300"
			>
				{/* Left: Content (placeholder for now) */}
				<div className="relative px-4 md:px-12 z-10 flex flex-col gap-4 items-start justify-center h-full">
					{/* Place your content here */}
					<h2 className="text-2xl md:text-4xl font-bold text-slate-100">
						{data.title}
					</h2>
					<p className="hidden sm:block text-sm md:text-base text-slate-100 line-clamp-3 md:line-clamp-none max-w-[32rem] md:max-w-none">
						{data.description}
					</p>

					<button
						className="mt-4 px-4 py-1.5 text-slate-800 rounded-full
						bg-slate-300 hover:scale-[1.03] transition-transform duration-300 text-base font-semibold"
					>
						<IoPlayCircle className="inline mr-1" size={24} />
						Watch Now
					</button>
				</div>
				<div className="relative w-full h-full blur-[3px]">
					<div
						className="absolute inset-0 bg-cover bg-center "
						style={{
							backgroundImage: `url(${data.imgURL})`,
						}}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#181f33] via-[#181f33]/90 to-transparent" />
				</div>
			</div>
		</Link>
	);
};

export default HomeSuggestion;
