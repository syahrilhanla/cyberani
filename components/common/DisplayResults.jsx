import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { goToEpisode, selectAnime } from "../redux/animeSlice";

import { BiLoaderAlt } from "react-icons/bi";

const DisplayResults = ({ searchResults, searchQuery, loading }) => {
	const dispatch = useDispatch();

	return (
		searchResults && (
			<div
				className={
					searchQuery !== ""
						? "absolute bottom-[-1] duration-500"
						: "hidden duration-500"
				}
			>
				<div className="lg:w-full max-h-[70vh] flex flex-col justify-center items-center overflow-auto bg-[#0a192f] rounded-lg px-2">
					{loading ? (
						<div className="flex w-48 xl:w-72 flex-col items-center justify-center p-4">
							<BiLoaderAlt size={32} color="slate" className="animate-spin" />
						</div>
					) : searchResults.length > 0 ? (
						searchResults.map((result) => (
							<Link href={`/anime/${result.id}`} key={result.title}>
								<div
									className="flex min-w-full gap-3 py-2 cursor-pointer hover:bg-[#0f2647]/30 duration-400"
									onClick={() => {
										dispatch(selectAnime(result.title));
										dispatch(goToEpisode(1));
									}}
								>
									<Image
										height={80}
										width={60}
										src={result.image}
										className="rounded-lg object-cover"
									/>
									<p className="text-xs lg:text-sm text-slate-200 text-left whitespace-normal text-ellipsis max-w-[12rem]">
										{result.title}
									</p>
								</div>
							</Link>
						))
					) : (
						<div
							className="grid place-content-center
               place-items-center h-24 w-full p-4"
						>
							<p className="text-slate-200">No Anime Found</p>
						</div>
					)}
				</div>
			</div>
		)
	);
};

export default DisplayResults;
