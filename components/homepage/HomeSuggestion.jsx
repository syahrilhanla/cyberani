import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { selectAnime, goToEpisode } from "../redux/animeSlice";

const HomeSuggestion = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<Link href={`${data.link}`}>
			<div
				className="flex lg:flex-row flex-col cursor-pointer 
			justify-center items-center bg-[#030B17] rounded-lg"
				onClick={() => {
					dispatch(selectAnime(data.title));
					dispatch(goToEpisode(1));
				}}
			>
				<div className="px-4 max-w-md mb-5 lg:mb-0 w-[300px] lg:w-full min-h-[268px]">
					<h2 className="text-3xl font-semibold mb-3 lg:mt-0 mt-6 text-gray-200">
						{data.title}
					</h2>
					<span className="flex w-fit gap-2 mb-3">
						<p className="font-medium">{data.genre}</p>{" "}
						<p className="font-medium"> . </p>
						<p className="font-medium">{data.yearRelease}</p>
					</span>
					<p>{data.description}</p>
				</div>
				<div className="px-7 relative lg:min-w-[600px] lg:min-h-[300px] lg:w-[680px] lg:h-[400px] mb-4 lg:mb-0">
					<div
						className="absolute top-0 left-0 z-10 w-full h-full 
						shadow-black shadow-2xl box-shadow opacity-100"
					></div>
					<div className="z-0 min-w-[200px] min-h-[110px]">
						<Image
							src={`/${data.imgURL}`}
							className={"rounded-lg mb-5"}
							alt="Current Image"
							layout={"fill"}
							objectFit="cover"
						/>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default HomeSuggestion;
