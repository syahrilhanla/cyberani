import Link from "next/link";

import { IoPlayCircle } from "react-icons/io5";
import { GrChapterAdd } from "react-icons/gr";
import { FaPlayCircle } from "react-icons/fa";

const HomeSuggestion = ({ data }) => {
	return (
		<div
			className="grid grid-cols-[5fr_4fr] md:grid-cols-[4fr_6fr]  w-full h-64 md:h-[60dvh] rounded-lg overflow-hidden 
				shadow-lg bg-[#181f33] relative 
				group-hover:scale-105 group-hover:shadow-slate-800/70 transition-all duration-300"
		>
			<div className="relative px-4 md:px-12 z-10 flex flex-col gap-4 items-start justify-center h-full">
				<h2 className="text-xl md:text-4xl font-bold text-slate-200">
					{data.title}
				</h2>
				<div className="text-slate-200 flex gap-3">
					<span
						className="px-4 py-1.5 rounded-full bg-slate-600 font-semibold text-sm"
						title="Season of Anime"
					>
						{data.season}
					</span>
					<span
						className="flex items-center text-sm md:text-base"
						title="Type of Anime"
					>
						<FaPlayCircle className="inline mr-1 h-6 w-6" /> {data.type}
					</span>
					<span
						className="flex items-center text-sm md:text-base"
						title="Total Episodes"
					>
						<GrChapterAdd className="inline mr-1 h-6 w-6" />{" "}
						{data.totalEpisodes}
					</span>
				</div>
				<p className="invisible md:visible text-xs md:text-base text-slate-200 line-clamp-1 md:line-clamp-3 leading-4 text-ellipsis">
					{data.description}
				</p>
				<Link href={`${data.link}`}>
					<button
						className="md:mt-4 px-4 py-1.5 text-slate-800 rounded-full text-sm md:text-base
						bg-slate-300 hover:scale-[1.03] transition-transform duration-300 font-semibold"
					>
						<IoPlayCircle className="inline mr-1" size={24} />
						Watch Now
					</button>
				</Link>
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
	);
};

export default HomeSuggestion;
