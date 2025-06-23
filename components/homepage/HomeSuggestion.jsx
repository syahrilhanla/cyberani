import Link from "next/link";
import { useDispatch } from "react-redux";

const HomeSuggestion = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<Link href={`${data.link}`}>
			<div
				className="grid grid-cols-[4fr_6fr] md:w-[75dvw] w-full h-64 md:h-[50dvh] rounded-lg overflow-hidden 
				shadow-lg bg-[#181f33] relative 
				group-hover:scale-105 group-hover:shadow-slate-800/70 transition-all duration-300"
			>
				{/* Left: Content (placeholder for now) */}
				<div className="relative px-12 z-10 flex flex-col gap-4 items-start justify-center h-full">
					{/* Place your content here */}
					<h2 className="text-2xl md:text-4xl font-bold text-slate-100">
						{data.title}
					</h2>
					<p className="text-sm md:text-base text-slate-100">
						{data.description}
					</p>
				</div>
				{/* Right: Image with shadow swallow effect */}
				<div className="relative w-full h-full">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{ backgroundImage: `url(${data.imgURL})` }}
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#181f33] via-[#181f33]/90 to-transparent" />
				</div>
			</div>
		</Link>
	);
};

export default HomeSuggestion;
