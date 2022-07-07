import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const LittleAnimeCard = () => {
	return (
		<div>
			<div className="relative group">
				<div className="absolute top-0 left-0 z-10 h-full w-full opacity-20 group-hover:opacity-100 duration-300 box-shadow-little">
					<div className="flex w-fit shadow-inner ">
						<span className="relative left-1 top-1 text-white px-1 ">
							<div className="absolute -z-10 top-1 bg-black opacity-100 h-full w-fit"></div>
						</span>
						<span className="flex flex-col absolute top-[75%] left-3">
							<p className="opacity-100 z-50 w-[80%] text-sm font-normal overflow-hidden text-ellipsis whitespace-nowrap">
								Jujutsu Kaisen Zero Kaisen Zero
							</p>
							<span className="flex items-center left-3 gap-2">
								<FaPlay /> <p>S1 Ep1</p>
							</span>
						</span>
					</div>
				</div>
				<span>
					<Image
						src={
							"https://gogocdn.net/cover/shin-tennis-no-ouji-sama-u-17-world-cup.png"
						}
						width={200}
						height={280}
						className="rounded-lg z-0"
					/>
				</span>
			</div>
		</div>
	);
};

export default LittleAnimeCard;
