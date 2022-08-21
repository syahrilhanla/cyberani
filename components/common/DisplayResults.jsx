import Image from "next/image";
import Link from "next/link";

const DisplayResults = ({ searchResults, searchQuery }) => {
	return (
		searchResults && (
			<div
				className={
					searchQuery !== ""
						? "absolute bottom-[-1] duration-500"
						: "hidden duration-500"
				}
			>
				<div className="w-[60vw] md:w-full max-h-[70vh] overflow-auto bg-[#0a192f] rounded-lg">
					{searchResults.length > 0 ? (
						searchResults.map((result) => (
							<Link href={`/anime/${result.animeId}`} key={result.animeTitle}>
								<div
									className="grid grid-cols-[4fr_6fr] gap-3 place-content-center
               place-items-center py-2 cursor-pointer hover:bg-[#0f2647] duration-200"
								>
									<Image
										height={160}
										width={120}
										src={result.animeImg}
										className="rounded-lg"
									/>
									<p className="text-slate-200">{result.animeTitle}</p>
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
