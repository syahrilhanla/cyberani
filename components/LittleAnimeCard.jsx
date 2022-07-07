import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const LittleAnimeCard = () => {
	return (
		<div>
			<div className="relative group">
				<div className="absolute top-0 left-0 z-10 h-[100%] w-full rounded-lg opacity-20 group-hover:opacity-100 duration-300 box-shadow-little flex items-end">
					<div className=" absolute left-3 md:left-3 bottom-3">
						<span className="flex flex-col md:w-[75%]">
							<p className="opacity-100 z-50 text-sm font-normal md:truncate">
								Jujutsu Kaisen Zero One Two Three
							</p>
							<span className="flex items-center left-3 gap-2">
								<FaPlay /> <p>S1 Ep1</p>
							</span>
						</span>
					</div>
				</div>
				<span>
					<img
						src="https://gogocdn.net/cover/shin-tennis-no-ouji-sama-u-17-world-cup.png"
						className="object-cover w-full h-full rounded-xl"
					/>
				</span>
			</div>
		</div>
	);
};

export default LittleAnimeCard;
