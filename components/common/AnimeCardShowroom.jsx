import Link from "next/link";
import { useDispatch } from "react-redux";
import { selectAnime } from "../redux/animeSlice";

const AnimeCardShowroom = ({ data }) => {
	const dispatch = useDispatch();

	return (
		<Link href={`/anime/${data.animeId}`}>
			<div
				className="mb-4 mx-2 lg:mb-4
			hover:scale-110 transition-all gap-2 duration-500 cursor-pointer"
				onClick={dispatch(selectAnime(data.animeTitle))}
			>
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
							className="object-cover w-full rounded-xl h-[240px]"
						/>
					</span>
				</div>
			</div>
		</Link>
	);
};

export default AnimeCardShowroom;
